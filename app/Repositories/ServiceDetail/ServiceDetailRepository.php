<?php
namespace App\Repositories\ServiceDetail;

use App\ServiceDetail;
use App\ServiceDetailGoods;
use App\Service;
use App\Inventory;
use App\InventoryDetail;
use App\Goods;
use Session;
use Illuminate\Http\Request;
use Gate;
use Datatables;
use Carbon;
use PHPZen\LaravelRbac\Traits\Rbac;
use Auth;
use Illuminate\Support\Facades\Input;
use DB;
use Debugbar;
use App\Repositories\BaseInterface\Repository;
use App\Repositories\ServiceDetail\ServiceDetailRepositoryInterface;
use App\Http\Controllers\Api\Traits\BaseResponseTrait;

class ServiceDetailRepository implements ServiceDetailRepositoryInterface
{
    use BaseResponseTrait;
    //默认查询数据
    protected $select_columns = ['id', 'name', 'customer', 'service_id', 'charge_price', 'inventory_percentage','inventory_profit', 'goods_cost',  'status', 'goods_num', 'customer_telephone', 'remark', 'creater_id', 'created_at', 'updated_at'];

    // 根据ID获得业务信息
    public function find($id)
    {
        return ServiceDetail::select($this->select_columns)
                       ->findOrFail($id);
    }

    // 获得业务列表
    public function getAllServiceDetail()
    {   
        return ServiceDetail::where('status', '1')
                            ->with('belongsToCreater')
                            ->orderBy('created_at', 'DESC')
                            ->paginate(10);
    }

    // 获得所有业务
    public function getServiceDetails()
    {   
        return ServiceDetail::select($this->select_columns)
                       ->where('status', '1')
                       ->get();
    }

    // 创建业务
    public function create($requestData)
    {   
        DB::beginTransaction();
        try {
            /**
            *1.业务细节处理
            *2.业务礼品处理
            **/
            // dd($requestData->all());

            $serviceInfo = Service::findorFail($requestData->service_id);
            $g_list = $requestData->goodsIdList;
            // dd($g_list);

            // dd($serviceInfo);
            $inventory_percentage = 0; //业务佣金,按比例或按金额
            $goods_cost           = 0; //赠品金额
            $inventory_profit     = 0; //利润
            $goodsList            = []; //赠品列表
            $allGoodsNum          = 0; //赠品总数
            foreach ( $g_list as $key => $value) {
                // 处理业务礼品/赠品,获取商品库存,判断是否有赠品及赠品数量是否足够
                if(!empty($value['goodsId'])){
                    $goodsInfo = Goods::findorFail($value['goodsId']);
                    // dd($value);
                    $goods_cost += ($goodsInfo->in_price) * ($value['num']);
                    $goodsList[$key]['goodsId'] = $value['goodsId'];
                    $allGoodsNum += $value['num'];
                    $goodsList[$key]['goods_price'] = $goods_cost;
                    $goodsList[$key]['goods_num']   = $value['num'];
                    // dd($g_list);
                }
            }

            $inventory_profit = $requestData->charge_price - $goods_cost;

           /* p($inventory_profit);
            p($goods_cost);
            p($allGoodsNum);
            p($requestData->goodsIdList);
            dd($goodsList);*/

            

            if($serviceInfo->type == '1'){
                //按比例
                $inventory_percentage = $requestData->charge_price * $serviceInfo->return_ratio;
            }else{
                //按金额
                $inventory_percentage = $serviceInfo->return_price;
            }


            // dd($serviceInfo);
            // dd($inventory_percentage);

            $requestData['creater_id']            = Auth::id();
            $requestData['status']                = '1';
            $requestData['name']                  = $serviceInfo->name;
            $requestData['goods_num']             = $allGoodsNum;
            $requestData['inventory_percentage']  = $inventory_percentage;
            $requestData['inventory_profit']      = $inventory_profit;
            $requestData['goods_cost']            = $goods_cost;
            
            $new_sevice = new ServiceDetail();
            $input =  array_replace($requestData->all());
            $new_sevice->fill($input);

            $new_sevice = $new_sevice->create($input);
            // dd($sevice_obj);
            // dd($requestData->month_price);
           
            foreach ($goodsList as $key => $g) {
                //添加业务赠品详情,对应赠品库存处理(减库存)
                $sevice_goods_info      = new ServiceDetailGoods(); //业务信息赠品对象
                $sevice_goods_inventory = Inventory::findorFail($g['goodsId']); //业务信息赠品库存对象
                $out_inventory          = new InventoryDetail(); //出库明细

                //业务赠品处理
                $sevice_goods_info->goods_id           = $g['goodsId'];
                $sevice_goods_info->service_detail_id  = $new_sevice->id;
                $sevice_goods_info->creater_id         = Auth::id();
                $sevice_goods_info->goods_num          = $g['goods_num'];
                $sevice_goods_info->goods_price        = $g['goods_price'];
                $sevice_goods_info->save();

                //业务赠品库存处理
                $sevice_goods_inventory->inventory_now -= $g['goods_num'];
                $sevice_goods_inventory->save();

                //出库单号
                $date = (string) (time());
                $date = substr($date, 1);
                $code = 'O-'.$date;

                $out_inventory->inventory_type = '2';
                $out_inventory->inventory_code = $code;
                $out_inventory->creater_id     = Auth::id();
                $out_inventory->goods_id       = $g['goodsId'];
                $out_inventory->goods_nums     = $g['goods_num'];
                $out_inventory->save();


                // dd($sevice_goods_info);
                // dd($sevice_goods_inventory);
            }
            //出入库明细添加

            DB::commit();
            return $new_sevice;
        } catch (\Exception $e) {
            throw $e;
            DB::rollBack();
            return false;
        }
    }

    // 修改业务
    public function update($requestData, $id)
    {   
        $sevice_obj = (object) '';
        DB::transaction(function() use ($requestData,$id,$sevice_obj_obj){


            // dd($requestData->all());
            $sevice_obj  = ServiceDetail::findorFail($id);
            $input    =  array_replace($requestData->all());

            // dd($sevice_obj);
            // dd($sevice_obj->hasManyServiceDetailInfo);
            $sevice_obj->fill($input)->save();
            // dd($sevice_obj->hasManyServiceDetailInfo);
            foreach ($sevice_obj->hasManyServiceDetailInfo as $key => $value) {
                //删除原有业务月返还信息
                $value->status = '0';
                $value->save();
                // dd(lastSql());
            }
            
            foreach ($requestData->return_moon_price_list as $key => $price) {
                //新建业务月返还信息
                $sevice_obj_info = new ServiceDetailInfo(); //业务信息对象

                $sevice_obj_info->pid          = $sevice_obj->id;
                $sevice_obj_info->nums         = $sevice_obj->month_nums;
                $sevice_obj_info->creater_id   = Auth::id();
                $sevice_obj_info->return_month = $price['key'];
                $sevice_obj_info->return_price = $price['price'];
                $sevice_obj_info->save();
            }
            $sevice_obj_obj->scalar = $sevice_obj;
        });
        return $sevice_obj_obj;
    }

    // 删除业务
    public function destroy($id)
    {
        try {
            $sevice_obj = ServiceDetail::findorFail($id);
            $sevice_obj->status = '0';
            $sevice_obj->save();

            return $sevice_obj;
           
        } catch (\Illuminate\Database\QueryException $e) {
            return false;
        }      
    }

    //判断业务是否重复
    public function isRepeat($requestData){

        $sevice_obj = ServiceDetail::select('id', 'name')
                        ->where('name', $requestData->name)
                        ->where('sevice_obj_price', $requestData->sevice_obj_price)
                        ->where('month_nums', $requestData->month_nums)
                        ->where('status', '1')
                        ->first();
        // dd(isset($cate));
        return $sevice_obj;
    }
}

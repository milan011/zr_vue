<?php
namespace App\Repositories\Inventory;

use App\Inventory;
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
use App\Repositories\Inventory\InventoryRepositoryInterface;

class InventoryRepository implements InventoryRepositoryInterface
{

    //默认查询数据
    protected $select_columns = ['id','goods_id', 'inventory_now',  'created_at', 'updated_at'];

    // 根据ID获得库存信息
    public function find($id)
    {
        return Inventory::select($this->select_columns)
                       ->findOrFail($id);
    }

    // 获得库存列表
    public function getAllInventory()
    {   
        $goodsNowList = [];
        $goodsNow = Goods::where('status', '1')->select('id')->get(); //当前有效商品
        

        foreach ($goodsNow as $key => $value) {
            $goodsNowList[] = $value->id;
        }

        // dd($goodsNowList);

        return Inventory::where('status', '1')
                        /*->with(['belongsToGoods'=>function($query){
                            $query->where('status','1');
                        }])*/
                        ->whereIn('id', $goodsNowList)
                        ->with('belongsToGoods')

                        ->orderBy('created_at', 'DESC')
                        ->paginate(10);
    }

    // 获得所有库存
    public function getInventorys()
    {   
        return Inventory::select($this->select_columns)
                       ->where('status', '1')
                       ->orderBy('package_price')
                       ->get();
    }

    // 创建库存
    public function create($requestData)
    {   
        // dd($requestData->all());
        $package_obj = (object) '';
        DB::transaction(function() use ($requestData, $package_obj){

            $requestData['creater_id']    = Auth::id();
            $requestData['status']        = '1';
            //$requestData['name']          = $requestData['package_name'];

            // dd($requestData->all());
            
            $package = new Inventory();
            $input =  array_replace($requestData->all());
            $package->fill($input);

            $package = $package->create($input);
            // dd($package);
            // dd($requestData->month_price);
           
            foreach ($requestData->return_moon_price_list as $key => $price) {

                $package_info = new InventoryInfo(); //库存信息对象

                $package_info->pid           = $package->id;
                $package_info->nums          = $package->month_nums;
                $package_info->creater_id    = Auth::id();
                $package_info->return_month  = $price['key'];
                $package_info->return_price  = $price['price'];
                $package_info->save();

                // dd($package_info);
            }
            $package_obj->scalar = $package;         
        });
        return $package_obj;
    }

    // 修改库存
    public function update($requestData, $id)
    {   
        $package_obj = (object) '';
        DB::transaction(function() use ($requestData,$id,$package_obj){


            // dd($requestData->all());
            $package  = Inventory::findorFail($id);
            $input    =  array_replace($requestData->all());

            // dd($package);
            // dd($package->hasManyInventoryInfo);
            $package->fill($input)->save();
            // dd($package->hasManyInventoryInfo);
            foreach ($package->hasManyInventoryInfo as $key => $value) {
                //删除原有库存月返还信息
                $value->status = '0';
                $value->save();
                // dd(lastSql());
            }
            
            foreach ($requestData->return_moon_price_list as $key => $price) {
                //新建库存月返还信息
                $package_info = new InventoryInfo(); //库存信息对象

                $package_info->pid          = $package->id;
                $package_info->nums         = $package->month_nums;
                $package_info->creater_id   = Auth::id();
                $package_info->return_month = $price['key'];
                $package_info->return_price = $price['price'];
                $package_info->save();
            }
            $package_obj->scalar = $package;
        });
        return $package_obj;
    }

    // 删除库存
    public function destroy($id)
    {
        try {
            $package = Inventory::findorFail($id);
            $package->status = '0';
            $package->save();

            return $package;
           
        } catch (\Illuminate\Database\QueryException $e) {
            return false;
        }      
    }

    //判断库存是否重复
    public function isRepeat($requestData){

        $package = Inventory::select('id', 'name')
                        ->where('name', $requestData->name)
                        ->where('package_price', $requestData->package_price)
                        ->where('month_nums', $requestData->month_nums)
                        ->where('status', '1')
                        ->first();
        // dd(isset($cate));
        return $package;
    }
}

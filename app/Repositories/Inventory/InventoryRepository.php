<?php
namespace App\Repositories\Inventory;

use App\Inventory;
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
    protected $select_columns = ['id', 'bloc', 'name', 'month_nums','package_price', 'netin', 'status', 'remark', 'creater_id', 'created_at', 'updated_at'];

    // 根据ID获得套餐信息
    public function find($id)
    {
        return Inventory::select($this->select_columns)
                       ->findOrFail($id);
    }

    // 获得套餐列表
    public function getAllGoods()
    {   
        return Inventory::where('status', '1')->orderBy('package_price')->orderBy('created_at', 'DESC')->paginate(10);
    }

    // 获得所有套餐
    public function getInventorys()
    {   
        return Inventory::select($this->select_columns)
                       ->where('status', '1')
                       ->orderBy('package_price')
                       ->get();
    }

    // 创建套餐
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

                $package_info = new InventoryInfo(); //套餐信息对象

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

    // 修改套餐
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
                //删除原有套餐月返还信息
                $value->status = '0';
                $value->save();
                // dd(lastSql());
            }
            
            foreach ($requestData->return_moon_price_list as $key => $price) {
                //新建套餐月返还信息
                $package_info = new InventoryInfo(); //套餐信息对象

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

    // 删除套餐
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

    //判断套餐是否重复
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

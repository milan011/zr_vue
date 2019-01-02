<?php
namespace App\Repositories\Repertory;

use App\Repertory;
use Session;
use Illuminate\Http\Request;
use Gate;
use Datatables;
use Carbon;
use Auth;
use Illuminate\Support\Facades\Input;
use DB;
use Debugbar;
use App\Repositories\BaseInterface\Repository;
use App\Repositories\Repertory\RepertoryRepositoryInterface;

class RepertoryRepository implements RepertoryRepositoryInterface
{
    //默认查询数据
    protected $select_columns = ['id', 'name', 'address','creater_id','status','created_at','updated_at'];

    // 根据ID获得车源信息
    public function find($id)
    {
        return Repertory::select($this->select_columns)
                   ->findOrFail($id);
    }

    // 根据不同参数获得仓库
    public function getAllRepertorys($request)
    {   
        // dd($request->all());
        // $query = Order::query();  // 返回的是一个 QueryBuilder 实例
        $query = new Repertory();       // 返回的是一个Order实例,两种方法均可

        $query = $query->addCondition($request->all()); //根据条件组合语句
     
        // dd($query);
        // $query = $query->where('is_show', '1');
        $query = $query->where('status', '1');
        $query = $query->where('name', '!=', '');
        // $query = $query->where('car_status', $request->input('car_status', '1'));

        return $query->select($this->select_columns)
                     ->orderBy('created_at', 'desc')
                     ->paginate(10);
    }

    // 获取所有仓库
    public function getRepertorys()
    {   
        // dd($request->all());
        // $query = Order::query();  // 返回的是一个 QueryBuilder 实例
        $query = new Repertory();       // 返回的是一个Order实例,两种方法均可

        $query = $query->where('status', '1');
        $query = $query->where('name', '!=', '');

        return $query->select($this->select_columns)
                     ->orderBy('created_at', 'desc')
                     ->get();
    }

    // 添加仓库
    public function create($requestData)
    {   
        $requestData['creater_id'] = Auth::id();
        // dd($requestData->all());
        // $requestData['first_letter'] = strtoupper($requestData['first_letter']);
        $repertory = new Repertory;
        $input  =  array_replace($requestData->all());
        $repertory->fill($input);

        $repertory = $repertory->create($input);

        return $repertory;         
    }

    // 修改商品
    public function update($requestData, $id)
    {
        
        $repertory  = Repertory::findorFail($id);
        
        $repertory->name          = $requestData->name;
        // $repertory->telephone     = $requestData->telephone;
        // $repertory->first_letter  = $requestData->first_letter;
        //$repertory->wx_number     = $requestData->wx_number;
        //$repertory->email         = $requestData->email;
        $repertory->address       = $requestData->address;
        //$repertory->remark        = $requestData->remark;

        $repertory->save();
        // dd($shop->toJson());
        // Session::flash('sucess', '修改成功');
        return $repertory;
    }

    // 删除商品
    public function destroy($id)
    {
        try {
            $repertory = Repertory::findorFail($id);
            $repertory->status = '0';
            $repertory->save();
            
            return $repertory;
           
        } catch (\Illuminate\Database\QueryException $e) {
            return false;
        }      
    }
}

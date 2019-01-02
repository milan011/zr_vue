<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Auth;
use Gate;
use DB;
use Carbon;
use App\Repertory;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Repositories\Repertory\RepertoryRepositoryInterface;
use App\Repositories\User\UserRepositoryInterface;
use App\Http\Resources\Repertory\RepertoryResource;
use App\Http\Resources\Repertory\RepertoryResourceCollection;
/*use App\Repositories\Car\CarRepositoryContract;
use App\Repositories\Shop\ShopRepositoryContract;
use App\Http\Requests\Cars\UpdateCarsRequest;
use App\Http\Requests\Cars\StoreCarsRequest;*/

class RepertoryController extends Controller
{   
    protected $repertory;
    protected $user;


    public function __construct(

        RepertoryRepositoryInterface $repertory,
        UserRepositoryInterface $user
    ) {
    
        $this->repertory = $repertory;
        $this->user = $user;
    }

    /**
     * Display a listing of the resource.
     * 所有车源列表
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {     
        
        $all_repertory = $this->repertory->getAllRepertorys($request);
        // dd($all_repertory->links());
        // 
        
        // dd(new RepertoryResource($all_repertory));
        
        return new RepertoryResource($all_repertory);
    }

    /**
     * 所有仓库列表(无分页)
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function repertoryAll(Request $request)
    {
        $repertorys = $this->repertory->getRepertorys();
        /*$repertorys = Repertory::select('id', 'name', 'address')
                                 ->where('status', '1')
                                 ->get();*/
        // $repertorys = $repertorys->groupBy('first_letter');

        return new RepertoryResource($repertorys);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $repeat_user = $this->isRepeat($request->name, $request->address);
        // p(lastSql());
        // dd($repeat_user);

        if($repeat_user){
            return $this->baseFailed($message = '仓库存在');
        }

        $new_repertory = $this->repertory->create($request);
        
        // dd($new_repertory);
        if($new_repertory){ //添加成功
            return $this->baseSucceed($respond_data = $new_repertory, $message = '添加成功');
        }else{  //添加失败
            return $this->baseFailed($message = '内部错误');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $repertory = $this->repertory->find($id);

        // dd($cars->hasManyImages()->get());
        return view('admin.repertory.show', compact('repertory'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $repertory = $this->repertory->find($id);
        // dd($repertory);
        return view('admin.repertory.edit', compact(
            'repertory'
        ));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $repertoryRequest, $id)
    {
        // dd($repertoryRequest->all());
        $repertory = Repertory::select('id', 'name', 'address', 'created_at')
                          ->find($id);
        $change_repertory = $this->isRepeat($repertoryRequest->name, $repertoryRequest->address);

        if($change_repertory && ($change_repertory->id != $id)){
            return $this->baseFailed($message = '您修改后的仓库信息与现有仓库冲突');
        }

        $repertory = $this->repertory->update($repertoryRequest, $id);

        return $this->baseSucceed($respond_data = $repertory, $message = '修改成功');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->repertory->destroy($id); 

        return $this->baseSucceed($message = '修改成功');
    }

    //判断仓库是否重复
    protected function isRepeat($name, $address){

        $repertory = Repertory::select('id', 'name', 'address', 'created_at')
                          ->where('name', $name)
                          ->where('address', $address)
                          ->where('status', '1')
                          ->first();
        // dd($repertory);
        return $repertory;
    }
}

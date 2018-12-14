<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
// use App\ServiceDetailPrice;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Repositories\ServiceDetail\ServiceDetailRepositoryInterface;
use App\Http\Resources\ServiceDetail\ServiceDetailResource;
use App\Http\Resources\ServiceDetail\ServiceDetailResourceCollection;
//use App\Http\Requests\ServiceDetail\UpdateServiceDetailRequest;
//use App\Http\Requests\Package\StorePackageRequest;

class ServiceDetailController extends Controller
{
    protected $serviceDetail;

    public function __construct(

        ServiceDetailRepositoryInterface $serviceDetail
    ) {
    
        $this->serviceDetail = $serviceDetail;
        // $this->middleware('brand.create', ['only' => ['create']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // dd($request->all());

        $serviceDetails = $this->serviceDetail->getAllServiceDetail();

        // dd($serviceDetails);
        return new ServiceDetailResource($serviceDetails);
    }

    /**
     * 所有业务列表(无分页)
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function serviceDetailAll(Request $request)
    {
        $serviceDetails = $this->serviceDetail->getServiceDetails();

        return new ServiceDetailResource($serviceDetails);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.serviceDetail.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $serviceDetailRequest)
    {
        // dd($serviceDetailRequest->all());
        if($this->serviceDetail->isRepeat($serviceDetailRequest)){
            return $this->baseFailed($message = '该业务已存在');
        }

        $new_serviceDetail = $this->serviceDetail->create($serviceDetailRequest);
        $new_serviceDetail->belongsToCreater;

        if($new_serviceDetail){ //添加成功
            return $this->baseSucceed($respond_data = $new_serviceDetail, $message = '添加成功');
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
    public function getServiceDetail($id)
    {
        $serviceDetail = $this->serviceDetail->find($id);
        $serviceDetail->hasManyServiceDetailInfo;

        return $this->baseSucceed($respond_data = $serviceDetail, $message = '');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $serviceDetail      = $this->serviceDetail->find($id); //业务详情
        $serviceDetail_info = $serviceDetail->hasManyServiceDetailInfo->toJson(); //业务返还详情

        // dd($serviceDetail);
        // dd($serviceDetail_info);
        return view('admin.serviceDetail.edit', compact('serviceDetail', 'serviceDetail_info'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $serviceDetailRequest, $id)
    {
        // dd($serviceDetailRequest->all());
        $update_serviceDetail = $this->serviceDetail->isRepeat($serviceDetailRequest);
        if($update_serviceDetail && ($update_serviceDetail->id != $id)){
            return $this->baseFailed($message = '您修改后的业务信息与现有业务冲突');
        }
        $serviceDetail = $this->serviceDetail->update($serviceDetailRequest, $id);
        // dd(redirect()->route('serviceDetail.index'));
        return $this->baseSucceed($respond_data = $serviceDetail, $message = '修改成功');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {   
        // dd('删了');
        $this->serviceDetail->destroy($id);        
        return $this->baseSucceed($message = '修改成功');
    }
}

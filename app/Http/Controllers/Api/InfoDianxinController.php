<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Auth;
use Gate;
use DB;
use Excel;
use Session;
use Carbon;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Resources\InfoDianxin\InfoDianxinResource;
use App\Http\Resources\InfoDianxin\InfoDianxinResourceCollection;
use App\Repositories\InfoDianxin\InfoDianxinRepositoryInterface;


class InfoDianxinController extends Controller
{   
    protected $infoDianxin;
    

    public function __construct(

        InfoDianxinRepositoryInterface $infoDianxin
        /*BrandRepositoryContract $brands,
        ShopRepositoryContract $shop*/
    ) {
    
        $this->infoDianxin = $infoDianxin;
        /*$this->brands = $brands;
        $this->shop = $shop;*/


        // $this->middleware('brand.create', ['only' => ['create']]);
    }

    /**
     * Display a listing of the resource.
     * 所有信息列表
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $request['status'] = '1';
        
        $infos = $this->infoDianxin->getAllDianXinInfos($request);
        
        return new InfoDianxinResource($infos);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $dt = Carbon::now(); //当前日期

        $dt_year  = $dt->year;  //当前年
        $dt_month = $dt->month; //当前月

        // $managers = $this->manager->getManagers(); // 电信客户经理
        // $packages = $this->package->getPackages(); // 电信客户经理

        return view('admin.infoDianxin.create', compact('dt_year', 'dt_month'));
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
        $info = $this->infoDianxin->create($request);

        return redirect('infoDianxin/index')->withInput();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $info         = array();
        $package_info = array();

        $info         = $this->infoDianxin->find($id);
        // $package_info = $info->hasOnePackage;

         // dd($info);

        return view('admin.infoDianxin.show', compact('info'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $side_number_array = array();
        $info              = $this->infoDianxin->find($id);
        
        // dd($info);

        $netin_date  = explode('-', $info->netin); //入网日期转数组
        $netin_year  = $netin_date[0]; //入网年
        $netin_month = $netin_date[1]; //入网月


        return view('admin.infoDianxin.edit', compact(
            'info','netin_year', 'netin_month'
        ));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // dd($request->all());

        $this->infoDianxin->update($request, $id);
        
        return redirect('infoDianxin/index')->withInput();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // dd($request->all());

        // dd($id);
        $this->infoDianxin->destroy($id);

        return redirect('infoDianxin/index');
        // return redirect('order/index')->route('order.index');
    }

    // ajax修改商品价格
    public function ajaxUpdatePrice(Request $request){
        // p($request->all());exit;

        $price = $this->goodsPrice->updateAjax($request); 
        // p($price);exit;
        return response()->json(array(
            'status'      => 1,
            'msg'         => '修改成功',
        ));
    }

    /**
     * Show the form for editing the specified resource.
     * 错误页面
     * @param  
     * @return \Illuminate\Http\Response
     */
    public function error()
    {
        return view('admin.errors.icon');
    }

    /**
     * Show the form for editing the specified resource.
     * 导入文件
     * @param  
     * @return \Illuminate\Http\Response
     */
    public function importExcel(Request $request)
    {
        // dd(session::get('file_name'));
        // dd(public_path('uploads/dianxinExcel'));
        // dd('xixi');
        $filePath = public_path('uploads/dianxinExcel/').session::get('file_name');
        $time_star = time();//得到当前时间戳，用来在最后计算文件导入完毕后的用时
        /*dd($filePath);
        dd('hehe');*/
        // $filePath = public_path('uploads\dianxinExcel/').'test'.'.xls';
        
        // $fielPath = "F:\phpStudy\WWW\www.zhuorui.net\public\uploads\dianxinExcel".'\\'.'test.xls';
        // dd($filePath);
        
        $info_count_before = DB::table('zr_info_dianxin')->count(); //插入前总数据量
        
        Excel::load($filePath, function($reader) {
                
            $tables = $reader->all();
            // $table = $reader->getSheet(0)->toArray(); //只获取第一个sheet
            // $table = $reader->toArray();
            $table = $tables[0];
            
            // dd($table); //表是否为空
            // 
            $regexp_banlce_moth = '/^\+?[1-9][0-9]*$/'; //匹配只能是1或2位数字正则(结算月)
            $regexp_return_moth = '/^\d{6}$/';   //匹配只能是6位数字正则(返还日期)
            $regexp_tele        = '/^1[3|5|7|8|9]{1}[0-9]{9}$/';   //匹配电话号码

            if($table->isEmpty()){
                // p('hehe');exit;
                throw new \App\Exceptions\ExcelException('您导入的表是空表');
            }

            $table = $table->unique(); //清除重复数据

            //表title信息
            $table_key = array("套餐名称","返款号码","返款金额","价款","结算月","佣金方案","返还日期",'客户经理', '集团名称');

            foreach ($table_key as $key => $value) {
                # 判断传入的表数据是否符合title
                // dd($table[0]);
                if(!$table[0]->has($value)){
                    throw new \App\Exceptions\ExcelException('您导入的表头不符合要求,请下载标准表格');
                }
            }         

            /*$p = '/apple/';
            $str = "apple banna";
            if (preg_match($p, $str)) {
                echo 'matched';
            } */ 
            // dd($table);
            foreach ($table as $key => $value) {
                // dd($table);
                // dd($value);
                // 表每一行都必须有数据
                foreach ($value as $k => $v) {
                    p($k);
                    p('--');
                    p($v);
                    p('<br>');
                   if(empty($v)){
                    dd($v);   
                    throw new \App\Exceptions\ExcelException('您导入的表有空数据,请填写数据后导入,请检查第'.($key+2).'行');
                   }
                }
                exit;
                // p(preg_match($regexp_banlce_moth, 2));exit;

                if (!preg_match($regexp_banlce_moth, $value['结算月'])) {
                    /*p($key);
                    p((integer)$value['结算月']);

                    dd($value);*/
                    throw new \App\Exceptions\ExcelException('结算月应为1-12之间数字,请检查第'.($key+2).'行');
                }

                if (!preg_match($regexp_return_moth, $value['返还日期'])) {
                    /*p($key);
                    p((integer)$value['返还日期']);

                    dd($value);*/
                    throw new \App\Exceptions\ExcelException('返还日期应为******格式,如201801,请检查第'.($key+2).'行');
                }

                if (!preg_match($regexp_tele, $value['返款号码'])) {
                    throw new \App\Exceptions\ExcelException('返款号码非有效手机号码请检查第'.($key+2).'行');
                }
            }
            // dd('done');
            $table = $table->chunk(10); //循环处理数据每次处理10条
            /*$num = (string)2.0;
            dd($num);*/
            // dd($table);
            
            $success_count = 0;         

            // dd(lastSql());
            // dd($info_count_before);*/

            try {

                foreach ($table as $key => $value) {
                    $data = [];

                    foreach ($value as $k => $v) {

                        $row["name"]             = trim($v['套餐名称']);//套餐名称
                        $row["return_telephone"] = (string)trim($v['返款号码']);//返款号码
                        $row["refunds"]          = trim($v['返款金额']);//返款金额
                        $row["yongjin"]          = trim($v['佣金方案']);//佣金方案
                        $row["balance_month"]    = (string)trim($v['结算月']);//结算月
                        $row["netin"]            = (string)trim($v['返还日期']);//返还日期
                        $row["jiakuan"]          = trim($v['价款']);//价款
                        $row["manager"]          = trim($v['客户经理']);//客户经理
                        $row["jituan"]           = trim($v['集团名称']);//集团名称

                        array_push($data, $row);
                    }
                    // dd($data);
                    //插入
                    foreach($data as $d){
                        if(!$d)continue;
                        // $d = collect($d);
                        // dd($d);
                        $infoDianxin = $this->infoDianxin->create($d);
    
                        /*DB::transaction(function ()use($d) {//一些导入操作
                            $insert_id = DB::table("zr_info_dianx")->insertGetId($d);
                            //一些数据库操作
                        });*/
                        /*p('hehe');
                        dd(lastSql());*/
                        $success_count++;
                    }
                }
                
                

                /*return Response::json(["success" => true, "message" => "本次共导入 ".($success_count+$err_count).' 条数据 , 其中失败 '.$err_count.' 条 。 ','download'=>$download,'time'=>($time_end-$time_star)]);*/
                // $message = "本次共导入 ".($info_count_after - $info_count_before).' 条数据';
                //p('4');
                //p($message);
                // return redirect()->back();
                // dd(redirect()->route('infoDianxin.index')->setTargetUrl($_SERVER['HTTP_REFERER']));
                
                //p('ful');               
                //return redirect()->route('infoDianxin.index')->setTargetUrl($_SERVER['HTTP_REFERER']);
                // return redirect('/infoDianxin/index')->with('message', $message);

            } catch (\Exception $e) {
                return redirect()->route('infoDianxin.error');
            }          
        });

        /*try{
            //导入执行代码              
            
        }catch(Exception $e){
                //自定义处理异常
        }*/ 
        $info_count_after = DB::table('zr_info_dianxin')->count(); //插入前总数据量
        $info_nums = $info_count_after - $info_count_before;

        $message = "本次共导入 ".$info_nums.' 条数据.'.'若导入数据数目跟您表格中数目不相符,说明您表格中某些数据系统中已经存在';
        
        Session::flash('sucess', $message);

        return redirect()->route('infoDianxin.index');
    }

    public function exampleExcelDownload()
    {
        return response()->download(realpath(public_path('uploads/example.xlsx')));
    }
}

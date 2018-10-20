<?php

namespace App\Http\Controllers\Api;

use Auth;
use App\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\User\UserResource;
use App\Http\Resources\User\UserResourceCollection;
use App\Repositories\User\UserRepositoryInterface;
use App\Http\Requests\UserRequest;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
	private $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
    	

        // parent::__construct();
        $this->userRepository = $userRepository;
		// $this->middleware('passport-administrators');
        // $this->middleware('auth:api');
    }

    /**
     * 所有用户列表
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {

        $users = User::orderBy('created_at', 'DESC')->paginate(10);

        // return new UserResource($users);

        return $users;
    }

    /**
     * 获取登录用户信息,用于Auth
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUser(Request $request){

        $user = User::find(Auth::user()->id);
        
        // $result = new UserResource($user);
        UserResource::withoutWrapping();
        
        return new UserResource($user);

        /*return response([
                'status' => 'success',
                'data' => $user
            ]);*/
    }

    /**
     * Log the user out of the application.
     *
     * @param \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        Auth::guard()->logout();

        return redirect('/login');
    }

    /**
     * Store a newly created resource in storage.
     * 保存用户
     * @param User $user
     * @return Response
     */
    public function store(UserRequest $userRequest) {
        // dd('hehe');
        // dd($userRequest->all());

        // return $this->baseSucceed($respond_data = '', $message = '操作成功');
        $user = $this->userRepository->create($userRequest);

        if($user){ //添加成功

            return $this->baseSucceed($respond_data = $user, $message = '添加成功');
            /*return $this->respond([
                'status'  => true, 
                'data'    => $user, 
                'message' => '添加成功',
            ]);*/
        }else{  //添加失败
            return $this->baseFailed($message = '内部错误');
            /*return $this->respond([
                'status'  => false, 
                'data'    => '', 
                'message' => '添加失败',
            ]);*/
        }
        
        
        // return redirect()->route('user.index');
    }

    /**
     * Update the specified User in storage.
     *
     * @param  int $id
     * @param UpdateUserRequest $request
     *
     * @return JsonResponse
     */
    public function update($id, Request $request)
    {
        p($id);
        dd($request->all());
    }

    // 获取用户角色列表
    public function getUserRoles($id)
    {   
        $user = $this->userRepository->find($id);
        $roles = $user->getRoleNames();
        // $permissions = $user->getAllPermissions();
        
        // $role = Role::findOrFail(2);
        //$users = User::role('admin')->get();
        // dd($role);
        //p($roles);
        // dd($permissions);
        //p(lastSql());
        //dd($users);
        return $this->baseSucceed($respond_data = $roles, $message = '添加成功');
    }

    // 编辑用户角色列表
    public function giveUserRoles($id, Request $request)
    {
        // dd($request->all());
        $user = User::findOrFail($id);
        $roles = $request->post('roles');
        /*p($user);
        dd($permissions);*/
        $user->syncRoles($roles);


        return response([
            'status' => 'success'
        ]); 
    }
}

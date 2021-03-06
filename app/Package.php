<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use DB;

class Package extends Model
{
    use SoftDeletes;

    /**
     * The database table used by the model.
     * 定义模型对应数据表及主键
     * @var string
     */
    // protected $table = 'users';
    protected $table = 'zr_package';
    protected $primaryKey ='id';

    /**
     * The attributes that are mass assignable.
     * 定义可批量赋值字段
     * @var array
     */
    protected $fillable = ['id','name', 'package_price', 'status', 'month_nums', 'recommend', 'remark', 'creater_id', 'created_at', 'updated_at'];

    /**
     * The attributes excluded from the model's JSON form.
     * //在模型数组或 JSON 显示中隐藏某些属性
     * @var array
     */
    protected $hidden = [   
        
    ];

    /**
     * 应该被调整为日期的属性
     * 定义软删除
     * @var array
     */
    protected $dates = ['deleted_at'];

    // 插入数据时忽略唯一索引
    public static function insertIgnore($array){
        $a = new static();
        if($a->timestamps){
            $now = \Carbon\Carbon::now();
            $array['created_at'] = $now;
            $array['updated_at'] = $now;
        }
        DB::insert('INSERT IGNORE INTO '.$a->table.' ('.implode(',',array_keys($array)).
            ') values (?'.str_repeat(',?',count($array) - 1).')',array_values($array));
    }

    // 定义套餐表与信息表一对多关系
    public function belongsToInfoSelf(){

      return $this->belongsTo('App\InfoSelf', 'id', 'package_id');
    }

    // 定义Package表与PackageInfo表一对多关系
    public function hasManyPackageInfo(){

      return $this->hasMany('App\PackageInfo', 'pid', 'id')
                  ->select('return_month', 'return_price', 'status', 'id')
                  ->where('status', '1')
                  ->orderBy('return_month', 'DESC');
    }

    // 定义User表与Package表一对多关系
    public function belongsToUser(){

      return $this->belongsTo('App\User', 'creater_id', 'id')->select('id', 'nick_name', 'telephone');
    }
}

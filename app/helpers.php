<?php

//打印测试数据函数
function p($s)
{

    echo '<pre>';
    var_dump($s);
    echo '</pre>';
}

// 获取最后一条sql
function lastSql()
{
	\DB::connection()->enableQueryLog(); // 开启查询日志

    $sql = DB::getQueryLog();

    $query = end($sql);

    return $query;
}

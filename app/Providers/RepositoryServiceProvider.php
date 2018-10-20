<?php
/**
 * Created by wcg.
 * User: milan011@sina.com
 * Date: 2018-10-08
 * Time: 22:04
 */

namespace App\Providers;


use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot()
  {
    //
  }

  /**
   * Register any application services.
   *
   * @return void
   */
  public function register()
  {
    // $this->app->bind('App\Repositories\Contracts\UserRepositoryInterface','App\Repositories\UserRepository');
    $this->app->bind('App\Repositories\User\UserRepositoryInterface','App\Repositories\User\UserRepository');
    
  }
}

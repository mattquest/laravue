<?php
namespace Wheelmaker\LaravueSpa;
use Illuminate\Support\ServiceProvider;
class LaravueSpaServiceProvider extends ServiceProvider {
  public function boot()
  {
    $this->loadRoutesFrom(__DIR__.'/routes/web.php');
    $this->loadViewsFrom(__DIR__.'/resources/views', 'laravue-spa');
    $this->publishes([__DIR__.'/resources/js/laravue' => resource_path('js')], 'laravue-spa');
    $this->publishes([__DIR__.'/config.php' => config_path('laravue-spa.php')], 'laravue-spa');
  }
  public function register()
  {
  }
}
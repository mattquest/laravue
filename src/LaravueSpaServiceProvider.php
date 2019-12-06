<?php
namespace Wheelmaker\LaravueSpa;
use Illuminate\Support\ServiceProvider;
class LaravueSpaServiceProvider extends ServiceProvider {
  public function boot()
  {
    $this->loadRoutesFrom(__DIR__.'/routes/web.php');
    $this->loadViewsFrom(__DIR__.'/resources/views', 'laravue-spa');
    // publish all assets - for install
    // php artisan vendor:publish --tag="laravue-spa"
    $this->publishes([__DIR__.'/resources/js/*' => resource_path('js/')], 'laravue-spa');
    $this->publishes([__DIR__.'/Http/Controllers/*' => app_path('Http/Controllers/')], 'laravue-spa');
    // publish core assets only - for update 
    // php artisan vendor:publish --tag="laravue-spa-core" --force
    $this->publishes([__DIR__.'/resources/js/laravue' => resource_path('js/')], 'laravue-spa-core');
  }
}
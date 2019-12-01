<?php
// MyVendor\contactform\src\routes\web.php
Route::get('/', function(){
  $initData = [
    'appName' => config('app.name'),
    'user' => Auth::user(),
];
  return view('laravue-spa::app', compact('initData'));
})->middleware(['web']);
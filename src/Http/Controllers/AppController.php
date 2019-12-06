<?php

namespace App\Http\Controllers;

use Auth;

class AppController extends Controller 
{ 
  public function index() {
    $initData = [
        'appName' => config('app.name'),
        'user' => Auth::user(),
    ];
    return view('laravue-spa::app', compact('initData'));
  }
}
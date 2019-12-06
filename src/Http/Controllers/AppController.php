<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
<?php

Route::get('/', '\App\Http\Controllers\AppController@index')
     ->middleware(['web']);
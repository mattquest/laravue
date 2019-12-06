<?php

Route::get('/', 'AppController@index')->middleware(['web']);
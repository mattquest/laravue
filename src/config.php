<?php

return [
    'authedDrawer' => [
        [
            'text' => 'Home',
            'icon' => 'home',
            'route' => 'dashboard',
        ]
    ],
    /**
     * for home buttons and redirects
     */
    'homeRoute' => [
        'authed' => 'dashboard',
        'guest' => 'home',
    ],
    /**
     *  menu to be passed in via the appController
     * stored in vuex and used from menu components
     */
    'menu' => [
        'authed' => [
            [
                'text' => 'Home',
                'route' => 'dashboard',
            ],
            [
                'text' => 'Stores',
                'route' => 'stores',
            ],
        ],
        'guest' => [
            [
                'text' => 'Login',
                'route' => 'login',
            ],
            [
                'text' => 'Register',
                'route' => 'register',
            ],
        ]
    ],
    /**
     * used to decide when to redirect to homeRoute
     */
    'guestRoutes' => ['home', 'login', 'register'],
];

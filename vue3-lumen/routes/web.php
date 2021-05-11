<?php

require_once __DIR__ . '/api.php';

/**
 * Web Routes
 */
$router->get('/{route:.*}/', function () {
    return view('app');
});

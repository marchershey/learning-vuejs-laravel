<?php

/**
 * API Routes
 */
$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('/aa', function () {
        return 'asdf';
    });

    // 404 Error
    $router->get('/{route:.*}/', function () {
        return response()->json([
            'error' => [
                'code' => 404,
                'message' => 'Resource not found'
            ]
        ]);
    });
});

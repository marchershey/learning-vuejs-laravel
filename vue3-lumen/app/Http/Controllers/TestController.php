<?php

namespace App\Http\Controllers;


class TestController extends Controller
{
    /**
     * Retrieve the user for the given ID.
     *
     * @param  int  $id
     * @return Response
     */
    public function view()
    {
        $test = [
            'foo' => 'bar'
        ];
        return response()->json($test);
    }
}

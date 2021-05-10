<?php

namespace App\Http\Controllers;

use App\Models\API\TMDB;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        return (new TMDB)->search($request['query']);
    }
}

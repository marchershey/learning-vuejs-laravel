<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\API\TMDB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    /**
     * Render the view
     */
    public function view(Request $request)
    {
        // if (!$request['query']) {
        //     return redirect()->back();
        // }

        return Inertia::render('Search', [
            'results' => fn () => $request['query'],
        ]);
    }

    /**
     * Search TMDB with a query
     */
    public function apiSearchTmdb(Request $request)
    {
        return (new TMDB)->search($request['query']);
    }
}

<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function view()
    {
        $trendingMovies = Http::get('https://api.themoviedb.org/3/trending/movie/day?api_key=d76c66a313d7b25ccc57e2c67770bcca');
        $trendingTv = Http::get('https://api.themoviedb.org/3/trending/tv/day?api_key=d76c66a313d7b25ccc57e2c67770bcca');
        return Inertia::render('Home', [
            'trendingMovies' => $trendingMovies->json()['results'],
            'trendingTv' => $trendingTv->json()['results']
        ]);
    }
}

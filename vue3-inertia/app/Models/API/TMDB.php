<?php

namespace App\Models\API;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;

class TMDB extends Model
{
    public $url;
    public $params = [];

    public function __construct()
    {
        if (empty(config('tmdb.api_key'))) {
            abort(500, 'TMDB API Key is missing');
        }

        $this->url = 'https://api.themoviedb.org/3';
        $this->params = [
            'api_key' => config('tmdb.api_key'),
            'language' => 'en-US',
            // 'region' => 'US',
            'watch_region' => 'US',
        ];
    }

    public function call(string $endpoint)
    {
        return Http::get($this->url . $endpoint, $this->params)->json();
    }

    /**
     * ======================================================================================
     */

    public function search(string $query = null, int $page = 1, string $type = "multi")
    {
        if ($query) {
            $this->params['page'] = $page;
            $this->params['query'] = $query;

            return $this->call('/search/' . $type)['results'];
        }

        return null;
    }
}

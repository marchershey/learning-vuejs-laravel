export const navigation = [
    {
        name: "Movies",
        open: false,
        url: "/movies",
        submenu: [
            {
                name: "Trending",
                url: "/movies",
            },
            {
                name: "Popular",
                url: "/movies/popular",
            },
            {
                name: "In Theaters",
                url: "/movies/in-theaters",
            },
            {
                name: "Upcoming",
                url: "/movies/upcoming",
            },
            {
                name: "Top Rated",
                url: "/movies/top-rated",
            },
            {
                name: "Latest",
                url: "/movies/latest",
            },
        ],
    },
    {
        name: "TV Shows",
        open: false,
        url: "/tv",
        submenu: [
            {
                name: "Trending",
                url: "/tv",
            },
            {
                name: "Popular",
                url: "/tv/popular",
            },
            {
                name: "Airing Today",
                url: "/tv/airing-today",
            },
            {
                name: "On TV",
                url: "/tv/on-the-air",
            },
            {
                name: "Top Rated",
                url: "/tv/top-rated",
            },
            {
                name: "Latest",
                url: "/tv/latest",
            },
        ],
    },

    {
        name: "People",
        open: false,
        url: "/people",
        submenu: [
            {
                name: "Trending",
                url: "/people",
            },
            {
                name: "Popular",
                url: "/people/popular",
            },
            {
                name: "Latest",
                url: "/people/latest",
            },
        ],
    },
    {
        name: "Queue",
        open: false,
        url: "/queue",
    },
    {
        name: "More",
        open: false,
        submenu: [
            {
                name: "test",
                url: "/test1"
            },
            {
                name: "test2",
                url: "/test2"
            },
        ]
    }
]
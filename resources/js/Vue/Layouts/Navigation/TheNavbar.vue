<template>
    <div>
        <nav class="bg-gray-800">
            <div class="flex items-center h-16 mx-auto max-w-7xl ios-padding-x">
                <!-- Logo & Navigation -->
                <div class="flex-shrink-0 px-4">
                    <div class="flex items-center flex-none space-x-8">
                        <!-- Logo -->
                        <router-link tag="div" to="/" class="flex items-center space-x-4 cursor-pointer">
                            <the-logo></the-logo>
                            <h1 class="hidden text-xl font-bold tracking-wider text-white uppercase sm:block">{{ app_name }}</h1>
                        </router-link>
                        <!-- Navigation -->
                        <div class="hidden w-full space-x-2 lg:flex">
                            <div v-for="item in menu" :key="item.name" class="relative px-3 py-2" @mouseenter="item.open = true" @mouseleave="item.open = false">
                                <router-link :to="item.link" active-class="text-white" class="font-medium text-gray-400 cursor-pointer hover:text-white">{{ item.name }}</router-link>
                                <div v-if="item.submenu && item.open" class="absolute left-0 w-40 px-4 py-2 mt-2 text-sm font-normal text-gray-400 origin-top-left bg-gray-800 rounded-md shadow-lg ring-1 ring-gray-700 focus:outline-none">
                                    <div v-for="subitem in item.submenu" :key="subitem.name">
                                        <router-link :to="subitem.link" exact-active-class="text-white" class="block py-1.5 hover:text-white">{{ subitem.name }}</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Search and User -->
                <div class="flex items-center justify-end w-full">
                    <!-- Search -->
                    <div class="w-full sm:max-w-xs">
                        <label for="search" class="sr-only">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <!-- Heroicon name: solid/search -->
                                <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input autocomplete="off" name="search" class="block w-full py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 bg-gray-700 border border-transparent rounded-md focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm" placeholder="Search" type="search" />
                        </div>
                    </div>
                    <!-- User -->
                    <div class="relative flex flex-shrink-0 hidden px-4 lg:block">
                        <div class="w-full">
                            <button type="button" class="flex text-sm text-white bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open user menu</span>
                                <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=L0duSLGmaA&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </button>
                        </div>
                        <div class="absolute right-0 hidden w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                            <!-- Active: "bg-gray-100", Not Active: "" -->
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                        </div>
                    </div>
                </div>
                <!-- Mobile Menu Button -->
                <div class="flex px-2 lg:hidden">
                    <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import TheLogo from "@/Components/App/TheLogo.vue";
const menu = [
    {
        name: "Discover",
        open: false,
        link: "/discover",
        submenu: [
            {
                name: "What's Trending",
                link: "/discover"
            },
            {
                name: "Discover Movies",
                link: "/discover/movies"
            },
            {
                name: "Discover TV Shows",
                link: "/discover/tv"
            }
        ]
    },
    {
        name: "Movies",
        open: false,
        link: "/movies",
        submenu: [
            {
                name: "Trending",
                link: "/movies"
            },
            {
                name: "Popular",
                link: "/movies/popular"
            },
            {
                name: "In Theaters",
                link: "/movies/in-theaters"
            },
            {
                name: "Upcoming",
                link: "/movies/upcoming"
            },
            {
                name: "Top Rated",
                link: "/movies/top-rated"
            },
            {
                name: "Latest",
                link: "/movies/latest"
            }
        ]
    },
    {
        name: "TV Shows",
        open: false,
        link: "/tv",
        submenu: [
            {
                name: "Trending",
                link: "/tv"
            },
            {
                name: "Popular",
                link: "/tv/popular"
            },
            {
                name: "Airing Today",
                link: "/tv/airing-today"
            },
            {
                name: "On TV",
                link: "/tv/on-the-air"
            },
            {
                name: "Top Rated",
                link: "/tv/top-rated"
            },
            {
                name: "Latest",
                link: "/tv/latest"
            }
        ]
    },

    {
        name: "People",
        open: false,
        link: "/people",
        submenu: [
            {
                name: "Trending",
                link: "/people"
            },
            {
                name: "Popular",
                link: "/people/popular"
            },
            {
                name: "Latest",
                link: "/people/latest"
            }
        ]
    },
    {
        name: "Queue",
        open: false,
        link: "/queue",
        submenu: [
            {
                name: "View the queue",
                link: "/queue"
            }
        ]
    }
];
export default {
    components: { TheLogo },
    data() {
        return {
            app_name: process.env.MIX_APP_NAME,
            menu
        };
    }
};
</script>

<style>
</style>
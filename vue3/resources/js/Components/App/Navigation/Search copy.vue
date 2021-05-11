<template>
    <div class="w-full sm:max-w-xs">
        <label for="search" class="sr-only">Search</label>
        <div class="sm:relative">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <!-- Heroicon name: solid/search -->
                    <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                    </svg>
                </div>
                <input v-model="searchMedia" @click="open = true" @input="this.isLoading" autocomplete="off" name="search" class="block w-full py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 bg-gray-700 border border-transparent rounded-md focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm" placeholder="Search" type="text" />
            </div>
            <div class="absolute inset-0 z-10 w-full h-auto p-2 mt-16 overflow-hidden bg-black bg-opacity-75 sm:p-0 sm:top-0 sm:bg-transparent sm:mt-12 sm:overflow-visible" id="THISONEHERE" v-if="open" v-on:click.self="open = false">
                <div class="max-h-full p-4 overflow-y-auto bg-gray-800 rounded sm:max-h-64 sm:ring-1 sm:ring-black no-scrollbar sm:h-auto">
                    <div class="text-center" v-if="!media && !loading">Search for a movie, tv show, or person...</div>
                    <div class="flex justify-center" v-if="loading">
                        <svg class="w-10 h-10 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                    <div class="flex flex-col space-y-2 whitespace-nowrap">
                        <div v-for="item in media" :key="item.media_type + '-' + item.id" class="w-full">
                            <div v-if="item.media_type == 'movie'">
                                <div class="flex items-center space-x-2">
                                    <div class="flex-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <span class="mt-1 text-xs flex-0">{{ item.release_date.substr(0, 4) ?? "" }} </span>
                                    <span class="text-white truncate">{{ item.title }}</span>
                                    <span class="mt-1 text-xs flex-0">in Movies</span>
                                </div>
                            </div>
                            <div v-else-if="item.media_type == 'tv'">
                                <div class="flex items-center space-x-2">
                                    <div class="flex-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <span class="mt-1 text-xs flex-0">{{ item.first_air_date.substr(0, 4) ?? "" }} </span>
                                    <span class="text-white truncate">{{ item.name }}</span>
                                    <span class="mt-1 text-xs flex-0">in TV Shows</span>
                                </div>
                            </div>
                            <div v-else-if="item.media_type == 'person'">
                                <div class="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                                    </svg>
                                    <h1 class="text-white truncate">{{ item.name }}</h1>
                                    <span class="mt-1 text-xs flex-0">in People</span>
                                </div>
                            </div>
                            <div v-else></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import throttle from "lodash/debounce";
import Poster from "@/Components/Media/Poster.vue";
export default {
    components: { Poster },
    data() {
        return {
            searchMedia: null,
            media: null,
            loading: false,
            open: false,
        };
    },
    watch: {
        searchMedia(after, before) {
            this.search();
        },
    },
    methods: {
        isLoading: function () {
            this.loading = true;
        },
        search: throttle(function () {
            axios
                .get("/api/search", { params: { query: this.searchMedia } })
                .then((res) => (this.media = res.data))
                .catch((error) => {
                    console.log(error);
                })
                .then(() => (this.loading = false));
        }, 350),
        getResults() {},
    },
    computed: {
        year: function (item) {
            console.log(item);
        },
    },
};
</script>

<style>
</style>
<template>
    <div class="w-full sm:max-w-xs">
        <label for="search" class="sr-only">Search</label>
        <div class="">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <!-- Heroicon name: solid/search -->
                    <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                    </svg>
                </div>
                <input v-model="searchMedia" autocomplete="off" name="search" class="block w-full py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 bg-gray-700 border border-transparent rounded-md focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm" placeholder="Search" type="text" />
            </div>
            <div class="absolute inset-0 z-10 mt-16">
                <div class="w-full h-full p-2 bg-black bg-opacity-75">
                    <div class="p-4 bg-gray-800 rounded">
                        <div class="text-center" v-if="!media && !loading">Search for a movie, tv show, or person...</div>
                        <div class="flex justify-center" v-if="loading">
                            <svg class="w-10 h-10 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        </div>
                        <div class="flex flex-col" v-if="!loading">
                            <div v-for="item in media" :key="item.media_type + '-' + item.id" class="w-full">
                                <poster :item="item" />
                            </div>
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
        };
    },
    watch: {
        searchMedia(after, before) {
            this.getResults();
        },
    },
    methods: {
        test: throttle(function (val) {
            console.log(val);
        }, 350),
        getResults() {
            this.loading = true;
            axios
                .get("/api/search", { params: { query: this.searchMedia } })
                .then((res) => (this.media = res.data))
                .catch((error) => {
                    console.log(error);
                })
                .then(() => (this.loading = false));
        },
    },
    // props: {
    //     results: Object,
    // },
    // data() {
    //     return {
    //         media: {
    //             search: this.results,
    //         },
    //     };
    // },
    // methods: {
    //     test: throttle(function (val) {
    //         console.log(val);
    //     }, 350),
    //     // test: function (val) {
    //     //     console.log(val);
    //     // },
    // },
};
</script>

<style>
</style>
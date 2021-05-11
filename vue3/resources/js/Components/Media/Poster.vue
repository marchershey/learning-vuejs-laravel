<template>
    <div class="align-top" :class="{ 'inline-block': !size }">
        <div v-bind:class="[size ? size : 'w-36 sm:w-36 md:w-44 xl:w-52']">
            <div class="relative overflow-hidden transition duration-300 bg-gray-700 bg-cover rounded shadow outline-none cursor-default transform-gpu ring-1 ring-gray-700" role="link" tabindex="0" style="padding-bottom: 150%" :class="{ 'scale-110': open }" @mouseenter="open = true" @mouseleave="open = false">
                <div class="absolute inset-0 w-full h-full overflow-hidden" v-if="item">
                    <div class="absolute inset-0 overflow-hidden transition duration-300 bg-clip-padding" :class="{ 'filter blur-lg': open }">
                        <img :alt="'Poster of ' + (item.title ?? item.name)" :src="'https://image.tmdb.org/t/p/w300_and_h450_face/' + item.poster_path" decoding="async" loading="lazy" class="absolute inset-0 w-full h-full bg-clip-padding" />
                    </div>
                    <div class="absolute left-0 right-0 flex items-center justify-between p-2">
                        <div>
                            <!-- Top left -->
                        </div>
                        <div>
                            <!-- Top right -->
                        </div>
                    </div>
                    <div v-show="open">
                        <div class="absolute inset-0 -mx-px overflow-hidden transition duration-1000 transform bg-black bg-opacity-50 rounded bg-clip-border" v-bind:class="[open ? 'opacity-100' : 'opacity-0']">
                            <a href="/">
                                <div class="absolute inset-0 w-full h-full overflow-hidden text-left cursor-pointer">
                                    <div class="flex items-end w-full h-full">
                                        <div class="px-2 space-y-1 text-white pb-11">
                                            <div class="text-xs text-gray-400">{{ year }}</div>
                                            <h1 class="text-base leading-tight whitespace-normal line-clamp-2" v-text="item.title ?? item.name"></h1>
                                            <div class="text-xs text-gray-400 whitespace-normal line-clamp-4" v-text="item.overview"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="absolute bottom-0 left-0 right-0 flex justify-between px-2 py-2">
                                    <button class="flex items-center justify-center w-full text-white transition duration-150 ease-in-out bg-indigo-600 rounded-md h-7 hover:bg-indigo-500 focus:border-indigo-700 focus:ring-indigo active:bg-indigo-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mr-1"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg><span class="text-xs">Request</span>
                                    </button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,
        size: String,
    },
    data() {
        return {
            open: false,
        };
    },
    computed: {
        year: function () {
            return this.item.release_date ? this.item.release_date.substr(0, 4) : this.item.first_air_date.substr(0, 4);
        },
    },
};
</script>

<style>
</style>
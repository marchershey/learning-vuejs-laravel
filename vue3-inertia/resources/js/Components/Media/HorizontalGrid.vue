<template>
    <div class="relative h-full px-2 py-4 -my-4 -ml-4 -mr-4 overflow-x-scroll overflow-y-hidden whitespace-nowrap scrollbar">
        <div v-for="item in media" :key="mediaType + '-' + item.id" class="inline-block px-2 align-top">
            <poster :item="item" />
        </div>

        <div class="inline-block px-2 align-top" v-if="!hideSeeMore">
            <div class="transition duration-100 cursor-pointer lg:transform w-36 sm:w-36 md:w-44 xl:w-52 hover:scale-110">
                <div class="relative overflow-hidden bg-gray-700 bg-cover rounded" style="padding-bottom: 150%">
                    <div class="absolute inset-0 flex items-center justify-center w-full h-full">
                        <div class="flex items-center space-x-2 uppercase">
                            <span class="text-lg font-semibold">See more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Poster from "@/Components/Media/Poster.vue";
export default {
    components: { Poster },
    props: {
        media: Object,
        mediaType: String,
        hideSeeMore: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style>
</style>
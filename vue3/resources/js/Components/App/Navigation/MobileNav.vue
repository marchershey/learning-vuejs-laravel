<template>
    <div>
        <button @click="open = !open" type="button" class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <div class="absolute inset-0 p-2 mt-16" v-if="open">
            <div class="py-2 text-lg text-gray-200 bg-gray-800 rounded">
                <div v-for="item in navigation" :key="item.name" class="px-4 py-2" aria-label="Sidebar">
                    <div @click="item.open = !item.open" class="flex justify-between">
                        <div v-text="item.name" class="font-semibold"></div>
                        <div v-if="item.submenu">
                            <svg xmlns="http://www.w3.org/2000/svg" :class="{ 'transform rotate-90': item.open }" class="w-6 h-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                    <div v-if="item.submenu && item.open" class="my-2 border-l-4 border-gray-700">
                        <div v-for="subitem in item.submenu" :key="subitem.name">
                            <inertia-link
                                as="div"
                                :href="subitem.url"
                                v-text="subitem.name"
                                class="px-4 py-1.5 text-base cursor-pointer"
                                @click="
                                    open = false;
                                    item.open = false;
                                "
                            ></inertia-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { navigation } from "@/navigation";

export default {
    data() {
        return {
            open: false,
            navigation,
        };
    },
};
</script>

<style>
</style>
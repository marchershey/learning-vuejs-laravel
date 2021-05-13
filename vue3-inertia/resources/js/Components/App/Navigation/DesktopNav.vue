<template>
    <div class="relative z-10 hidden w-full space-x-2 lg:flex">
        <div v-for="item in navigation" :key="item.name" class="relative px-3 py-2" @mouseenter="item.open = true" @mouseleave="item.open = false">
            <inertia-link as="div" :class="{ 'text-white': isCurrent(item.url) }" :href="item.url ?? ''" class="text-lg font-semibold text-gray-400 cursor-pointer hover:text-white">{{ item.name }}</inertia-link>
            <div v-if="item.submenu && item.open" class="absolute left-0 w-40 px-4 py-2 mt-2 text-base font-normal text-gray-400 origin-top-left bg-gray-800 rounded-md shadow-lg ring-1 ring-gray-700 focus:outline-none">
                <div v-for="subitem in item.submenu" :key="subitem.name">
                    <inertia-link as="div" :class="{ 'text-white': isCurrent(subitem.url) }" :href="subitem.url" class="block py-1.5 hover:text-white cursor-pointer">{{ subitem.name }}</inertia-link>
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
            navigation,
            pathname: window.pathname,
        };
    },
    methods: {
        isCurrent(url) {
            return this.$page.url.includes(url) ? true : false;
        },
    },
};
</script>

<style>
</style>
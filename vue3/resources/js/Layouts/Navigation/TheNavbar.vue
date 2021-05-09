<template>
    <div>
        <nav class="bg-gray-800">
            <div class="flex items-center h-16 mx-auto max-w-7xl ios-padding-x">
                <!-- Logo & Navigation -->
                <div class="flex-shrink-0 px-4">
                    <div class="flex items-center flex-none space-x-8">
                        <!-- Logo -->
                        <inertia-link as="div" href="/home" class="flex items-center space-x-4 cursor-pointer">
                            <the-logo />
                            <h1 class="hidden text-xl font-bold tracking-wider text-white uppercase sm:block">{{ app_name }}</h1>
                        </inertia-link>

                        <desktop-nav />
                    </div>
                </div>
                <!-- Search and User -->
                <div class="flex items-center justify-end w-full">
                    <search />
                    <user-panel />
                </div>
                <!-- Mobile Menu Button -->
                <div class="flex px-2 lg:hidden">
                    <mobile-nav />
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import TheLogo from "@/Components/App/TheLogo.vue";
import DesktopNav from "@/Components/App/Navigation/DesktopNav.vue";
import Search from "@/Components/App/Navigation/Search.vue";
import UserPanel from "@/Components/App/Navigation/UserPanel.vue";
import MobileNav from "@/Components/App/Navigation/MobileNav.vue";

export default {
    components: { TheLogo, DesktopNav, Search, UserPanel, MobileNav },
    data() {
        return {
            app_name: "test",
        };
    },
};
</script>

<style>
</style>
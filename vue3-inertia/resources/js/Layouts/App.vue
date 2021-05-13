<template>
    <div class="flex flex-col h-screen">
        <the-navbar></the-navbar>
        <div class="overflow-y-auto">
            <div class="w-full h-full mx-auto max-w-7xl ios-padding-x">
                <div class="py-6 sm:py-10">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TheNavbar from "@/Layouts/Navigation/TheNavbar";
export default {
    components: { TheNavbar },
};
</script>

<style>
</style>
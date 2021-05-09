<template>
    <div class="flex flex-col h-screen">
        <the-navbar></the-navbar>
        <div class="overflow-y-auto">
            <div class="w-full h-full p-4 mx-auto max-w-7xl ios-padding-x">
                <slot />
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
<template>
    <div class="flex flex-col h-screen">
        <the-navbar></the-navbar>
        <div class="w-full p-4 mx-auto max-w-7xl ios-padding-x">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import TheNavbar from "@/Layouts/Navigation/TheNavbar";
export default {
    components: { TheNavbar }
};
</script>

<style>
</style>
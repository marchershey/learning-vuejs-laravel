<template>
    <div>
        <base-panel title="what's popular">
            <template v-slot:right-side>
                <div class="flex space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </template>
            <div>I LOVE YOU ERYN!</div>
        </base-panel>
        <base-panel title="what's popular" link="/home">
            <template v-slot:right-side>
                <div class="flex space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </template>
            <div>I LOVE YOU ERYN!</div>
        </base-panel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            popular: []
        };
    },
    created() {
        this.loadWhatsPopular();
    },
    methods: {
        loadWhatsPopular() {
            axios.get("/api/tmdb/test").then(response => {
                this.popular = response.data;
            });
        }
    }
};
</script>

<style>
</style>
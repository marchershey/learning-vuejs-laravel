<template>
    <div class="p-4 space-y-4 shadow-lg bg-base-panel">
        <div class="flex justify-between">
            <div class="flex" v-if="title">
                <router-link :to="{ path: link }" tag="div" class="flex items-center space-x-2" :class="{ 'cursor-pointer': link }">
                    <h1 class="text-lg font-bold tracking-wide uppercase" v-text="title"></h1>
                    <svg class="w-5 h-5 mt-px" fill="currentColor" v-if="link" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" fill-rule="evenodd" />
                        <path clip-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" fill-rule="evenodd" />
                    </svg>
                </router-link>
            </div>
            <div class="flex items-center">
                <slot name="right-side"></slot>
            </div>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        link: {
            type: String,
            default: null
        }
    }
};
</script>

<style></style>

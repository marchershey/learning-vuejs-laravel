<template>
    <div class="px-4 my-20">
        <div class="flex flex-col items-center space-y-6 text-white">
            <div class="text-center">
                <h1 class="font-bold text-7xl">{{ code }}</h1>
                <h2 class="text-3xl font-semibold">{{ title }}</h2>
            </div>
            <h3 class="text-xs text-center text-base-muted" v-html="description"></h3>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        status: Number,
    },
    computed: {
        code() {
            return this.status;
        },
        title() {
            return {
                403: "Forbidden",
                404: "Page Not Found",
                500: "Server Error",
                503: "Maintenance",
            }[this.status];
        },
        description() {
            return {
                403: "You do not have access to view this page.", // forbidden
                404: "The page you tried to visit doesn't exist.", // not found
                500: "There was an error on the backend.<br>Try to <strong>refresh the page</strong> or check back later.", // server error
                503: "The app is undergoing maintenance for some reason. Please check back later.", // service unavailable (maintenance)
            }[this.status];
        },
    },
};
</script>
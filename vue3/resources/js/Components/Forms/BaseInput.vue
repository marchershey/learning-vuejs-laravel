<template>
    <label class="block space-y-1">
        <div class="form-label" v-if="label" v-text="label"></div>
        <input :type="type" :value="value" @input="$emit('input', $event.target.value)" class="block w-full px-4 bg-gray-700 border-none ring-on-focus" />
    </label>
</template>

<script>
export default {
    props: {
        value: null,
        label: String,
        type: {
            type: String,
            default: "text",
        },
    },
};
</script>

<style>
</style>

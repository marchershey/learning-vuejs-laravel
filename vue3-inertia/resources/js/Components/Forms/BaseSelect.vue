<template>
    <label class="block space-y-1">
        <div class="text-sm font-semibold" v-if="label" v-text="label"></div>
        <select @input="$emit('input', $event.target.value)" class="block w-full px-4 bg-gray-700 border-none ring-on-focus text-base-text">
            <option :key="option.value" :selected="option.value === value" :value="option.value" v-for="option in options" v-text="option.name"></option>
        </select>
    </label>
</template>

<script>
export default {
    props: {
        value: null,
        label: String,
        options: Array,
    },
};
</script>

<style>
</style>

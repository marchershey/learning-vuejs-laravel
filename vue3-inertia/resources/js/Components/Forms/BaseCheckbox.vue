<template>
    <label class="flex items-center justify-between ring-on-checkbox">
        <div class="flex-1" v-if="label">
            <div class="text-base form-label" v-text="label" v-if="label"></div>
            <div class="font-normal text-base-muted form-label" v-text="subtext" v-if="subtext"></div>
        </div>
        <div class="">
            <div :class="[value ? 'bg-base-primary' : 'bg-gray-700', 'relative checkbox inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200']">
                <span class="sr-only" v-text="label"></span>
                <span aria-hidden="true" :class="[value ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
            </div>
        </div>
        <input type="checkbox" class="w-0 h-0 opacity-0 filter" :checked="value" @input="$emit('input', $event.target.checked)" />
    </label>
</template>

<script>
export default {
    props: {
        value: Boolean,
        label: String,
        subtext: String,
    },
};
</script>
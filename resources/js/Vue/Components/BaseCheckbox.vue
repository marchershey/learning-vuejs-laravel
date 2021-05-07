<template>
    <div>
        <div @click="toggle()" :class="[isSelected ? 'bg-base-primary' : 'bg-gray-700', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
            <span class="sr-only">Use setting</span>
            <span aria-hidden="true" :class="[isSelected ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: Boolean,
        label: String,
    },
    data() {
        return {
            isSelected: this.value,
        };
    },
    methods: {
        toggle: function () {
            this.isSelected = !this.isSelected;
            this.$emit("input", this.isSelected);
        },
    },
};
</script>
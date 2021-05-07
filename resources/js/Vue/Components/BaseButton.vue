<template>
    <button :class="[buttonType, buttonSize, buttonDisabled, buttonLoading]" :disabled="isDisabled" class="font-medium rounded shadow filter focus:outline-none hover:bg-opacity-50 ring-on-focus" v-on="$listeners">
        <span v-if="loading">
            <svg class="animate-spin" fill="none" v-bind:class="[small ? 'h-4 w-4' : 'h-5 w-5']" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle class="text-white opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor" />
            </svg>
        </span>
        <slot v-else></slot>
    </button>
</template>

<script>
export default {
    data: function () {
        return {
            isDisabled: false,
        };
    },
    props: {
        primary: Boolean,
        success: Boolean,
        danger: Boolean,
        small: Boolean,
        disabled: Boolean,
        loading: Boolean,
    },
    computed: {
        buttonType() {
            if (this.primary) return this.buttonPrimary;
            if (this.success) return this.buttonSuccess;
            if (this.danger) return this.buttonDanger;
            return this.buttonDefault;
        },
        buttonDefault() {
            return "bg-base-muted text-white";
        },
        buttonPrimary() {
            return "bg-base-primary text-white";
        },
        buttonSuccess() {
            return "bg-base-success text-white";
        },
        buttonDanger() {
            return "bg-base-danger text-white";
        },
        buttonSize() {
            return this.small ? "px-2 py-1 text-xs" : "px-4 py-2 text-sm";
        },
        buttonDisabled() {
            if (this.disabled) {
                this.isDisabled = true;
            }
            return this.disabled ? "cursor-not-allowed bg-opacity-50 " : "";
        },
        buttonLoading() {
            if (this.loading) {
                this.isDisabled = true;
            }
            return this.loading ? "cursor-wait bg-opacity-50" : "";
        },
    },
};
</script>

<style>
</style>

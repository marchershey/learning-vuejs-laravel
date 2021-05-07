<template>
    <div class="absolute inset-0 font-sans text-gray-300 select-none">
        <div class="max-w-xl p-4 mx-auto space-y-10">
            <section class="space-y-5">
                <h1 class="text-5xl font-semibold">Panels</h1>
                <base-panel>
                    <span>Default Panel</span>
                </base-panel>

                <base-panel title="Title">
                    <span>Panel with Title</span>
                </base-panel>

                <base-panel link="/test" title="Title">
                    <span>Panel with Title that is clickable</span>
                </base-panel>
            </section>

            <section class="space-y-5">
                <h1 class="text-5xl font-semibold">Buttons</h1>
                <base-panel>
                    <table class="w-full text-center">
                        <tr>
                            <td>asdf</td>
                            <td>Primary</td>
                            <td>Success</td>
                            <td>Danger</td>
                        </tr>
                        <tr>
                            <td class="py-5">
                                <base-button>Default</base-button>
                            </td>
                            <td class="py-5">
                                <base-button primary>Primary</base-button>
                            </td>
                            <td class="py-5">
                                <base-button success>Success</base-button>
                            </td>
                            <td class="py-5">
                                <base-button danger>Danger</base-button>
                            </td>
                        </tr>
                        <tr>
                            <td class="py-5">
                                <base-button disabled>Default</base-button>
                            </td>
                            <td class="py-5">
                                <base-button disabled primary>Primary</base-button>
                            </td>
                            <td class="py-5">
                                <base-button disabled success>Success</base-button>
                            </td>
                            <td class="py-5">
                                <base-button danger disabled>Danger</base-button>
                            </td>
                        </tr>
                        <tr>
                            <td class="py-5">
                                <base-button small>Default</base-button>
                            </td>
                            <td class="py-5">
                                <base-button primary small>Primary</base-button>
                            </td>
                            <td class="py-5">
                                <base-button small success>Success</base-button>
                            </td>
                            <td class="py-5">
                                <base-button danger small>Danger</base-button>
                            </td>
                        </tr>
                        <tr>
                            <td class="py-5">
                                <base-button loading>Default</base-button>
                            </td>
                            <td class="py-5">
                                <base-button loading primary>Default</base-button>
                            </td>
                            <td class="py-5">
                                <base-button loading success>Success</base-button>
                            </td>
                            <td class="py-5">
                                <base-button danger loading>Danger</base-button>
                            </td>
                        </tr>
                        <tr>
                            <td class="py-5">
                                <base-button loading small>Default</base-button>
                            </td>
                            <td class="py-5">
                                <base-button loading primary small>Default</base-button>
                            </td>
                            <td class="py-5">
                                <base-button loading small success>Success</base-button>
                            </td>
                            <td class="py-5">
                                <base-button danger loading small>Danger</base-button>
                            </td>
                        </tr>
                    </table>
                </base-panel>
            </section>

            <section class="space-y-5">
                <h1 class="text-5xl font-semibold">Form Elements</h1>
                <base-panel>
                    <div class="space-y-5">
                        <base-input label="Name" v-model="name"></base-input>
                        <base-input label="Date of birth" type="date" v-model="dateOfBirth"></base-input>
                        <base-select :options="availablePlans" label="Select a plan" v-model="plan"></base-select>
                        <base-checkbox label="Subscript to newsletter" v-model="subscribeToNewsletter"></base-checkbox>
                        <div>
                            <div>
                                <span>Name:</span>
                                <span v-text="name"></span>
                            </div>
                            <div>
                                <span>Date of Birth:</span>
                                <span v-text="dateOfBirth"></span>
                            </div>
                            <div>
                                <span>Plan:</span>
                                <span v-text="plan"></span>
                            </div>
                            <div>
                                <span>Subscribed:</span>
                                <span v-text="subscribeToNewsletter ? 'yes' : 'no'"></span>
                            </div>
                        </div>
                    </div>
                </base-panel>
            </section>
        </div>
    </div>
</template>

<script>
import BasePanel from "@/Components/BasePanel";
import BaseButton from "@/Components/BaseButton";
import BaseInput from "@/Components/BaseInput";
import BaseSelect from "@/Components/BaseSelect";
import BaseCheckbox from "@/Components/BaseCheckbox";
export default {
    components: { BasePanel, BaseButton, BaseInput, BaseSelect, BaseCheckbox },
    data() {
        return {
            name: "foobar",
            dateOfBirth: "",
            plan: "free",
            availablePlans: [
                { value: "free", name: "Free" },
                { value: "starter", name: "Starter" },
                { value: "premium", name: "Premium" },
                { value: "business", name: "Business" },
            ],
            subscribeToNewsletter: true,
        };
    },
};
</script>

<style></style>

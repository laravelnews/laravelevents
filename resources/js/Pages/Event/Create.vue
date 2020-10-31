<template>
    <Nav />
    <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div class="relative max-w-xl mx-auto">
            <div class="text-center">
                <h2
                    class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
                >
                    Add Your Laravel Event.
                </h2>

                <div
                    class="bg-yellow-200 border-l-4 border-yellow-400 p-4 mt-4"
                >
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg
                                class="h-5 w-5 text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm leading-5 text-yellow-800">
                                Note: All submissions must be manually approved
                                before they appear on the site.
                                <strong
                                    >This can take a few days, please have
                                    patience.</strong
                                >
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-12">
                <form
                    @submit.prevent="submit"
                    class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                    <div class="sm:col-span-2">
                        <FormInput
                            :value="event.title"
                            name="title"
                            type="text"
                            label="* Title"
                            placeholder="Event Title"
                            @update:modelValue="updateEvent"
                        />
                    </div>

                    <div class="sm:col-span-2">
                        <FormTextArea
                            :value="event.description"
                            label="* Description"
                            name="description"
                            @update:modelValue="updateEvent"
                        />
                    </div>

                    <div class="sm:col-span-2">
                        <CalendarInput
                            :value="event.starts_at"
                            label="Event Date"
                            name="starts_at"
                            @update:modelValue="updateEvent"
                        />
                    </div>

                    <div class="sm:col-span-2">
                        <FormInput
                            :value="event.price"
                            name="price"
                            type="text"
                            label="* Ticket Price"
                            placeholder="Free, $19.99, etc."
                            @update:modelValue="updateEvent"
                        />
                    </div>
                    <div class="sm:col-span-2">
                        <FormInput
                            :value="event.location"
                            name="location"
                            type="text"
                            label="* Location"
                            placeholder="Online or Paris, France"
                            @update:modelValue="updateEvent"
                        />
                    </div>

                    <div class="sm:col-span-2">
                        <FormInput
                            :value="event.url"
                            name="url"
                            type="text"
                            label="* URL"
                            placeholder="https://"
                            @update:modelValue="updateEvent"
                        />
                    </div>

                    <div class="sm:col-span-2">
                        <LoaderButton :busy="busy" actionText="Submit event" />
                        <span class="w-full inline-flex rounded-md shadow-sm">
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, onMounted, ref } from "vue";
import { Inertia } from "@inertiajs/inertia";
import spacetime from "spacetime";
import Nav from "@Components/Nav";

import FormInput from "@Components/FormInput";
import FormTextArea from "@Components/FormTextarea";
import CalendarInput from "@Components/CalendarInput";
import LoaderButton from "@Components/LoaderButton";

export default {
    props: ["event"],
    components: {
        Nav,
        FormInput,
        FormTextArea,
        CalendarInput,
        LoaderButton,
    },
    setup(props) {
        const busy = ref(false);

        let event = reactive({
            ...props.event.data,
        });

        const updateEvent = ({ key, value }) => {
            event[key] = value;
        };

        const submit = () => {
            Inertia.post(route("submit"), event, {
                preserveState: true,
                preserveScroll: true,
                onStart: () => (busy.value = true),
                onFinish: () => (busy.value = false),
            });
        };

        return {
            event,
            busy,
            submit,
            updateEvent,
        };
    },
};
</script>

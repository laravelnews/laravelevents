<template>
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <div class="w-full flex items-center justify-center text-primary">
            <svg
                class="inline-block w-20 rounded-sm"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 183 174"
                style="enable-background: new 0 0 183 174"
                xml:space="preserve"
                fill="currentColor"
            >
                <g>
                    <path
                        class="st0"
                        d="M183-4H0c0,0,0,0,0,0v173.2c0,2.6,2.1,4.8,4.8,4.8h173.5c2.6,0,4.7-2.1,4.7-4.7L183-4C183-4,183-4,183-4z M87.9,129.1C87.9,129.2,87.9,129.2,87.9,129.1c0,1-0.8,1.8-1.8,1.8H48.2h0c0,0,0,0,0,0c-2.5,0-4.5-2-4.5-4.5V44.9c0,0,0-0.1,0-0.1 c0-1,0.8-1.7,1.8-1.7h6.8c0,0,0.1,0,0.1,0c1,0,1.7,0.8,1.7,1.8v76.3h32c0,0,0.1,0,0.1,0c1,0,1.7,0.8,1.7,1.8V129.1z M141,128.3  c0,0,0,0.1,0,0.1c0,1.4-1.2,2.6-2.7,2.5h-7.6c-0.7,0-1.3-0.1-1.9-0.4c-0.6-0.3-1.1-0.8-1.4-1.3L87.5,59.5v48.8c0,0,0,0.1,0,0.1 c0,1-0.8,1.7-1.8,1.7h-6.3c0,0-0.1,0-0.1,0c-1,0-1.7-0.8-1.7-1.8V45.7c0,0,0-0.1,0-0.1c0-1.4,1.2-2.6,2.7-2.5h7.5 c0.7,0,1.3,0.1,1.9,0.4c0.6,0.3,1.1,0.8,1.4,1.3l40,69.7V44.9c0,0,0-0.1,0-0.1c0-1,0.8-1.7,1.8-1.7h6.3c0,0,0.1,0,0.1,0 c1,0,1.7,0.8,1.7,1.8V128.3z"
                    ></path>
                </g>
            </svg>
        </div>
        <h2
            class="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900"
        >
            Sign in to your account
        </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            <form @submit.prevent="submit">
                <div>
                    <label
                        for="email"
                        class="block text-sm font-medium leading-5 text-gray-700"
                    >
                        Email address
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input
                            v-model="form.email"
                            id="email"
                            type="email"
                            class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                            :class="{ 'border-red-400': hasError('email') }"
                        />
                    </div>

                    <span
                        v-if="hasError('email')"
                        class="pt-3 text-sm font-semibold text-red-400"
                    >
                        {{ forError("email") }}
                    </span>
                </div>

                <div class="mt-6">
                    <label
                        for="password"
                        class="block text-sm font-medium leading-5 text-gray-700"
                    >
                        Password
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input
                            v-model="form.password"
                            id="password"
                            type="current-password"
                            class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                            :class="{ 'border-red-400': hasError('password') }"
                        />
                    </div>

                    <span
                        v-if="hasError('password')"
                        class="pt-3 text-sm font-semibold text-red-400"
                    >
                        {{ forError("password") }}
                    </span>
                </div>

                <div class="flex items-center justify-between mt-6">
                    <div class="flex items-center">
                        <input
                            v-model="form.remember"
                            id="remember_me"
                            type="checkbox"
                            class="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
                        />
                        <label
                            for="remember_me"
                            class="block ml-2 text-sm leading-5 text-gray-900"
                        >
                            Remember me
                        </label>
                    </div>

                    <div class="text-sm leading-5">
                        <inertia-link
                            :href="route('password.request')"
                            class="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"
                        >
                            Forgot your password?
                        </inertia-link>
                    </div>
                </div>

                <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
                        <LoaderButton :busy="busy" actionText="Sign in" />
                    </span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { useErrors } from "@/Hooks/UseErrors";

import Layout from "@/Layouts/LoginLayout";
import LoaderButton from "@Components/LoaderButton";
export default {
    layout: Layout,
    components: {
        LoaderButton,
    },
    setup() {
        let busy = ref(false);
        const form = reactive({ name: null, email: null, remember: false });

        const { forError, hasError } = useErrors();

        const submit = () => {
            Inertia.post(route("login"), form, {
                onStart: () => (busy.value = true),
                onFinish: () => (busy.value = false),
            });
        };

        return {
            busy,
            form,
            submit,
            forError,
            hasError,
            route,
        };
    },
};
</script>

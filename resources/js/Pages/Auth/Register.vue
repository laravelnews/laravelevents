<template>
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img
            class="w-auto h-12 mx-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
            alt="Workflow"
        />
        <h2
            class="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900"
        >
            Create your account
        </h2>
        <p class="mt-2 text-sm leading-5 text-center text-gray-600 max-w">
            Or
            <inertia-link
                :href="route('login')"
                class="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"
            >
                sign in to your account
            </inertia-link>
        </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            <form @submit.prevent="submit">
                <div>
                    <label
                        for="name"
                        class="block text-sm font-medium leading-5 text-gray-700"
                    >
                        Name
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input
                            v-model="form.name"
                            id="name"
                            type="text"
                            class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                            :class="{ 'border-red-400': hasError('name') }"
                        />
                    </div>

                    <span
                        v-if="hasError('name')"
                        class="pt-3 text-sm font-semibold text-red-400"
                    >
                        {{ forError("name") }}
                    </span>
                </div>

                <div class="mt-6">
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
                            type="password"
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

                <div class="mt-6">
                    <label
                        for="password_confirmation"
                        class="block text-sm font-medium leading-5 text-gray-700"
                    >
                        Confirm Password
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input
                            v-model="form.password_confirmation"
                            id="password_confirmation"
                            type="password"
                            class="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                            :class="{
                                'border-red-400': hasError(
                                    'password_confirmation'
                                ),
                            }"
                        />
                    </div>
                    <span
                        v-if="hasError('password_confirmation')"
                        class="pt-3 text-sm font-semibold text-red-400"
                    >
                        {{ forError("password_confirmation") }}
                    </span>
                </div>

                <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
                        <button
                            type="submit"
                            class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                        >
                            Create Account
                        </button>
                    </span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Layout from "@/Layouts/LoginLayout";
import { reactive } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { useErrors } from "@/Hooks/UseErrors";
export default {
    layout: Layout,

    setup() {
        const form = reactive({ name: null, email: null, remember: false });

        const { forError, hasError } = useErrors();

        const submit = () => {
            Inertia.post(route("register"), form, {
                preserveScroll: true,
                preserveState: true,
            });
        };

        return {
            form,
            submit,
            forError,
            hasError,
            route,
        };
    },
};
</script>

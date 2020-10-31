<template>
    <div
        class="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0"
    >
        <Logo />

        <div
            class="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg"
        >
            <form @submit.prevent="submit">
                <div class="flex items-center justify-between mt-4">
                    <button
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    >
                        Resend Verification Email
                    </button>

                    <button
                        @click.prevent="logout"
                        class="text-sm text-gray-600 underline hover:text-gray-900"
                    >
                        Logout
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Layout from "@/Layouts/LoginLayout";
import Logo from "@/Components/Logo";
import { Inertia } from "@inertiajs/inertia";
import { reactive } from "vue";
export default {
    layout: Layout,
    components: {
        Logo,
    },

    setup() {
        const form = reactive({ processing: false });

        const submit = () => {
            form.processing = true;
            Inertia.post(route("verification.send")).then(() => {
                form.processing = false;
            });
        };

        const logout = () => {
            Inertia.post(route("logout")).then((response) => {
                window.location = "/";
            });
        };

        return {
            form,
            submit,
            logout,
            route,
        };
    },
};
</script>

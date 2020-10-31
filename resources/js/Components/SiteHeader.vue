<template>
    <div>
        <nav
            class="relative flex items-center justify-between max-w-screen-xl px-4 mx-auto sm:px-6"
        >
            <div class="flex items-center flex-1">
                <div class="flex items-center justify-between w-full md:w-auto">
                    <a href="/" aria-label="Home">
                        <img
                            class="w-auto h-8 sm:h-10"
                            src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                            alt="Logo"
                        />
                    </a>
                    <div class="flex items-center -mr-2 md:hidden">
                        <button
                            @click="showMenu = !showMenu"
                            type="button"
                            class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                            id="main-menu"
                            aria-label="Main menu"
                            aria-haspopup="true"
                        >
                            <svg
                                class="w-6 h-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div v-if="!user" class="hidden text-right md:block">
                <span
                    v-if="!route().current('login')"
                    class="inline-flex rounded-md shadow-md"
                >
                    <span class="inline-flex rounded-md shadow-xs">
                        <inertia-link
                            :href="route('login')"
                            class="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-purple-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:bg-gray-50 focus:outline-none focus:border-purple-300 focus:shadow-outline-purple"
                        >
                            Log in
                        </inertia-link>
                    </span>
                </span>
            </div>

            <div v-else class="hidden sm:ml-6 sm:flex sm:items-center">
                <notifications-dropdown
                    :count="user.unread_notifications_count"
                ></notifications-dropdown>
                <profile-dropdown :user="user"></profile-dropdown>
            </div>
        </nav>

        <transition
            enter-active-class="duration-150 ease-out"
            enter-class="scale-95 opacity-0"
            enter-to-class="scale-100 opacity-100"
            leave-active-class="duration-100 ease-in"
            leave-class="scale-100 opacity-100"
            leave-to-class="scale-95 opacity-0"
        >
            <div
                v-show="showMenu"
                class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
            >
                <div class="rounded-lg shadow-md">
                    <div
                        class="overflow-hidden bg-white rounded-lg shadow-xs"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="main-menu"
                    >
                        <div
                            class="flex items-center justify-between px-5 pt-4"
                        >
                            <div>
                                <img
                                    class="w-auto h-8"
                                    src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                                    alt=""
                                />
                            </div>
                            <div class="-mr-2">
                                <button
                                    @click="showMenu = !showMenu"
                                    type="button"
                                    class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                                    aria-label="Close menu"
                                >
                                    <svg
                                        class="w-6 h-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="px-2 pt-2 pb-3">
                            <a
                                href="#"
                                class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                                role="menuitem"
                                >Product</a
                            >
                            <a
                                href="#"
                                class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                                role="menuitem"
                                >Features</a
                            >
                            <a
                                href="#"
                                class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                                role="menuitem"
                                >Marketplace</a
                            >
                            <a
                                href="#"
                                class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                                role="menuitem"
                                >Company</a
                            >
                        </div>
                        <div>
                            <inertia-link
                                :href="route('login')"
                                class="block w-full px-5 py-3 font-medium text-center text-purple-600 transition duration-150 ease-in-out bg-gray-50 hover:bg-gray-100 hover:text-purple-700 focus:outline-none focus:bg-gray-100 focus:text-purple-700"
                                role="menuitem"
                            >
                                Log in
                            </inertia-link>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { useUser } from "@/Hooks/UseUser";
import ProfileDropdown from "@Components/ProfileDropdown";
import NotificationsDropdown from "@Components/NotificationsDropdown";
import { ref } from "vue";

export default {
    components: { NotificationsDropdown, ProfileDropdown },

    setup() {
        let { auth: user } = useUser();

        let showMenu = ref(false);

        return {
            user,
            route,
            showMenu,
        };
    },
};
</script>

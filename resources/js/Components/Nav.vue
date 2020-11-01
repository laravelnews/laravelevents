<template>
    <nav class="border-b border-red-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-24">
                <div class="flex">
                    <div class="flex-shrink-0 flex items-center text-primary">
                        <inertia-link :href="route('home')"
                            ><Logo
                        /></inertia-link>
                    </div>
                </div>
                <div class="flex items-center" v-if="show">
                    <div class="flex-shrink-0">
                        <inertia-link
                            :href="route('submit')"
                            class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary shadow-sm hover:bg-primary-500 focus:outline-none focus:border-black active:bg-black transition ease-in-out duration-150"
                        >
                            <!-- Heroicon name: plus -->

                            <svg
                                class="-ml-1 mr-2 h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                            </svg>

                            <span>Submit an Event</span>
                        </inertia-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import Logo from "@Components/Logo";

export default {
    props: ["event", "show"],
    components: {
        Logo,
    },
    methods: {
        route: route,
    },
};
</script>

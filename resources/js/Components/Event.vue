<template>
    <li>
        <inertia-link
            :href="route('event', { event: event.uuid })"
            class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out border-b border-gray-50"
        >
            <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                    <div
                        class="text-sm leading-5 font-medium text-indigo-600 truncate"
                    >
                        {{ event.title }}
                    </div>
                    <div
                        class="mt-2 flex items-center text-sm leading-5 text-gray-700 sm:mt-0"
                    >
                        <!-- Heroicon name: calendar -->
                        <svg
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span>
                            <time :datetime="event.starts_at">{{
                                event.starts_at_formatted
                            }}</time>
                        </span>
                    </div>
                </div>
                <div class="mt-2 sm:flex sm:justify-between">
                    <div class="sm:flex">
                        <div
                            class="mt-2 flex items-center text-sm leading-5 text-gray-700 sm:mt-0"
                        >
                            <!-- Heroicon name: location-marker -->
                            <svg
                                class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            {{ event.location }}
                        </div>
                    </div>
                    <div class="ml-2 flex-shrink-0 flex">
                        <svg
                            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                            ></path>
                        </svg>
                        <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-gray-800"
                        >
                            {{ event.price }}
                        </span>
                    </div>
                </div>
            </div>
        </inertia-link>
    </li>
</template>
<script>
export default {
    props: ["event"],
    methods: {
        route: route,
    },
};
</script>

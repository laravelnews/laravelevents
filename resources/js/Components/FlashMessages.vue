<template>
    <div
        v-if="
            $page.props.flash.success ||
            (Object.keys($page.props.errors).length > 0 && show)
        "
        class="fixed inset-0 flex items-end justify-center px-4 py-6 mt-12 pointer-events-none sm:p-6 sm:items-start sm:justify-end"
    >
        <transition
            enter-class="transition duration-300 ease-out transform"
            enter-active-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
            leave-class="transition duration-100 ease-in opacity-0"
            leave-to-class="opacity-0"
        >
            <div
                class="w-full max-w-sm bg-white rounded-lg shadow-lg pointer-events-auto"
            >
                <div class="overflow-hidden rounded-lg shadow-xs">
                    <div class="p-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                <!-- Heroicon name: check-circle -->
                                <svg
                                    v-if="$page.props.flash.success"
                                    class="w-6 h-6 text-green-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <svg
                                    v-else
                                    class="w-6 h-6 text-red-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div
                                class="ml-3 w-0 flex-1 pt-0.5"
                                v-if="$page.props.flash.success"
                            >
                                <p
                                    class="text-sm font-medium leading-5 text-gray-900"
                                >
                                    Success!
                                </p>
                                <p class="mt-1 text-sm leading-5 text-gray-500">
                                    {{ $page.props.flash.success }}
                                </p>
                            </div>
                            <div
                                class="ml-3 w-0 flex-1 pt-0.5"
                                v-if="
                                    $page.props.flash.error ||
                                    Object.keys($page.props.errors).length > 0
                                "
                            >
                                <p
                                    class="text-sm font-medium leading-5 text-gray-900"
                                >
                                    Oops!
                                </p>
                                <p
                                    v-if="
                                        Object.keys($page.props.errors)
                                            .length === 1
                                    "
                                    class="mt-1 text-sm leading-5 text-gray-500"
                                >
                                    There is one form error
                                </p>
                                <p
                                    v-else
                                    class="mt-1 text-sm leading-5 text-gray-500"
                                >
                                    There are
                                    {{ Object.keys($page.errors).length }} form
                                    errors.
                                </p>
                            </div>
                            <div class="flex flex-shrink-0 ml-4">
                                <button
                                    class="inline-flex text-gray-400 transition duration-150 ease-in-out focus:outline-none focus:text-gray-500"
                                    @click="hide"
                                >
                                    <!-- Heroicon name: x -->
                                    <svg
                                        class="w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
        };
    },
    methods: {
        hide() {
            this.$page.props.flash.success = null;
            this.$page.props.flash.errors = null;
            this.show = false;
        },
    },
    watch: {
        "$page.props.flash": {
            handler() {
                this.show = true;
            },
            deep: true,
        },
    },
};
</script>

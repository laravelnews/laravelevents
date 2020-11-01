<template>
    <button
        :disabled="busy"
        type="submit"
        :class="{ 'bg-black-50 cursor-not-allowed': busy }"
        class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary hover:bg-black focus:outline-none transition ease-in-out duration-150"
    >
        <svg
            v-if="busy"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            class="w-5 h-5 mr-2 transition-all ease-in-out"
        >
            <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width="2">
                    <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                    <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 18 18"
                            to="360 18 18"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                    </path>
                </g>
            </g>
        </svg>
        {{ actionText }}
    </button>
</template>

<script>
export default {
    props: ["busy", "actionText"],
};
</script>

<template>
    <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
        <span class="inline-flex rounded-md shadow-sm">
            <button
                @click.prevent="actionClicked"
                type="submit"
                class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700"
            >
                {{ action ?? "Save" }}
            </button>
        </span>
    </div>
</template>

<script>
export default {
    emits: ["actionClick"],
    props: {
        action: null,
    },

    setup(props, { emit }) {
        const actionClicked = () => {
            emit("actionClick");
        };

        return { actionClicked };
    },
};
</script>

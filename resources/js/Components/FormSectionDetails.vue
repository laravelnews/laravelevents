<template>
    <h3 class="text-lg font-medium leading-6 text-gray-900">
        <slot name="heading"></slot>
    </h3>
    <p class="mt-1 text-sm leading-5 text-gray-600">
        <slot name="description"> </slot>
    </p>
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

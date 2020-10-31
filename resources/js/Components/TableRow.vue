<template>
    <tr :class="{ 'bg-gray-50': odd, 'bg-white': !odd }">
        <slot />
    </tr>
</template>

<script>
export default {
    props: ["index"],
    setup(props) {
        const odd = props.index % 2 === 0;
        return {
            odd,
        };
    },
};
</script>

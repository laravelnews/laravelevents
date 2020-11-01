<template>
    <div class="w-full max-w-4xl mx-auto bg-white">
        <Nav />
        <div class="mt-10">
            <slot />
        </div>
    </div>
</template>

<script>
import Nav from "@Components/Nav";

export default {
    components: {
        Nav,
    },
};
</script>

<template>
    <Nav :show="true" />
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
            <p class="text-sm leading-5 font-medium text-indigo-600">
                <a href="#" class="hover:underline">
                    {{ event.data.location }}
                </a>
            </p>
            <div class="block">
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    {{ event.data.title }}
                </h3>
                <p class="mt-3 prose" v-html="event.data.description"></p>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from "@Components/Nav";
export default {
    props: ["event"],
    components: {
        Nav,
    },
};
</script>

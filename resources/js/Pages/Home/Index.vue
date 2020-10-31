<template>
    <Nav :show="true" />
    <div v-if="events.data.length" class="overflow-hidden sm:rounded-md">
        <ul>
            <Event
                v-for="event in events.data"
                :key="event.uuid"
                :event="event"
            />
        </ul>
    </div>

    <div v-else class="bg-white sm:rounded-sm">
        <div class="px-4 py-5 sm:p-6">
            <h3
                class="text-lg leading-6 font-medium text-gray-900"
                id="renew-headline"
            >
                There are currently no upcoming events.
            </h3>
            <div class="mt-2 sm:flex sm:items-start sm:justify-between">
                <div class="max-w-xl text-sm leading-5 text-gray-500">
                    <p id="renew-description">
                        Check back again later for upcoming events.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from "@Components/Nav";
import Event from "@Components/Event";
export default {
    props: ["events"],

    components: {
        Nav,
        Event,
    },

    setup() {
        return { route };
    },
};
</script>

<template>
    <li class="py-1 space-y-2">

        <inertia-link
            v-if="notification.data.url"
            :href="notification.data.url"
            class="flex flex-row justify-start items-start w-full px-4 py-2 space-x-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 transition duration-100"
            :class="{'text-yellow-700 hover:yellow-gray-800 focus:text-yellow-800 bg-yellow-50 hover:bg-yellow-100 focus:bg-yellow-100': notification.data.type && notification.data.type === 'alert'}"
            role="menuitem"
        >
            <svg
                v-if="notification.data.type && notification.data.type === 'success'"
                class="h-5 w-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>

            <svg
                v-if="notification.data.type && notification.data.type === 'alert'"
                class="h-6 w-6 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>

            <span>
                <span>{{ notification.data.message }}</span>
                <span class="block text-xs opacity-50">{{ notification.created_at | moment('calendar') }}</span>
            </span>
        </inertia-link>

        <span
            v-else
            class="block px-4 py-2 text-sm leading-5 text-gray-700"
        >
            {{ notification.data.message }}
            <span class="block text-xs opacity-50">{{ notification.created_at | moment('calendar') }}</span>
        </span>

    </li>
</template>

<script>
    export default {
        name: "NotificationDropdownItem",

        props: {
            notification: Object,
        },
    }
</script>

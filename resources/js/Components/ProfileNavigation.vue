<template>
    <div class="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div class="py-1">
            <inertia-link :href="route('profile.edit')" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Profile</inertia-link>
        </div>
        <div class="border-t border-gray-100"></div>
        <div class="py-1">
            <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Get desktop app</a>
            <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Support</a>
        </div>
        <div class="border-t border-gray-100"></div>
        <div class="py-1">
            <inertia-link :href="route('logout')" method="post" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Logout</inertia-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileNavigation"
    }
</script>

<template></template>

<script>
import ProfileNavigation from "./ProfileNavigation";

export default {
    name: "ProfileDropdown",

    components: {
        ProfileNavigation,
    },

    props: {
        user: Object,
    },

    data() {
        return {
            showDropdown: false,
        };
    },

    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },

        hideDropdown() {
            this.showDropdown = false;
        },
    },

    directives: {
        ClickOutside,
    },
};
</script>

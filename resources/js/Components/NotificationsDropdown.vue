<template></template>

<script>
import axios from "axios";
import ClickOutside from "vue-click-outside";
import NotificationDropdownItem from "./NotificationDropdownItem";

export default {
    name: "NotificationsDropdown",
    components: { NotificationDropdownItem },
    props: {
        count: {
            type: Number,
            default: 0,
        },
    },

    data() {
        return {
            showDropdown: false,

            loaded: false,
            notifications: [],
        };
    },

    computed: {
        iconStyles() {
            if (this.count > 1) {
                return "text-pink-400 hover:bg-pink-100 hover:text-pink-500 focus:text-pink-500";
            }

            return "text-cool-gray-400 hover:bg-cool-gray-100 hover:text-cool-gray-500 focus:text-cool-gray-500";
        },
    },

    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },

        hideDropdown() {
            this.showDropdown = false;
        },

        load() {
            this.loaded = false;

            axios
                .get(route("notifications.index"))
                .then((response) => {
                    this.loaded = true;
                    this.notifications = response.data;
                })
                .then(() => {
                    axios
                        .put(route("notifications.update").url(), {
                            notifications: this.notifications.map((n) => {
                                return n.id;
                            }),
                        })
                        .then(() => {
                            this.$inertia.reload({
                                only: ["auth"],
                            });
                        });
                });
        },
    },

    directives: {
        ClickOutside,
    },
};
</script>

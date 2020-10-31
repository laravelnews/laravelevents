import { usePage } from "@inertiajs/inertia-vue3";
import { computed } from "vue";
export function useUser() {
    const { props } = usePage();

    let auth = computed(() => props.auth);

    return {
        auth,
    };
}

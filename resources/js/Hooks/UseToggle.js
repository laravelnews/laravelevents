import { ref } from "vue";

export function useToggle() {
    const isVisible = ref(false);

    function toggleVisible() {
        isVisible.value = !isVisible.value;
    }

    return {
        isVisible,
        toggleVisible,
    };
}

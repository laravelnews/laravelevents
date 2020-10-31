import { computed } from "vue";
export function emitChange(props, emit) {
    return computed({
        get: () => props.value,
        set: (value) => {
            emit("update:modelValue", {
                value,
                key: props.name,
            });
        },
    });
}

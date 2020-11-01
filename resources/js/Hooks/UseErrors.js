import { usePage } from "@inertiajs/inertia-vue3";

export function useErrors() {
    const { props } = usePage();

    const hasErrors = () => {
        return Object.keys(props.value.errors).length;
    };

    const hasError = (key) => {
        return props.value.errors.hasOwnProperty(key);
    };

    const forError = (key) => {
        if (
            !hasErrors() ||
            !props.value.errors[key] ||
            props.value.errors[key].length == 0
        ) {
            return;
        }

        return props.value.errors[key];
    };

    return {
        forError,
        hasError,
        hasErrors,
    };
}

<template>
    <label
        :for="name"
        class="block text-sm font-medium leading-5 text-gray-700"
    >
        {{ label }}
    </label>
    <div class="mt-1 rounded-md shadow-sm">
        <input
            v-model="inputValue"
            :id="name"
            :type="type"
            :placeholder="placeholder"
            class="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
            :class="{ 'border-primary': hasError(name) }"
        />
    </div>

    <span class="pt-3 text-sm font-semibold text-primary" v-if="hasError(name)">
        {{ forError(name) }}
    </span>
</template>

<script>
import { computed } from "vue";
import { useErrors } from "@/Hooks/UseErrors";
import { emitChange } from "@/Hooks/EmitChange";

export default {
    emits: ["update:modelValue"],
    props: ["name", "value", "type", "label", "placeholder"],

    setup(props, { emit }) {
        const { forError, hasError, hasErrors } = useErrors();

        return {
            inputValue: emitChange(props, emit),
            forError,
            hasErrors,
            hasError,
        };
    },
};
</script>

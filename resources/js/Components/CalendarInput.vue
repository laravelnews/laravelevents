<template>
    <label
        :for="name"
        class="block text-sm font-medium leading-5 text-gray-700"
    >
        {{ label }}
    </label>

    <div class="mt-1 rounded-md shadow-sm relative">
        <input
            v-model="inputValue"
            ref="input"
            id="company"
            class="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
        />
        <div
            class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
        >
            <svg
                class="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
            </svg>
        </div>
    </div>

    <span class="pt-3 text-sm font-semibold text-primary" v-if="hasError(name)">
        {{ forError(name) }}
    </span>
</template>

<script>
import { computed, ref, onMounted } from "vue";
import flatpickr from "flatpickr";
import { useErrors } from "@/Hooks/UseErrors";
import { emitChange } from "@/Hooks/EmitChange";

export default {
    emits: ["update:modelValue"],
    props: ["name", "value", "type", "label", "placeholder"],

    setup(props, { emit }) {
        const input = ref(null);
        const { forError, hasError, hasErrors } = useErrors();

        onMounted(() => {
            flatpickr(input.value, {
                dateFormat: "Y-m-d",
                minDate: "today",

                enableTime: false,
                onChange: onChange,
                onValueUpdate: onChange,
                showMonths: 2,
            });
        });

        const onChange = () => {
            console.log(input.value.value);
        };

        return {
            inputValue: emitChange(props, emit, props.name),
            forError,
            hasErrors,
            hasError,
            input,
        };
    },
};
</script>

<template>
    <div
        class="pb-5 space-y-3 border-b border-gray-200 sm:flex sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0"
    >
        <h3 class="text-lg font-medium leading-6 text-gray-900">
            <slot name="heading" />
        </h3>
        <div>
            <span class="rounded-md shadow-sm">
                <slot name="actions" />
            </span>
        </div>
    </div>
</template>

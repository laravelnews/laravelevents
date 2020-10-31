<template>
    <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
                <slot name="sidebar" />
            </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-6 sm:col-span-4">
                            <slot name="form" />
                        </div>
                    </div>
                </div>
                <slot name="form-action" />
            </div>
        </div>
    </div>

    <div class="hidden sm:block" v-if="divider">
        <div class="py-5">
            <div class="border-t border-gray-200"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        divider: false,
    },
};
</script>

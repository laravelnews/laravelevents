import { createApp, h } from "vue";
import { app, plugin } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";

import Layout from "@/Layouts/BasicLayout";

const el = document.getElementById("app");

createApp({
    render: () =>
        h(app, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) =>
                import(`@Pages/${name}`).then((module) => {
                    !module.default.layout
                        ? (module.default.layout = Layout)
                        : null;

                    module.default.route = route;

                    return module.default;
                }),
            route: route,
        }),
})
    .use(plugin)
    .mount(el);

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 250,

    // The color of the progress bar.
    color: "#f4645f",

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: false,
});

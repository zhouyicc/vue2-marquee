import marquee from "./marquee"

const components = {
    marquee
};

const install = function (Vue) {
    Object.values(components).forEach(item => {
        Vue.component(item.name, item)
    })
};

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    components
}

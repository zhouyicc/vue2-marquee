import marquee from "./marquee"

const components = {
    marquee
};

const installObj = {
    install(Vue) {
        Object.values(components).forEach(item => {
            Vue.component(item.name, item)
        })
    }
};

if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(installObj);
}

export default {
    install: installObj.install,
    components
}

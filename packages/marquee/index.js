import marquee from "./src";

marquee.install = function (Vue) {
    Vue.component(marquee.name, marquee)
};

export default marquee

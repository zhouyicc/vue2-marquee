<template>
    <div id="app">
        <div>横向滚动</div>
        <marquee-components
                mode="horizontal">
            <div v-for="item in listArray" :key="item" class="margin-right-30 padding-10">
                <span>{{Math.random()}}</span>
            </div>
        </marquee-components>
        <br/>
        <div>纵向滚动</div>
        <marquee-components
                mode="vertical">
            <div v-for="item in listArray" :key="item" class="padding-10">
                <span>{{Math.random()}}</span>
            </div>
        </marquee-components>

        <v2-marquee>
            <div v-for="item in listArray" :key="item" class="padding-10">
                <span>{{Math.random()}}</span>
            </div>
        </v2-marquee>
    </div>
</template>

<script>
    import marqueeComponents from "../packages/marquee/src/index"

    export default {
        name: 'App',
        components: {
            marqueeComponents
        },
        data() {
            return {
                listArray: new Array(5),
                showMarquee: false
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .padding-10 {
        padding: 10px 0;
    }

    .margin-right-30 {
        margin-right: 30vw;
    }
</style>

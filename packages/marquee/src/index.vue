<template>
    <div class="marquee-content" ref="outerMarqueeContainer">
        <div :class="'marquee-content-' + mode"
             ref="innerMarqueeContainer">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    const modeType = {
        horizontal: "horizontal",
        vertical: "vertical"
    };
    export default {
        name: "v2Marquee",
        props: {
            tempo: {
                type: Number,
                default: 10
            },
            mode: {
                type: String,
                default: modeType.horizontal,//vertical 横向和纵向
                validator(value) {
                    return value ? Object.values(modeType).includes(value) : !value
                }
            }
        },
        data() {
            return {
                timer: null
            }
        },
        computed: {
            speedRate() {
                return this.$props.tempo * 3
            }
        },
        mounted() {
            this.init();
        },
        beforeDestroy() {
            if (this.timer) {
                clearInterval(this.timer)
            }
        },
        methods: {
            init() {
                if (this.$props.mode === modeType.vertical) {
                    this.initVertical()
                } else if (this.$props.mode === modeType.horizontal) {
                    this.initHorizontal()
                }
            },
            initVertical() {
                const outerContainer = this.$refs["outerMarqueeContainer"];
                const innerContainer = this.$refs["innerMarqueeContainer"];

                //重定义外层盒子的高度 = 内层第一个盒子的高度
                outerContainer.style.height = `${innerContainer.firstChild.clientHeight}px`;
                //外层div块的可见高度
                const verticalOuterHeight = outerContainer.offsetHeight;
                //内层div块的可见高度 总高度
                const verticalContainerHeight = innerContainer.offsetHeight;
                this.startInterval(verticalOuterHeight, verticalContainerHeight);
            },
            startInterval(verticalOuterHeight, verticalContainerHeight) {
                this.timer = setInterval(this._verticalScroll, this.speedRate, verticalOuterHeight, verticalContainerHeight);
            },
            _verticalScroll(verticalOuterHeight, verticalContainerHeight) {
                const outerContainer = this.$refs["outerMarqueeContainer"];

                outerContainer.scrollTop++;
                if (outerContainer.scrollTop % verticalOuterHeight === 0) {
                    const innerContainer = this.$refs["innerMarqueeContainer"];

                    //第一个盒子 添加到最后  vue中使用了diff优化算法 节点相同直接移动 不用执行remove操作
                    innerContainer.appendChild(innerContainer.firstChild);

                    //清空定时器 等待1s后重试
                    clearInterval(this.timer);
                    setTimeout(this.startInterval, 1000, verticalOuterHeight, verticalContainerHeight);
                    return false
                }
            },
            initHorizontal() {
                const innerContainer = this.$refs["innerMarqueeContainer"];
                //总体的时间就为
                const allTime = this.$props.tempo * innerContainer.childNodes.length;
                //添加animation
                innerContainer.style.animation = `marquee-horizontal ${allTime}s linear infinite`
                //最后一个nodelist的margin和padding的right置为0
                innerContainer.childNodes[innerContainer.childNodes.length - 1].style.marginRight = "0px";
                innerContainer.childNodes[innerContainer.childNodes.length - 1].style.paddingRight = "0px";
                // this.$props.tempo
            }
        }
    }
</script>

<style lang="less">
    @keyframes marquee-horizontal {
        from {
            transform: translate(0, 0);
        }
        to {
            transform: translate(-100%, 0);
        }
    }
</style>

<style scoped lang="less">
    .marquee-content {
        position: relative;
        overflow: hidden;
        background: #eee;

        &:after {
            content: '';
            display: block;
            height: 0;
            font-size: 0;
            clear: both;
            overflow: hidden;
        }

        .marquee-content-horizontal {
            float: left;
            display: flex;
            flex-wrap: nowrap;
            animation: marquee-horizontal 12s linear infinite;
        }
    }
</style>

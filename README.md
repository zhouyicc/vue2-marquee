# vue2-marquee
vue2-marquee基于vue2的横向、纵向跑马灯动画效果

## install

添加依赖安装

`"vue2-marquee": "git+https://github.com/zhouyicc/vue2-marquee.git"`

执行npm install


全局安装以及引入css

```
import vue2Marquee from "vue2-marquee"

import "vue2-marquee/dist/vue2Marquee.css"

Vue.use(vue2Marquee);
```

## 使用

```
<v2-marquee
    :tempo="10" 
    mode="horizontal">
    <div v-for="(item,index) in nodes" :key="index" class="margin-right-30 padding-10">
        {{item + index}}
    </div>
</v2-marquee>
```

属性

tempo：移动速率，默认值：10

mode：横向滚动、纵向滚动，默认值：horizontal，可选值：horizontal/vertical

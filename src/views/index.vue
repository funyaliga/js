<template>
    <div class="m-js">
        <div class="row" v-for="(v, i) in list" :key="i">
            <h3><a :href="v.url" target="_blank">{{v.name}}</a></h3>
            <iframe :src="v.url" ></iframe>
        </div>
    </div>
</template>
<script>
console.log(process.env)
export default {
    name: "index",
    data () {
        return {
            env: process && process.env && process.env.NODE_ENV,
            list: [
                { name: '_array - 数组相关方法', url: '#/array' },
                { name: '_obj - 对象相关方法', url: '#/obj' },
                { name: '_html', url: '#/html' },
                { name: '_str - 字符相关', url: '#/str' },
                { name: '_url - url相关', url: '#/url' },
                { name: 'curry - 柯里化', url: '#/curry' },
                { name: 'format - 格式化', url: '#/format' },
                { name: 'color - 颜色', url: '#/color' },
                { name: 'check', url: '#/check' },
                { name: 'is', url: '#/is' },
                { name: '宽高相关学习', url: 'https://funyaliga.github.io/wh/dist/' },
                { name: 'flex学习', url: 'https://funyaliga.github.io/flex-playground/dist/' },
                // { name: 'typewrite打字', url: 'https://funyaliga.github.io/typewrite/' },
                { name: 'redraw重绘', url: 'https://funyaliga.github.io/redrawEl/examples/' },
                { name: 'gradientColor渐变', url: 'https://funyaliga.github.io/gradientColor/examples/' },
            ]
        };
    },
    created() {
        console.log(this)
    }
}
</script>
<style lang="css">
#app {
    overflow: hidden;
}

.m-js .row {
    position: relative;
    float: left;
    width: 25%;
    height: 33.33vh;
    border: 1px solid #3B3B3B;
}

@media screen and (max-width: 1280px) {
    .m-js .row {
        width: 33%;
    }
}

@media screen and (max-width: 960px) {
    .m-js .row {
        width: 50%;
    }
}

@media screen and (max-width: 640px) {
    .m-js .row {
        width: 100%;
    }
}

.m-js .row:hover h3 {
    background: #333;
}

.m-js h3 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #3B3B3B;
    text-align: center;
    line-height: 26px;
    font-size: 13px;
    font-weight: normal;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
}

.m-js a {
    color: #fff;
    text-decoration: none;
}

.m-js iframe {
    width: 100%;
    height: 100%;
    padding-top: 25px;
}

</style>
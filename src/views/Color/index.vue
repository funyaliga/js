<template>
<div>
    <div class="floor base64Box">
        <h3>color.toBase64(color, 3)</h3>
        <p>//入参： (颜色， 宽度)</p>
        <input type="color" v-model="color1">
        <div class="base64Val" :style="{color: color1, borderImage: `url(data:image/gif;${base64}) 33% stretch`}">
            {{ base64 }}
        </div>
    </div>
    <div class="floor">
        <h3>color.random() 随机颜色</h3>
        <div class="random" :style="{background: color2}">
            <button @click="randomUpdate">random</button>
        </div>
    </div>
    <div class="floor">
        <h3>color.friendly() 随机温和颜色</h3>
        <div class="random" :style="{background: color3}">
            <button @click="friendlyUpdate">friendly</button>
        </div>
    </div>
</div>
</template>
<script>
import * as colorFn from './color';
export default {
    name: "Color",
    data () {
        return {
            color1: '#00A8FF',
            color2: '',
            color3: '',
        };
    },
    created() {
        this.randomUpdate()
        this.friendlyUpdate()
    },
    methods: {
        ...colorFn,
        randomUpdate() {
            this.color2 = this.random()
        },
        friendlyUpdate() {
            this.color3 = this.friendly()
        },
    },
    computed: {
        base64() {
            return this.toBase64(this.color1, 3)
        }
    }
}
</script>
<style lang="css" scoped>
.base64Box input{
    margin-top: 10px;
}
.base64Val{
    max-width: 600px;
    margin: 10px 0;
    border: 4px solid transparent;
    border-image-width: 10px;
    padding: 10px;
    word-break: break-all;
}
.random{
    width: 300px;
    height: 120px;
}
</style>
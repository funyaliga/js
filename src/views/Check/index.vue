<template>
<div class="object">
    <div class="floor">
        <h3>supportWebp 检测是否支持Webp</h3>
        你的浏览器<b>{{ supportWebp() ? '支持' : '不支持' }}</b>Webp
    </div>
</div>

</template>
<script>
import * as check from './check'

export default {
    name: "Check",
    data () {
        return {
            
        }
    },
    methods: {
        ...check
    },
    created() {
    }
}
</script>
<style>
</style>
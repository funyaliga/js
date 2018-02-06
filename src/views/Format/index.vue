<template>
    <table class="table">
        <tr>
            <td>银行</td>
            <td>format.bank</td>
            <td>62220237373728282828</td>
            <td>{{bank('62220237373728282828')}}</td>
        </tr>
        <tr>
            <td>金钱</td>
            <td>format.money</td>
            <td>1000000.11</td>
            <td>{{money('1000000.11')}}</td>
        </tr>
        <tr>
            <td>手机号</td>
            <td>format.phoneHide</td>
            <td>15920393939</td>
            <td>{{phoneHide('15920393939')}}</td>
        </tr>
        <tr>
            <td>字节</td>
            <td>format.bytes</td>
            <td>1073741824</td>
            <td>{{bytes(1073741824)}}</td>
        </tr>
    </table>
</template>
<script>
import * as format from './format';
export default {
    name: "Format",
    data () {
        return {
        };
    },
    methods: {
        ...format,
    }
}
</script>
<style lang="css" scoped>
body{
    width: 100%;
}
td{
    padding: 6px;
    border: 1px solid #eee;
}

.table{
    display: inline-block;
    max-width: 100%;
    overflow-x: auto;
    white-space: nowrap;
}

.table{
    /*开启这个有IOS的回弹效果*/
    /*-webkit-overflow-scrolling: touch;*/ 
    background: radial-gradient(ellipse at left, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 0 center, radial-gradient(ellipse at right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 100% center;
    background-size: 10px 100%, 10px 100%;
    background-attachment: scroll, scroll;
    background-repeat: no-repeat;
}
.table td:first-child{
    background-image: linear-gradient(to right, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
    background-repeat: no-repeat;
    background-size: 20px 100%;
}
.table td:last-child{
    background-image: linear-gradient(to left, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: 20px 100%;
}
</style>
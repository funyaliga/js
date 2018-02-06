<template>
<div class="object">
    <div class="floor">
        <h3>removeAll 去除hash，search等</h3>
        <div class="c">
           <div class="w">_url.removeAll('https://www.baidu.com/s?ie=utf-8&f=8&wd=javascript教程#id')</div>
           <div class="r">// => {{ removeAll('https://www.baidu.com/s?ie=utf-8&f=8&wd=javascript教程#id') }}</div>
        </div>
    </div>

    <div class="floor">
        <h3>urlEncode</h3>
        <div class="c">
           <div class="w">_url.urlEncode('https://www.baidu.com')</div>
           <div class="r">// => {{ urlEncode('https://www.baidu.com') }}</div>
        </div>
    </div>
</div>

</template>
<script>
import * as _url from './_url';
export default {
    name: "Url",
    data () {
        return {
        }
    },
    methods: {
        ..._url,
    }
}
</script>
<style>
</style>
<template>
<div class="array">
    <div class="floor">
        <h3>Encode 实体字符编码</h3>
        <div class="c">
           <div class="w">_html.entitiesEncode('《眷猫记》')</div>
           <div class="r">// {{ entitiesEncode('《眷猫记》') }}</div>
        </div>
    </div>
    <div class="floor">
        <h3>Decode 实体字符解码</h3>
        <div class="c">
           <div class="w"><pre><code>_html.entitiesDecode('&amp;#12298;&amp;#30519;&amp;#29483;&amp;#35760;&amp;#12299;')</code></pre></div>
           <div class="r">// {{ entitiesDecode('&amp;#12298;&amp;#30519;&amp;#29483;&amp;#35760;&amp;#12299;') }}</div>
        </div>
    </div>
</div>

</template>
<script>
import * as _html from './_html';
export default {
    name: "Html",
    data () {
        return {
        }
    },
    methods: {
        ..._html,
    }
}
</script>
<style>
</style>
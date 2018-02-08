<template>
<div class="object">
    <div class="floor">
        <h3>repeat重复一个字符</h3>
        <div class="c">
           <div class="w">_str.repeat('a', 10)</div>
           <div class="r">{{ repeat('a', 10) }}</div>
        </div>
    </div>
    
    <div class="floor">
        <h3>eq是否相等</h3>
        <div class="c">
           <div class="w">_str.eq(NaN, NaN)</div>
           <div class="r">{{ eq(NaN, NaN) }}</div>
        </div>
    </div>

    <div class="floor">
        <h3>reverse反转一个字符</h3>
        <div class="c">
           <div class="w">_str.reverse('hello world')</div>
           <div class="r">{{ reverse('hello world') }}</div>
        </div>
    </div>

    <div class="floor">
        <h3>camelize</h3>
        <div class="c">
           <div class="w">_str.camelize('font-size')</div>
           <div class="r">{{ camelize('font-size') }}</div>
        </div>
    </div>

    <div class="floor">
        <h3>decamelize</h3>
        <div class="c">
           <div class="w">_str.decamelize('fontSize', '-')</div>
           <div class="r">{{ decamelize('fontSize', '-') }}</div>
        </div>
    </div>

    <div class="floor">
        <h3>escapeStringRegexp 正则的特殊字符转义</h3>
        <div class="c">
           <div class="w">_str.escapeStringRegexp('how much $ for a unicorn?')</div>
           <div class="r">{{ escapeStringRegexp('how much $ for a unicorn?') }}</div>
        </div>
    </div>
</div>

</template>
<script>
import * as _str from './_str'
export default {
    name: "Str",
    data () {
        return {
        }
    },
    methods: {
        ..._str,
    }
}
</script>
<style>
</style>
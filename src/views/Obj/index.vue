<template>
<div class="object">
    <div class="floor">
        <h3>is是否obejct</h3>
        <div class="c">
           <div class="w">_object.is({a: 1, b: 2})</div>
           <div class="r">{{is({a: 1, b: 2})}}</div>
 
           <div class="w">_object.is('哈哈')</div>
           <div class="r">{{is('哈哈')}}</div>
        </div>
    </div>

    <div class="floor">
        <h3>get 安全地获取对象的值</h3>
        <div class="c">
           <div class="w">var obj = {{dGet}}</div>
           <div class="w">_object.get(obj, 'a.b.c', '10')</div>

           <div class="w">_object.get(obj, ['a', 'b', 'c'], '10')</div>

           <div class="w">_object.get(obj, ['x', 'y', 'z'], '10')</div>
        </div>
    </div>

    <div class="floor">
        <h3>set 设置对象的值</h3>
        <div class="c">
           <div class="w">var obj = {{dGet}}</div>
           <div class="w">_object.set(obj, 'a.b.c', '10')</div>
           <div class="r">// {{set(dGet, 'a.b.c', '10')}}</div>

           <div class="w">_object.set(obj, ['a', 'b', 'c'], '10')</div>
           <div class="r">// {{set(dGet, ['a', 'b', 'c'], '10')}}</div>
        </div>
    </div>
</div>

</template>
<script>
import * as _object from './_object';
export default {
    name: "obj",
    data () {
        return {
            dGet: {"a": {"b": {"c": "3"}}},
            dSet: {},
        }
    },
    methods: {
        ..._object,
    },
    created() {
        console.log(this)
    }
}
</script>
<style>
</style>
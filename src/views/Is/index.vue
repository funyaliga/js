<template>
<div class="object">
    <div class="floor isViewport">
        <h3>viewport 判断元素整个都在可视范围内</h3>
        <div class="div">.div</div>
        <div class="c">
            <button @click="isViewport">
                <div>.div在全在可视范围内吗？</div>
                <div>is.viewport(document.querySelector('.div'))</div>
            </button>
        </div>
    </div>

    <div class="floor">
        <h3>emptyObject 是否空数组</h3>
        <div class="c">
           <div class="w">is.emptyObject({})</div>
           <div class="r">// => {{ emptyObject({}) }}</div>

           <div class="w">is.emptyObject({a: 1})</div>
           <div class="r">// => {{ emptyObject({a: 1}) }}</div>
        </div>
    </div>

    <div class="floor">
        <h3>equal 是否相同</h3>
        <div class="c">
           <div class="w">is.equal(0, 0)</div>
           <div class="r">// => {{ equal(0, 0) }}</div>

           <div class="w">is.equal(+0, -0)</div>
           <div class="r">// => {{ equal(+0, -0) }}</div>

           <div class="w">is.equal(NaN, NaN)</div>
           <div class="r">// => {{ equal(NaN, NaN) }}</div>
        </div>
    </div>

    <div class="floor">
        <h3>json 是否json格式</h3>
        <div class="c">
           <div class="w">is.json('{"年级":"一年级","班级":"4班","姓名":"王某"}')</div>
           <div class="r">// => {{ json('{"年级":"一年级","班级":"4班","姓名":"王某"}') }}</div>

           <div class="w">is.json('foo')</div>
           <div class="r">// => {{ json('foo') }}</div>

           <div class="w">is.json(123)</div>
           <div class="r">// => {{ json(123) }}</div>

           <div class="w">is.json(true)</div>
           <div class="r">// => {{ json(true) }}</div>

        </div>
    </div>
</div>

</template>
<script>
import * as is from './is'
export default {
    name: "Is",
    data () {
        return {
        }
    },
    methods: {
        ...is,
        isViewport() {
            alert(`${this.viewport(document.querySelector('.div')) ? '在' : '不在'}范围内`)
        },
    }
}
</script>
<style lang="postcss">
.isViewport{
    & .div{
        width: 140px;
        height: 140px;
        margin-bottom: 20px;
        line-height: 140px;
        background: #f27421;
        color: #fff;
        text-align: center;
    }
    & button{
        background: #fff;
        padding: 10px;
        border: 1px solid #666;
    }
}
</style>
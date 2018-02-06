<template>
<div class="array">
    <div class="floor">
        <h3>克隆clone</h3>
        <div class="c">
           <div class="w">_array.clone([1, 2, 3])</div>
           <div class="r">// {{clone([1, 2, 3])}}</div>
        </div>
    </div>

    <div class="floor">
        <h3>去重norepeat</h3>
        <div class="c">
           <div class="w">_array.norepeat([1, 1, 2, 2, 3])</div>
           <div class="r">// {{norepeat([1, 1, 2, 2, 3])}}</div>
        </div>
    </div>

    <div class="floor">
        <h3>数列series</h3>
        <div class="c">
           <div class="w">_array.series(5)</div>
           <div class="r">// {{series(5)}}</div>
           <div class="w">_array.series(5, 2)</div>
           <div class="r">// {{series(5, 2)}}</div>
        </div>
    </div>
    
    <div class="floor">
        <h3>排序sortOn</h3>
        <div class="c">
           <div class="w">_array.sortOn([{x: 'b'}, {x: 'a'}, {x: 'c'}], 'x')</div>
           <div class="r">// {{sortOn([{x: 'b'}, {x: 'a'}, {x: 'c'}], 'x')}}</div>
        </div>
        <div class="c">
           <div class="w">_array.sortOn([{x: 'b'}, {x: 'a'}, {x: 'c'}], '-x')</div>
           <div class="r">// {{sortOn([{x: 'b'}, {x: 'a'}, {x: 'c'}], '-x')}}</div>
        </div>
        <div class="c">
           <div class="w">_array.sortOn([{x: {y: 'b'}}, {x: {y: 'a'}}], 'x.y')</div>
           <div class="r">// {{ sortOn([{x: {y: 'b'} }, {x: {y: 'a'} }], 'x.y') }}</div>
        </div>
        <div class="c">
           <div class="w">_array.sortOn([{x: 'b', y: 'c'}, {x: 'a', y: 'a'}, {x: 'a', y: 'b'}], ['x', 'y'])</div>
           <div class="r">// {{ sortOn([{x: 'b', y: 'c'}, {x: 'a', y: 'a'}, {x: 'a', y: 'b'}], ['x', 'y']) }}</div>
        </div>
        <div class="c">
           <div class="w">_array.sortOn([{x: 'b'}, {x: 'a'}, {x: 'c'}], el => el.x)</div>
           <div class="r">// {{ sortOn([{x: 'b'}, {x: 'a'}, {x: 'c'}], el => el.x) }}</div>
        </div>
    </div>
</div>

</template>
<script>
import * as _array from './_array';
export default {
    name: "array",
    data () {
        return {
        }
    },
    methods: {
        ..._array,
    }
}
</script>
<style>
</style>
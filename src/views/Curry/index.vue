<template>
    <div class="type">
        <pre><code>
const add = curry((a, b, c) => a + b + c)
add(1, 2, 3) // {{ add(1, 2, 3) }}
add(1)(2)(3) // {{ add(1)(2)(3) }}
add(1, _, 3)(2) // {{ add(1, placeholder, 3)(2) }}
add(_, 2 , _)(1)(3) // {{ add(placeholder, 2 , placeholder)(1)(3)}}
        </code></pre>
    </div>
</template>
<script>
import { _, curry } from './curry.js';
export default {
    name: "curry",
    data () {
        return {
            placeholder: _,
            add: curry((a, b, c) => a + b + c)
        };
    },
    created() {
    }
}
</script>
<style lang="css">
</style>
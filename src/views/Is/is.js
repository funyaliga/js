// 判断元素是否在可视范围内
export function viewport (el){
    try { if(el instanceof jQuery)  el = el.get(0) } catch(e) {}
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}


// 判断object/json 是否为空
// http://blog.csdn.net/testcs_dn/article/details/40431835
export function emptyObject (e){
    var t;
    for (t in e)
        return !1;
    return !0
}

// https://juejin.im/post/58e6416061ff4b006b3bdbc7
export function equal (x, y) {
    if (x === y) {
        // +0, -0 情况的处理
        return x !== 0 || 1 / x === 1 / y;
    } else {
        // NaN
        return x !== x && y !== y;
    }
}
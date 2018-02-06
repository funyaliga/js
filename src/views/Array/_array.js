import { get } from '../Obj/_object';

// 克隆数组
// https://jsperf.com/array-content-copy/2
export function clone(array){
    return [].concat(array)
}

// 去掉重复
// http://www.cnblogs.com/rubylouvre/archive/2009/12/08/1619702.html
// https://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
export function norepeat (array){
    function uniq(a) {
        var seen = {};
        var out = [];
        var len = a.length;
        var j = 0;
        for(var i = 0; i < len; i++) {
            var item = a[i];
            if(seen[item] !== 1) {
                seen[item] = 1;
                out[j++] = item;
            }
        }
        return out;
    }
    return uniq(array)
}

// 用Javascript计算数组差集算法
// https://gist.github.com/simplelife7/6415097
export function different(array1, array2){
    var o = {};//转成hash可以减少运算量，数据量越大，优势越明显。
    for(let i = 0, len = array2.length; i < len; i++) {
    	o[array2[i]] = true;
    }

    let result = [];
    for(i = 0, len = array1.length; i < len; i++) {
    	var v = array1[i];
    	if(o[v]) continue;
    	result.push(v);
    }
    return result;
}

// 数列
// http://www.jstips.co/zh_cn/javascript/create-range-0...n-easily-using-one-line/
// https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
export function series (num, start = 0) {
    // es6
    return Array.from(new Array(num),(val,index) => index + start);
    // return Array.from(Array(num).keys()) 

    // es5
    // return Array.apply(null, {length: num}).map(Function.call, Number);
    // retrun Array.apply(null, {length: N}).map(function(value, index){
    //     return index + 1;
    // });
}

// https://github.com/sindresorhus/arrify/blob/master/index.js
export function arrify (val) {
	if (val === null || val === undefined) {
		return [];
	}

	return Array.isArray(val) ? val : [val];
}

// https://github.com/sindresorhus/sort-on/blob/master/index.js
export function sortOn(arr, prop) {
    if (!Array.isArray(arr)) {
        return arr
    }
    
    return arr.slice().sort((a, b) => {
        let ret = 0

        arrify(prop).some(el => {
            let x
			let y
            let desc
            
            switch (typeof el) {
                case 'function':
                    x = el(a)
                    y = el(b)
                    break
                case 'string':
                    desc = el.charAt(0) === '-'
                    el = desc ? el.slice(1) : el
                    x = get(a, el)
                    y = get(b, el)
                    break
                default:
                    x = a
                    y = b
                    break
            }

            if (x === y) {
                ret = 0
				return false
            }

            if (y !== 0 && !y) {
				ret = desc ? 1 : -1
				return true
			}

			if (x !== 0 && !x) {
				ret = desc ? -1 : 1
				return true
			}

			if (typeof x === 'string' && typeof y === 'string') {
				ret = desc ? y.localeCompare(x) : x.localeCompare(y)
				return ret !== 0
			}

			if (desc) {
				ret = x < y ? 1 : -1
			} else {
				ret = x < y ? -1 : 1
			}

			return true
        })

        return ret
    })
}
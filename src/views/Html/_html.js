// https://segmentfault.com/q/1010000007651434
// http://ourcodeworld.com/articles/read/188/encode-and-decode-html-entities-using-pure-javascript
// 实体字符 Encode
export function entitiesEncode(str) {
    const buf = [];
    for (let i = str.length - 1; i >= 0; i--) {
        buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
    }
    return buf.join('');
}

// 实体字符 decode
export function entitiesDecode(str) {
    return str.replace(/&#(\d+);/g, function (match, dec) {
        return String.fromCharCode(dec)
    })
}
// 多次重复一个字符
// https://ask.helplib.com/109980
export function repeat(str, n = 1){
    return Array(n + 1).join(str)

    // es6
    // return str.repeat(n)
}

// 反转一个字符串
export function reverse(str){
    return [...str].reverse().join('')
}

// 是否相等
export function eq (value, other) {
    // NaN 是不与任何值相等的，包括自身
    return value === other || (value !== value && other !== other)
}

// https://ourcodeworld.com/articles/read/608/how-to-camelize-and-decamelize-strings-in-javascript
export function camelize(str, separator) {
    if(!str || typeof str !== 'string') {
        return ''
    }
    return str.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();        
    });
}
export function decamelize(str, separator) {
    if(!str || typeof str !== 'string') {
        return ''
    }

    separator = typeof separator === 'undefined' ? '_' : separator;

	return str
        .replace(/([a-z\d])([A-Z])/g, `$1${separator}$2`)
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, `$1${separator}$2`)
        .toLowerCase();
}

// https://github.com/sindresorhus/escape-string-regexp
export function escapeStringRegexp (str) {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
	}
    const matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    return str.replace(matchOperatorsRe, '\\$&');
}
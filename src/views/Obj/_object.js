export function is (x) {
    var type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
}

// https://github.com/developit/dlv/blob/master/index.js
export function get(object, path, defaultValue) {
    path = path.split ? path.split('.') : path;
    return path.reduce((xs, x) => (xs && xs[x] !== undefined ? xs[x] : defaultValue), object)
}

export function get2(object, path, defaultValue) {
    // https://github.com/lodash/lodash/blob/4.17.4/lodash.js#L13114
    var INFINITY = 1 / 0
    function toKey(value) {
        if (typeof value == 'string') {
            return value;
        }
        var result = (value + '');
        return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }
    function baseGet(object, path) {
        path = Array.isArray(path) ? path : path.split('.')
        var index = 0,
            length = path.length;
        while (object != null && index < length) {
            object = object[toKey(path[index++])];
        }
        return (index && index == length) ? object : undefined;
    }
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
}

export function set(object, path, value) {
    if (!is(object)) {
        return object;
    }
    path = Array.isArray(path) ? path : path.split('.')

    const objNew = {}

    let objPath = objNew;

    for (let i = 0; i < path.length; i++) {
        const p = path[i];
        if (!is(objPath[p])) {
            objPath[p] = {};
        }

        if (i === path.length - 1) {
            objPath[p] = value;
        }

        objPath = objPath[p];
    }
    return Object.assign({}, object, objNew);
}
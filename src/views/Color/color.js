export function toBase64 (color, width = 1) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = width;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, width);
    return canvas.toDataURL()
}

// https://www.paulirish.com/2009/random-hex-color-code-snippets/
// http://weibo.com/1263362863/D2u9GsAiP?type=comment
// 随机16进度颜色 #
export function random() {
    return '#' + Math.floor(0x1000000 + Math.random() * 0x1000000).toString(16).slice(1);
}

// https://gist.github.com/liuyanghejerry/1c6950abd42c542fcc8a#file-firendly_hsl_color-js
// 温和友好的hsl颜色
export function friendly () {
    return `hsl(${(Math.floor(3600*Math.random()/10) + 1)}, ${(Math.floor((60)*Math.random()) + 1)}%, ${(Math.floor((25)*Math.random()) + 30)}%)`
}

// rgb to hex
export function rgbToHex (...arg) {
    let rgba = []
	if (Array.isArray(arg[0])) {
        rgba = arg[0].map(Number)
    } else if (typeof arg[0] === 'string') {
        rgba = arg[0].match(/(0?\.?\d{1,3})%?\b/g).map(Number)
    } else {
        rgba = arg.map(Number)
    }

    const [r, g, b, a] = rgba

    return `#${
        ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')
    }${
        a ? (Math.round(255 * a) | 1 << 8).toString(16).slice(1) : ''
    }`
}

// https://github.com/sindresorhus/hex-rgb/blob/master/index.js
export function hexToRgb(hex, options = {}) {
    const hexChars = 'a-f\\d';
    const match3or4Hex = `#?[${hexChars}]{3}[${hexChars}]?`;
    const match6or8Hex = `#?[${hexChars}]{6}([${hexChars}]{2})?`;

    const nonHexChars = new RegExp(`[^#${hexChars}]`, 'gi');
    const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, 'i');

    if (typeof hex !== 'string' || nonHexChars.test(hex) || !validHexSize.test(hex)) {
        throw new TypeError('Expected a valid hex string');
    }

    hex = hex.replace(/^#/, '');
    let alpha = 255;

    if (hex.length === 8) {
        alpha = parseInt(hex.slice(6, 8), 16) / 255;
        hex = hex.substring(0, 6);
    }

    if (hex.length === 4) {
        alpha = parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
        hex = hex.substring(0, 3);
    }

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    const num = parseInt(hex, 16);
    const red = num >> 16;
    const green = (num >> 8) & 255;
    const blue = num & 255;

    return options.format === 'array' ?
        [red, green, blue, alpha] :
        {red, green, blue, alpha};
}
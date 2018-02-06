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
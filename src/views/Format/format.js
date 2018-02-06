// 银行账号格式化
export function bank (val){
    return val.replace(/(\d{4})(?=\d)/g, "$1 ");
}
// 金钱
export function money (val){
    return Number(val).toLocaleString()
    // return Number(val).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function phoneHide (val) {
	return val.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}

// https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
export function bytes (bytes, decimals = 2) {
    if(bytes == 0) return '0 Bytes';
    var k = 1024,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
}
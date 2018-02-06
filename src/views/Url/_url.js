export function removeAll(url = window.location.href) {
    return url.substring(0, url.indexOf('?'))
}

export function urlEncode(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`)
}
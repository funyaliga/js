function curryFunction ({ placeholder }){
    // 合并
    const merge = (dest, origin) => {
        const newArgs = dest.map(i => 
            i === placeholder && origin[0] ? origin.shift() : i
        )
        return [...newArgs, ...origin]
    }

    // 实际长度(忽略placeholder)
    const actualLength = arr =>
        arr.reduce((len, curr) => curr === placeholder ? len : len + 1, 0)

    return (fn) => {
        return (...initialArgs) => {
            const len = fn.length
            const _curry = (...args) => {
                return (...newArgs) => {
                    const concatedArgs = merge(args, newArgs)
                    return ((actualLength(concatedArgs) >= len) ?
                        fn(...concatedArgs.slice(0, len)) :
                        _curry(...concatedArgs)
                    )
                }
            }
            return _curry(...initialArgs)()
        }
    }
}

export const _ = { placeholder: '@/curry' }

// https://github.com/mqyqingfeng/Blog/issues/42
export const curry = curryFunction({placeholder: _})
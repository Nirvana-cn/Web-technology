// 简单柯里化
function currying(fn, ...rest1) {
    return function(...rest2) {
        return fn.apply(null, rest1.concat(rest2))
    }
}

// 高阶柯里化
function curryingHelper(fn, len) {
    const length = len || fn.length  // 第一遍运行length是函数fn一共需要的参数个数，以后是剩余所需要的参数个数
    return function(...rest) {
        return rest.length >= length    // 检查是否传入了fn所需足够的参数
            ? fn.apply(this, rest)
            : curryingHelper(currying.apply(this, [fn].concat(rest)), length - rest.length)        // 在通用currying函数基础上
    }
}

// 疯狂柯里化
const _ = {}
function crazyCurryingHelper(fn, length, args, holes) {
    length = length || fn.length    // 第一遍是fn所需的参数个数，以后是
    args = args || []
    holes = holes || []

    return function(...rest) {
        let _args = args.slice(),
            _holes = holes.slice(),
            argLength = _args.length,        // 存储接收到的args和holes的长度
            holeLength = _holes.length,
            arg, i = 0
        for (; i < rest.length; i++) {
            arg = rest[i]
            if (arg === _ && holeLength) {
                holeLength--                      // 循环_holes的位置
                _holes.push(_holes.shift())      // _holes最后一个移到第一个
            } else if (arg === _) {
                _holes.push(argLength + i)          // 存储_hole就是_的位置
            } else if (holeLength) {              // 是否还有没有填补的hole
                holeLength--
                _args.splice(_holes.shift(), 0, arg)           // 在参数列表指定hole的地方插入当前参数
            } else {
                _args.push(arg)            // 不需要填补hole,直接添加到参数列表里面
            }
        }

        return _args.length >= length                          // 递归的进行柯里化
            ? fn.apply(this, _args)
            : crazyCurryingHelper.call(this, fn, length, _args, _holes)
    }
}
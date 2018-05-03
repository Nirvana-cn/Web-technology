function deepCopy(source, target = {}) {
    for (key in source) {
        if (source.hasOwnProperty(key)) {                         // 意思就是__proto__上面的属性,我不拷贝
            if (typeof(source[key]) === "object") {               // 如果这一项是object类型,就递归调用deepCopy
                target[key] = Array.isArray(source[key]) ? [] : {};
                deepCopy(source[key], target[key]);
            } else {                                            // 如果不是object类型,就直接赋值拷贝
                target[key] = source[key];
            }
        }
    }
    return target;
}
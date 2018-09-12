// isPlainObject是用来判定是否为纯净的JavaScript对象，既不是DOM、BOM对象，也不是自定义“类”的实例对象
function isPlainObject() {
    return typeof obj ==='object' && Object.getPrototypeOf(obj) === Object.prototype
}
// bind(...)会返回一个硬编码的新函数，它会把参数设置为this的上下文并调用原始函数
// 简单实现
function bind(fn, obj) {
    return function () {
        fn.apply(obj,arguments);
    }
}
// 复杂实现
if(!Function.prototype.bind){
    Function.prototype.bind=function (oThis) {
        if(typeof this !== "function"){
            // 与ECMAScript5最接近的内部IsCallable函数
            throw new TypeError("Function.prototype.bind-what is trying to be bound is not callable")
        }
        var aArgs=Array.prototype.slice.call(arguments,1);
        var fToBind=this;
        var fNOP=function () {};
        var fBound=function () {
            return fToBind.apply(
                (
                    this instanceof fNOP && oThis ? this : oThis
                ),
                aArgs.concat(
                    Array.prototype.slice.call(arguments)
                )
            )
        };
        fNOP.prototype=this.prototype;
        fBound.prototype=new fNOP();
        return fBound;
    }
}
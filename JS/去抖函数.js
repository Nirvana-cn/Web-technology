// 函数防抖是函数在特定的时间内不被再调用后执行，比如：
// 1. scroll/resize事件
// 2. 文本连续输入，ajax验证/关键字搜索
function debounce(method,delay){
    var timer=null;
    return function(...args){
        var context=this;
        clearTimeout(timer);
        timer=setTimeout(function(){
            method.apply(context,args);
        },delay);
    }
}
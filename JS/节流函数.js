// 函数节流是确保函数特定的时间内至多执行一次，比如：
// 1. 频繁的mousemove/keydown，比如高频的鼠标移动，游戏射击类的
// 2. 搜索联想（keyup）
// 3. 进度条（我们可能不需要高频的更新进度）
// 4. 拖拽的dragover等
// 5.  高频的点击，抽奖等
function throttle(method,duration){
    var  begin=new Date();
    return function(...args){
        var context=this, current=new Date();
        if(current-begin>=duration){
            method.apply(context,args);
            begin=current;
        }
    }
}
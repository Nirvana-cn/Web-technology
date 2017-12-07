if(! "a" in window){
    var a = 1;
}
alert(a);
// javascript只有函数作用域， 没有块作用域，所以在if 里面的赋值语句
// var a = 1;
// 分两步
// var a ; //这个声明语句会被提升到代码顶部。
// 因为! 比 in 的优先级高,所以这个判断式等价 (!'a') in window, 结果为false,
// 所以不会执行赋值语句
// alert(a) 返回 undefined
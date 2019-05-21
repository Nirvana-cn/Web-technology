var obj = {
    key:1,
    fun: function(callback) {
        var i = 2;
        callback.call(i,this);
    }
};

obj.fun(function(a,b) {
    console.log(a,b,this);
});
// 最后的输出结果为：
//
// Object {
//     fun: function(callback) {
//         var i = 2;
//         callback.call(i,this);
//     }
//     key:1,
// }
//
// Undefined
// 2
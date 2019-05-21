for(var i=1;i<=5;i++){
    setTimeout(function timer() {
        console.log(i);
    },i*1000);
}

for(var i=1;i<=5;i++){
    (function (j) {
        setTimeout(function timer() {
            console.log(j);
        },j*1000);
    })(i);
}

for(let i=1;i<=5;i++){
    setTimeout(function timer() {
        console.log(i);
    },i*1000);
}
// 由于历史原因，setTimeout()和setInterval()的第一个参数可以作为字符串传入。
// 如果这么做，那么这个字符串就会在指定的间隔之后进行求值(相当于执行eval())
// 这里setTimeout()中是立即执行函数，所以会立即执行，打印0-4，返回undefined
for(var i=0;i<5;i++){
    setTimeout((function(j) {
        console.log(j)
    })(i),i*1000);
}

// promise和JS运行机制
// promise里面的函数是立即执行的
// 分别输出 2 3 5 4 1
setTimeout(function () {
    console.log(1)
},0);
new Promise(function executor(resolve) {
    console.log(2);
    for(var i=0;i<10000;i++){
        i==9999 && resolve();
    }
    console.log(3);
}).then(function () {
    console.log(4);
});
console.log(5);
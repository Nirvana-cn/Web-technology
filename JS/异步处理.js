// 期望目标是： console.log执行1秒后 输出 "wwwwwwww"
// 另外要求：
// 1 、aa 函数可随意修改， 但 内部不能有 console.log ;
// 2 、执行 下面语句 console.log 不能用 setTimeout 包裹；
function aa () {
    setTimeout(  function(){
        return     "wwwwwwww";
    }  ,1000);
}
console.log(aa());

function aaa() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('wwwww')
        },1000)
    })
}
aaa().then((v)=>{console.log(v)});
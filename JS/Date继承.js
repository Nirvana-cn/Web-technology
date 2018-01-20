// 要调用Date上方法的实例对象必须通过Date构造出来，否则不允许调用Date的方法
function MyDate(){
    let temp = arguments.length===0 ? new Date() : new Date(Array.prototype.join.call(arguments,''));
    Object.setPrototypeOf(temp,MyDate.prototype);
    return temp
}
MyDate.prototype=Object.create(Date.prototype);
MyDate.prototype.show=function () {
    console.log(111)
};
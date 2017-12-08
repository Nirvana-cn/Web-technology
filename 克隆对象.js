function clone(origin) {
    return Object.assign({},origin)
}
// 上面的方法只能克隆原始对象自身的值，不能克隆它继承的值，如果希望保持继承链，可以采用下面的方法
function clone(origin) {
    let originProto=Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto),origin);
}

// Object.assign方法可以将源对象的所有可枚举属性复制到目标对象
// Object.assign方法有很多用处
// 为对象添加属性和方法
Object.assign(SomeClass.prototype,{
    someMethod(arg1,arg2){

    },
    anotherMethod(){

    }
});
// 等同于下面的写法
SomeClass.prototype.someMethod=function (arg1, arg2) {

};
SomeClass.prototype.anotherMethod=function (arg1, arg2) {

};
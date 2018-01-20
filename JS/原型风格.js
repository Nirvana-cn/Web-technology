function Foo(name) {
    this.name=name;
}
Foo.prototype.myName=function () {
    return this.name;
};
function Bar(name, label) {
    Foo.call(this,name);
    this.label=label;
}
// 调用Object.create(..)会凭空创建一个新对象并把新对象内容的[[Prototype]]关联到你指定的对象
Bar.prototype=Object.create(Foo.prototype);
Bar.prototype.myLabel=function () {
    return this.label;
};
var a=new Bar("a","obj a");
a.myName();
a.myLabel();

// 下面两种方式是常见的错误做法
Bar.prototype=Foo.prototype;
// Bar.prototype=Foo.prototype并不会创建一个关联到Bar.prototype的新对象,它只是让Bar.prototype直接引用Foo.prototype对象
// 因此当你执行类似Bar.prototype.myLabel=...的赋值语句时会直接修改Foo.prototype对象本身
Bar.prototype=new Foo();

// ES6添加了辅助函数Object.setPrototypeOf(..)
Object.setPrototypeOf(Bar.prototype,Foo.prototype);
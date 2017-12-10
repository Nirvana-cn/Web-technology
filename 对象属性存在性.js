// 对象属性访问返回值可能是undefined，但是这个值有可能是属性中存储的undefined，也可能是因为属性不存在而返回undefined
// 可以在不访问属性值的情况下判断对象中是否存在这个属性
// in 操作符会检查是否在对象及其[[Prototype]]原型链中
// hasOwnProperty()只会检查属性是否在obj对象中
var obj={a:2};
("a" in obj);//true
("b" in obj);//false
obj.hasOwnProperty("a");//true
obj.hasOwnProperty("b");//false
// 但是有的对象可能没有连接到Object.prototype(比如通过Object.create(null)来创建的)，这种情况下形如obj.hasOwnProperty()就会失败
// 这时可以使用一种更加强硬的方法来进行判断
Object.prototype.hasOwnProperty.call(obj,"a");
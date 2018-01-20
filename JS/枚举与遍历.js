// for..in循环可以用来遍历对象的可枚举属性列表(包括[[Prototype]]链)
// obj.b确实存在并且有访问值，但是却不会出现在for..in循环中(尽管可以通过in操作符来判断是否存在)
// 原因是"可枚举"就相当于可以出现在对象属性的遍历中
var obj={};
Object.defineProperty(obj,"a",{value:1,enumerable:true});
Object.defineProperty(obj,"b",{value:2,enumerable:false});
obj.b;//2
("b" in obj);//true
obj.hasOwnProperty("b");//true
for (var i in obj){
    console.log(i,obj[i]);//"a" 2
}
// propertyIsEnumerable会检查给定的属性名是否直接存在于对象中(而不是原型链中)并且满足enumerable:true
obj.propertyIsEnumerable("a")//true
obj.propertyIsEnumerable("b")//false
//Object.keys(..)会返回一个数组，包含所有可枚举属性；Object.getOwnPropertyNames(..)会返回一个数组，包含所有属性，无论它们是否可枚举
Object.keys(obj);//["a"]
Object.getOwnPropertyNames(obj);//["a","b"]

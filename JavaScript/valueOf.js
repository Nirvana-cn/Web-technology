//在js中==代表的是等于而不是全等，那么就存在变量的隐式转化问题。这就意味着结果会比我们所期望的更多的可能性
//JavaScript提供了一种将对象转化为原始值的方法：Object.prototype.valueOf()，默认情况下，返回正在被调用的对象
//(a==1 && a==2 && a==3)JavaScript会企图将对象转化成数字的类型，进行比较。当要转化的是一个Object的时候，JavaScript会调用valueOf()方法。
const a = {
    num: 0,
    valueOf: function() {
        return this.num += 1
    }
};
const equality = (a==1 && a==2 && a==3);
console.log(equality); // true
function Animal(){
    this.species = "动物";
}

function Cat(name,color){
    this.name = name;
    this.color = color;
}

// 一、 构造函数绑定
function Cat(name,color){
    Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}
var cat1 = new Cat("大毛","黄色");
alert(cat1.species); // 动物

// 二、 prototype模式
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛","黄色");
alert(cat1.species); // 动物


// 三、 直接继承prototype
// 缺点是 Cat.prototype和Animal.prototype现在指向了同一个对象，那么任何对Cat.prototype的修改，都会反映到Animal.prototype。
// 先将Animal对象改写：
function Animal(){ }
Animal.prototype.species = "动物";

// 然后，将Cat的prototype对象，然后指向Animal的prototype对象
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛","黄色");
alert(cat1.species); // 动物

// 四、 利用空对象作为中介
function extend(Child, Parent) {
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}

// 五、 拷贝继承
// 把父对象的所有属性和方法，拷贝进子对象
function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
}
// 方法一 sort()
Array.prototype.unique = function () {
    const newArray = [];
    this.sort();
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== newArray[newArray.length - 1]) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

// 方法二 include() - 比较费时
Array.prototype.unique = function () {
    const newArray = [];
    this.forEach(item => {
        if (!newArray.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

// 方法三 reduce()
Array.prototype.unique = function () {
    return this.sort().reduce((init, current) => {
        if(init.length === 0 || init[init.length - 1] !== current){
            init.push(current);
        }
        return init;
    }, []);
}

// 方法四 利用对象的key不可以重复的特性来进行去重
Array.prototype.unique = function () {
    const newArray = [];
    const tmp = {};
    for (let i = 0; i < this.length; i++) {
        // 使用JSON.stringify()进行序列化
        // 区分数字1和字符串1
        if (!tmp[typeof this[i] + JSON.stringify(this[i])]) {
            // 将对象序列化之后作为key来使用
            tmp[typeof this[i] + JSON.stringify(this[i])] = 1;
            newArray.push(this[i]);
        }
    }
    return newArray;
}

// 方法五 map()
Array.prototype.unique = function () {
    const tmp = new Map();
    return this.filter(item => {
        return !tmp.has(item) && tmp.set(item, 1);
    })
}

// 方法六 set()
Array.prototype.unique = function () {
    return [...new Set(this)];
}
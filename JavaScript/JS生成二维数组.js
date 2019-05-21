// ES5对空位的处理很不一致，大多数情况下会忽略空位
// forEach,filter,every,some,map都会跳过空位
// join，toString会将空位视为undefined，而undefined和null会被处理为空字符串
// ES6明确规定将空位转为undefined
// Array.from,...运算符,fill,for...of遍历
// entries,keys,values,find,findIndex都会将空位处理成undefined
// 由于空位的处理规则非常不统一，所有建议避免出现空位
let arr=new Array(10).fill(0).map(v=>new Array(10).fill(0));

// 循环赋值
let arrr=new Array(13);
for(let i=0;i<13;i++){
    arrr[i]=(new Array(11)).fill(0)
}
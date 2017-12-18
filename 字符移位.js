// 把一个字符串的大写字母放到字符串的后面，各个字符的相对位置不变，且不能申请额外的空间
function changeStr(str) {
    let arr=Array.from(str);
    let temp=[];
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i].charCodeAt(0)<=90){
            temp.unshift(arr.splice(i,1)[0])
        }
    }
    return arr.concat(temp).join('');
}
changeStr('AfderFVfdEOG');

// 使用正则表达式
var str="ASDasdhajsdhAsadw";
var temp=[];
str=str.replace(/[A-Z]/g,function(res){
    temp.push(res);
    return "";
});
str=str+temp.join("");


// var readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.on('line', function(line){
//
// });
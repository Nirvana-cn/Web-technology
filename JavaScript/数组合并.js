let arr1=[1,2,3];
let arr2=[4,5,6];
// method 1
arr1.push(...arr2)
// method 2
Array.prototype.push.apply(arr1,arr2)
// method 3
// concat方法不会改变原数组
let arr3=arr1.concat(arr2)

let a=new Date('2017-3-3');
let b=new Date('2017-1-1');
let year=a.getFullYear()-b.getFullYear();
let month=a.getMonth()-b.getMonth();
let day=a.getDate()-b.getDate();
console.log(`相差${year}年${month}月${day}天`);
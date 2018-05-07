// 有n级台阶，一个人每次上一级或者两级，问有多少种走完n级台阶的方法
// 当n为1时，f(n) = 1,n为2时，f(n) =2,就是说当台阶只有一级的时候，方法数是一种，台阶有两级的时候，方法数为2。
// 那么当我们要走上n级台阶，必然是从n-1级台阶迈一步或者是从n-2级台阶迈两步，
// 所以到达n级台阶的方法数必然是到达n-1级台阶的方法数加上到达n-2级台阶的方法数之和。即f(n) = f(n-1)+f(n-2)
function goUpstairs(n) {
    let temp=[1,2];
    for(let i=3;i<=n;i=i+2){
        temp[0]=temp[0]+temp[1];
        temp[1]=temp[0]+temp[1];
    }
    if(n%2===0){
        return temp[1];
    }else{
        return temp[0];
    }
}

// 尾调用优化
function goUpstairs2(n, prev, next) {
    if(n <= 1) return next;
    return goUpstairs2(n-1, next, prev + next);
}

//ES6改写
function goUpstairs3(n, prev=1, next=1) {
    if(n <= 1) return next;
    return goUpstairs3(n-1, next, prev + next);
}
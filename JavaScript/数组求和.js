let arr=[1,2,3,4,5]
// / 1. for循环遍历

// 2. forEach遍历
let total=0
arr.forEach(function (val) {
    total=total+val
})

// 3. reduce
arr.reduce(function (prev, curr, idx, arr) {
    return prev+curr
})

// 4.eval
eval(arr.join("+"))
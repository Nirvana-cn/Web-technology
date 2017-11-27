// 给定数组arr，返回arr的最长递增子序列的长度，比如arr=[2,1,5,3,6,4,8,9,7]，最长递增子序列为[1,3,4,8,9]返回其长度为5.
// dp[i]表示以必须arr[i]这个数结束的情况下产生的最大递增子序列的长度。对于第一个数来说，很明显dp[0]为1，当我们计算dp[i]的时候，
// 我们去考察i位置之前的所有位置，找到i位置之前所有比arr[i]小的位置中最大的那个值，记为dp[j](0=<j<i),
// dp[j]代表以arr[j]结尾的最长递增序列，而dp[j]又是之前计算过的最大的那个值，
// 则dp[i]=dp[j]+1.计算完dp之后，我们找出dp中的最大值，即为这个串的最长递增序列
let arr=[2,1,5,3,6,4,8,9,7];
function search(arr) {
    let temp=[1];
    for(let i=1;i<arr.length;i++){
        let temp_arr=arr.slice(0,i);
        let flag=[];
        for(let j=0;j<temp_arr.length;j++){
            if(arr[j]<arr[i]){
                flag.push(temp[j])
            }
        }
        if(flag.length===0){
            temp.push(1)
        }else{
            temp.push(Math.max(...flag)+1)
        }
    }
    return Math.max(...temp)
}

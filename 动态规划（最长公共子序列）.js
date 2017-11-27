// 给定两个字符串str1和str2，返回两个字符串的最长公共子序列，例如：str1="1A2C3D4B56",str2="B1D23CA45B6A",
// "123456"和"12C4B6"都是最长公共子序列，返回哪一个都行，dp[i][j]的值必然和dp[i-1][j],dp[i][j-1],dp[i-1][j-1]相关，
// 从第1行和第1列开始计算的，把第0行和第0列都初始化为0，为了后面的取最大值在代码实现上的方便，dp[i][j]取三者之间的最大值
let str1="1A2C3D4B56";
let str2="B1D23CA45B6A";
function search(str1, str2) {
    let m=str2.length+1;
    let n=str1.length+1;
    let arr=new Array(m).fill(0).map(v=>new Array(n).fill(0));
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            if(str2[i-1]===str1[j-1]){
                arr[i][j]=1+arr[i-1][j-1];
            }else{
                arr[i][j]=Math.max(arr[i-1][j],arr[i][j-1]);
            }
        }
    }
    return arr
}
search(str1,str2);
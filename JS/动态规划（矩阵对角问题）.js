// 给定一个矩阵m，从左上角开始每次只能向右走或者向下走，最后达到右下角的位置，路径中所有数字累加起来就是路径和，返回所有路径的最小路径和
// dp[i][j]表示的是从原点到i,j位置的最短路径和。我们首先计算第一行和第一列，直接累加即可，那么对于其他位置，要么是从它左边的位置达到，
// 要么是从上边的位置达到，我们取左边和上边的较小值，然后加上当前的路径值，就是达到当前点的最短路径。然后从左到右，从上到下依次计算即可
let arr=[[1,3,5,9],[8,1,3,4],[5,0,6,1],[8,8,4,0]];
function search(arr) {
    for(let i=1;i<arr.length;i++){
        arr[i][0]=arr[i][0]+arr[i-1][0]
    }
    for(let i=1;i<arr[0].length;i++){
        arr[0][i]=arr[0][i]+arr[0][i-1]
    }
    for(let i=1;i<arr.length;i++){
        for(let j=1;j<arr[0].length;j++){
            arr[i][j]=Math.min(arr[i][j]+arr[i-1][j],arr[i][j]+arr[i][j-1])
        }
    }
    return arr
}

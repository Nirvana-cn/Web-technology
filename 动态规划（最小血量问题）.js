// 地牢是由M*N个方格构成的网格，骑士位于地牢左上角，公主位于地牢右下角，骑士必须从地牢左上角到达右下角去消灭魔鬼拯救公主
// 初始时小陌有一正数表示血量，当其血量不大于0时，拯救失败，同时每一步只能向下或向右
// 请写一个函数求出骑士最少的血量是多少才能救出公主
let arr=[[-2,-3,3],[-5,-10,1],[0,30,-5]];
function search(arr) {
    let m=arr.length;
    let n=arr[0].length;
    let dp=new Array(m).fill(0).map(v=>new Array(n).fill(0));
    dp[m-1][n-1]=Math.max(1-arr[m-1][n-1],1);
    for(let i=n-2;i>=0;i--){
        dp[i][n-1]=Math.max(dp[i+1][n-1]-arr[i][n-1],1)
    }
    for(let i=n-2;i>=0;i--){
        dp[n-1][i]=Math.max(dp[n-1][i+1]-arr[n-1][i],1)
    }
    for(let i=n-2;i>=0;i--){
        for(let j=n-2;j>=0;j--){
            let right=Math.max(dp[i][j+1]-arr[i][j],1);
            let down=Math.max(dp[i+1][j]-arr[i][j],1);
            dp[i][j]=Math.min(right,down);
        }
    }
    return dp;
}
search(arr);
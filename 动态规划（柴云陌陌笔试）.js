// 地牢是由M*N个方格构成的网格，小陌位于地牢左上角，公主位于地牢右下角，小陌必须从地牢左上角到达右下角去消灭魔鬼拯救公主
// 初始时小陌有一正数表示血量，当其血量不大于0时，拯救失败，同时每一步只能向下或向右
// 请写一个函数求出小陌最少的血量是多少才能救出公主
let arr=[[-2,-3,3],[-5,-10,1],[10,30,-5]];
function search(arr) {
    for(let i=1;i<arr.length;i++){
        arr[i][0]=arr[i][0]+arr[i-1][0]
    }
    for(let i=1;i<arr[0].length;i++){
        arr[0][i]=arr[0][i]+arr[0][i-1]
    }
    for(let i=1;i<arr.length;i++){
        for(let j=1;j<arr[0].length;j++){
            arr[i][j]=Math.max(arr[i][j]+arr[i][j-1],arr[i][j]+arr[i-1][j])
        }
    }
    return arr
}
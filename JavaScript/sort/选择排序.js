function swap(myArray, p1, p2){
    var temp = myArray[p1];
    myArray[p1] = myArray[p2];
    myArray[p2] = temp;
}
// 时间复杂度O(n^2)，性能稍好于冒泡
function selectionSort(myArray){
    var len = myArray.length, min;
    for (i=0; i < len; i++){
        // 将当前位置设为最小值
        min = i;
        // 检查数组其余部分是否更小
        for (j=i+1; j < len; j++){
            if (myArray[j] < myArray[min]){
                min = j;
            }
        }
        // 如果当前位置不是最小值，将其换为最小值
        if (i != min){
            swap(myArray, i, min);
        }
    }
    return myArray;
}
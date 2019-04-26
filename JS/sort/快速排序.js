function swap(myArray, firstIndex, secondIndex){
    var temp = myArray[firstIndex];
    myArray[firstIndex] = myArray[secondIndex];
    myArray[secondIndex] = temp;
}

function partition(myArray, left, right) {
    var pivot   = myArray[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (myArray[i] < pivot) {
            i++;
        }
        while (myArray[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(myArray, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(myArray, left, right) {
    if (myArray.length < 2) return myArray;
    left = (typeof left !== "number" ? 0 : left);
    right = (typeof right !== "number" ? myArray.length - 1 : right);
    var index  = partition(myArray, left, right);
    if (left < index - 1) {
        quickSort(myArray, left, index - 1);
    }
    if (index < right) {
        quickSort(myArray, index, right);
    }
    return myArray;
}

// 一行代码写快排
function quickSort(a) {
    return a.length <= 1 ? a : quickSort(a.slice(1).filter(item => item <= a[0])).concat(a[0], quickSort(a.slice(1).filter(item => item > a[0])));
}

// 使用filter
function quickSort(arr) {
    // 当数组长度不大于1时，返回结果，防止callstack溢出。
    if(arr.length <= 1) return arr;
    return [
        // 递归调用quickSort，通过Array.prototype.filter方法过滤小于arr[0]的值，注意去掉了arr[0]以防止出现死循环。
        ...quickSort(arr.slice(1).filter(item => item < arr[0])),
        arr[0],
        ...quickSort(arr.slice(1).filter(item => item >= arr[0]))
    ];
}
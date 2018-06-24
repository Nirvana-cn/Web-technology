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
function merge(left, right){
    var result  = [],
        il      = 0,
        ir      = 0;
    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    return result.concat(left.slice(il)).concat(right.slice(ir));
}
// 时间复杂度为O(nlogn)
function mergeSort(myArray){
    if (myArray.length < 2) {
        return myArray;
    }
    var middle = Math.floor(myArray.length / 2),
        left    = myArray.slice(0, middle),
        right   = myArray.slice(middle),
        params = merge(mergeSort(left), mergeSort(right));
    // 在返回的数组头部，添加两个元素，第一个是0，第二个是返回的数组长度
    params.unshift(0, myArray.length);
    // splice用来替换数组元素，它接受多个参数，
    // 第一个是开始替换的位置，第二个是需要替换的个数，后面就是所有新加入的元素。
    // 因为splice不接受数组作为参数，所以采用apply的写法。
    // 这一句的意思就是原来的myArray数组替换成排序后的myArray
    myArray.splice.apply(myArray, params);
    // 返回排序后的数组
    return myArray;
}
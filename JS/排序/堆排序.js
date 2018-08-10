// 堆排序也是一种很高效的排序方法，因为它把数组作为二叉树排序而得名，可以认为是归并排序的改良方案
// 它是一种原地排序方法，但是不够稳定，其时间复杂度为O(nlogn)。
// 实现步骤：
// （1）由数组构造一个堆结构，该结构满足父节点总是大于（或小于）其子节点。
// （2）从堆结构的最右边的叶子节点开始，从右至左、从下至上依次与根节点进行交换，每次交换后，都要再次构建堆结构。
//      值得注意的是每次构建堆结构时，都要忽略已经交换过的非根节点。
// 堆排序的运行时间主要是消耗在初始构建堆和重建堆时的反复筛选上。
// 另外，由于初始化构建堆所需的比较次数较多，因此它并不适合元素个数较少的数组。
function heapSort(arr) {
    //console.time('HeapSort');
    buildHeap(arr);
    for(let i=arr.length-1; i>0; i--) {
        // 从最右侧的叶子节点开始，依次与根节点的值交换。
        [arr[i], arr[0]] = [arr[0], arr[i]];
        // 每次交换之后都要重新构建堆结构，记得传入i限制范围，防止已经交换的值仍然被重新构建。
        heapify(arr, i, 0);
    }
    //console.timeEnd('HeapSort');
    return arr;
    function buildHeap(arr) {
        // 可以观察到中间下标对应最右边叶子节点的父节点。
        let mid = Math.floor(arr.length / 2);
        for(let i=mid; i>=0; i--) {
            // 将整个数组构建成堆结构以便初始化。
            heapify(arr, arr.length, i);
        }
        return arr;
    }
    // 从i节点开始下标在heapSize内进行堆结构构建的函数。
    function heapify(arr, heapSize, i) {
        // 左子节点下标。
        let left = 2 * i + 1,
            // 右子节点下标。
            right = 2 * i + 2,
            // 假设当前父节点满足要求（比子节点都大）。
            largest = i;
        // 如果左子节点在heapSize内，并且值大于其父节点，那么left赋给largest。
        if(left < heapSize && arr[left] > arr[largest]) {
            largest = left;
        }
        // 如果右子节点在heapSize内，并且值大于其父节点，那么right赋给largest。
        if(right < heapSize && arr[right] > arr[largest]) {
            largest = right;
        }
        if(largest !== i) {
            // 如果largest被修改了，那么交换两者的值使得构造成一个合格的堆结构。
            [arr[largest], arr[i]] = [arr[i], arr[largest]];
            // 递归调用自身，将节点i所有的子节点都构建成堆结构。
            arguments.callee(arr, heapSize, largest);
        }
        return arr;
    }
}

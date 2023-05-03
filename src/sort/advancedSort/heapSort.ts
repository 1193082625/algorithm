// 堆排序 时间复杂度O(N * logN) 空间复杂度O(1) 不稳定排序
export function heapSort(arr: number[]) {
    // 将数组构建成大堆根
    buildMaxHeap(arr);
    for(let i=arr.length - 1; i>0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]];
        maxHeapify(arr, 0, i);
    }
    return arr;
}

function buildMaxHeap(arr: number[]) {
    const n = arr.length;
    for(let i = n >> 1; i>=0; i--) {
        maxHeapify(arr, i, n);
    }
}

function maxHeapify(arr: number[], idx: number, heapSize: number) {
    let largest = idx;
    let l = idx * 2 + 1; // 获取当前节点的左子节点
    let r = l + 1;
    if(l < heapSize && arr[l] > arr[largest]) {
        largest = l;
    }
    if(r < heapSize && arr[r] > arr[largest]) {
        largest = r;
    }
    if(largest !== idx) {
        [arr[largest], arr[idx]] = [arr[idx], arr[largest]];
        maxHeapify(arr, largest, heapSize);
    }
}
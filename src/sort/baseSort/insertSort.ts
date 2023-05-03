// 插入排序 时间复杂度O(n^2) 空间复杂度O(1) 稳定排序
export function insertSort(arr: number[]) {
    if(!arr || arr.length < 2) {
        return arr;
    }
    const len = arr.length;
    for(let i=0; i<len; i++) {
        for(let j=i-1; j>=0 && arr[j] > arr[j+1]; j--) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
    return arr;
}
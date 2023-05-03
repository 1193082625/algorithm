// 冒泡排序 时间复杂度O(n^2) 空间复杂度O(1) 稳定排序
export function bubblingSort(arr: number[]) {
    if(!arr || arr.length < 2) {
        return arr;
    }
    const n = arr.length;
    for(let i=n - 1; i>0; i--) {
        for(let j=0; j< i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
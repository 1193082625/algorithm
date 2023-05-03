// 快排 时间复杂度O(N * logN) 空间复杂度O(NlogN) 不稳定排序
export function quickSort(arr: number[]): number[] {
    if(arr.length < 2) {
        return arr;
    }
    const idx = Math.floor(arr.length / 2);
    const [mid] = arr.splice(idx, 1);
    let left = [];
    let right = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] < mid) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([mid], quickSort(right));
}
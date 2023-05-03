// 归并排序 时间复杂度O(N * logN) 空间复杂度O(N) 稳定排序
export function mergeSort(arr: number[]): number[] {
    if(arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
   return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}
function merge(arr1: number[], arr2: number[]): number[] {
    let m = arr1.length;
    let n = arr2.length;
    let help: number[] = [];
    let i = 0;
    let j = 0;
    while(i < m && j < n) {
        if(arr1[i] < arr2[j]) {
            help.push(arr1[i++]);
        } else {
            help.push(arr2[j++]);
        }
    }
    while(i<m) {
        help.push(arr1[i++]);
    }
    while(j<n) {
        help.push(arr2[j++]);
    }
    return help;
}

// 求小和问题
export function getSmallSum(arr: number[]) {
    if(!arr || arr.length < 2) {
        return 0;
    }
    return process(arr, 0, arr.length - 1);
}

function process(arr: number[], l: number, r: number): number {
    if(l == r) {
        return 0;
    }
    const mid = l + Math.floor((r - l) >> 1);
    return process(arr, l, mid) + process(arr, mid + 1, r) + merge1(arr, l, mid, r);
}

function merge1(arr: number[], l: number, m: number, r: number) {
    let help = new Array(r - l + 1);
    let i = 0;
    let p1 = l;
    let p2 = m + 1;
    let res = 0;
    while(p1 <= m && p2 <= r) {
        res += arr[p1] < arr[p2] ? (r - p2 + 1) * arr[p1] : 0;
        help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
    }
    while(p1 <= m) {
        help[i++] = arr[p1++];
    }
    while(p2 <= r) {
        help[i++] = arr[p2++];
    }
    for(let i=0; i<help.length; i++) {
        arr[l+i] = help[i];
    }
    return res;
}
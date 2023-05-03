// 基数排序，基于计数排序的排序算法 时间复杂度O(d(n+k)) [d表示最长数组的位数，k表示每个基数可能的取值范围大小]
// 空间复杂度O(n + k) 稳定排序

export function radixSort(arr: number[]) {
    const n = arr.length;
    let max = Math.abs(arr[0]);
    for(const num of arr) {
        if(Math.abs(num) > max) {
            max = Math.abs(num);
        }
    }
    let maxDigitLength = 0;
    while(max !== 0) {
        maxDigitLength++;
        max = Math.floor(max / 10);
    }
    const counting = new Array(19).fill(0);
    const ans = new Array(n).fill(0);
    let dev = 1;
    for(let i=0; i<maxDigitLength; i++) {
        for(const num of arr) {
            const radix = (num > 0 ? Math.floor(num / dev) : Math.ceil(num / dev)) % 10 + 9;
            counting[radix]++;
        }
        counting[0]--;
        for(let j=1; j<19; j++) {
            counting[j] += counting[j-1];
        }
        for(let k=n-1; k>=0; k--) {
            const radix = (arr[k] > 0 ? Math.floor(arr[k] / dev) : Math.ceil(arr[k] / dev)) % 10 + 9;
            ans[counting[radix]] = arr[k];
            counting[radix]--;
        }
        for(let l=0; l<n; l++) {
            arr[l] = ans[l];
        }
        counting.fill(0);
        ans.fill(0);
        dev *= 10;
    }
    return arr;
}
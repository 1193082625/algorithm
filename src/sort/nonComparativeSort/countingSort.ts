// 计数排序 时间复杂度O(n + k) 空间复杂度 O(n + k) 稳定排序
export function countingSort(arr: number[]) {
    const n = arr.length;
    let min = arr[0];
    let max = arr[0];
    // 找到数组中的最大值和最小值，以确定计数数组的长度
    for(const num of arr) {
        if(num < min) {
            min = num;
        }
        if(num > max) {
            max = num;
        }
    }
    const range = max - min + 1;
    const counting = new Array(range).fill(0);
    // 遍历原始数组，完成计数
    for(const num of arr) {
        counting[num - min]++;
    }
    counting[0]--;
    // 将count数组改造成前缀和数组
    // 由前缀和数组就可以推出这个元素所在的位置
    for(let i=1; i<range; i++) {
        counting[i] += counting[i-1];
    }
    const ans = new Array(n);
    for(let i=n-1; i>=0; i--) {
        // 从后向前扫描，依次把看到的数写到数组中，从后向前是为了保证稳定性
        ans[counting[arr[i] - min]] = arr[i];
        // 前缀和减一，作为下一个看到的相同数存放位置的依据
        counting[arr[i] - min]--;
    }
    for(let i=0; i<n; i++) {
        arr[i] = ans[i];
    }
    return arr;
}
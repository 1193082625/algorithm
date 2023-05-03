// 桶排序 时间复杂度O(n^2) 空间复杂度O(n+k) 稳定排序
export function bucketSort(arr: number[]) {
    let min = arr[0];
    let max = arr[0];
    for(const num of arr) {
        if(num < min) {
            min = num;
        }
        if(num > max) {
            max = num;
        }
    }
    const BUCKET_SIZE = arr.length;
    const bucketCount = Math.floor((max - min) / BUCKET_SIZE) + 1;
    const buckets: Array<number[]> = new Array(bucketCount).fill(0).map(() => []);
    for(const num of arr) {
        const idx = Math.floor((num - min) / BUCKET_SIZE);
        buckets[idx].push(num);
    }
    const ans = [];
    for(let i=0; i<bucketCount; i++) {
        buckets[i].sort((a, b) => a - b);
        ans.push(...buckets[i]);
    }
    return ans;
}
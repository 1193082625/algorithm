// 希尔排序 插入排序的升级版
// 时间复杂度O(N * logN) 空间复杂度O(1) 不稳定排序
export function shellSort(nums: number[]) {
    const n = nums.length;
    for (let gap = n >> 1; gap > 0; gap >>= 1) {
        for (let i = 0; i < gap; ++i) {
            for (let j = i + gap; j < n; j += gap) {
                let preIndex = j - gap;
                const curNum = nums[j];
                while (preIndex >= 0 && curNum < nums[preIndex]) {
                    nums[preIndex + gap] = nums[preIndex];
                    preIndex -= gap;
                }
                nums[preIndex + gap] = curNum;
            }
        }
    }
    return nums;
}
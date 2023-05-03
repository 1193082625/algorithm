// 时间复杂度O(n^2), 空间复杂度O(1)，不稳定排序
export function selectronSort(nums: number[]) {
    if(!nums || nums.length < 2) {
        return nums;
    }
    const len = nums.length;
    for(let i=0; i<len - 1; i++) {
        let idx = i;
        for(let j=i+1; j<len; j++) {
            idx = nums[j] < nums[idx] ? j : idx;
        }
        [nums[i], nums[idx]] = [nums[idx], nums[i]];
    }
    return nums;
}
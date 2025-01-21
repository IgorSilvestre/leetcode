/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0
    nums = new Set(nums)
    let count = 1
    let highest = 1
    for (let num of nums) {
        if (nums.has(num - 1)) continue
        while (nums.has(num + 1)) {
            num++
            count++
            if (count > highest) highest = count
        }
        count = 1
    }
    return highest
};

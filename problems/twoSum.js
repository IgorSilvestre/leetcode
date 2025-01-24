/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    for (let [i, num] of nums.entries()) {
        if (map.has(target - num)) return [i,map.get(target - num)]
        map.set(num, i)
    }
};

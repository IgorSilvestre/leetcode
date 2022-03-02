/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    function sort (a, b) {
        return a - b
    }
    for (let j = m; j < m + n; j ++) {
        nums1[j] = nums2[j - m]
    }
    nums1.sort(sort)
    console.log(nums1)
};

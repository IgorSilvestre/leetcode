/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // merged arrays
    for (let i = 0; i < nums2.length; i++) {
        nums1.push(nums2[i])
    }
    // sorted them in ascending order
    nums1.sort(function (a, b) {
        return a - b
    })
    let medianIndex = Math.floor((nums1.length - 1) / 2)
    let checkIfEven = nums1.length / 2
    if((checkIfEven - Math.floor(checkIfEven)) == 0) { // for even numbers of elements
        
        let medianIndex2 = Math.floor((nums1.length + 1) / 2)
        var median = (nums1[medianIndex] + nums1[medianIndex2]) / 2
    }
    else { // for odd number of elements
        var median = nums1[medianIndex]
        
    }
    return median
};

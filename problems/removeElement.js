/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let numElements = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[numElements] = nums[i]
            numElements++
        }
    }
    nums.length = numElements
    
    return numElements
}

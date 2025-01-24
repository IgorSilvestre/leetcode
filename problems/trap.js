/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (!height || height.length === 0) return 0

    let sum = 0
    let left = 0
    let right = height.length - 1
    let leftMax = height[left]
    let rightMax = height[right]

    while (left < right) {
        if (leftMax < rightMax) {
            left++
            leftMax = Math.max(leftMax, height[left])
            sum += leftMax - height[left]
        }
        else {
            right--
            rightMax = Math.max(rightMax, height[right])
            sum += rightMax - height[right]
        }
    }
    return sum
};

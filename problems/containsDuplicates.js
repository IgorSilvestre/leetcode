/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const visited = new Set()
    for (let num of nums) {
        if(visited.has(num)) return true
        else visited.add(num)
    }
    return false
}


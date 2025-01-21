/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    let sorted
    let curr
    for (let word of strs) {
        sorted = word.split('').sort().join('')
        if (!map.has(sorted)) map.set(sorted, [])
        map.get(sorted).push(word)
    }
    return Array.from(map.values())
};

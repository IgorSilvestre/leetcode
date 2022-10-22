/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let commonPrefix = ""
    let letterCount = 0
    let word = 0
    let prefixOk = true
    let tryLetter = ""
    function identical(arr) {
        for(var i = 0; i < arr.length - 1; i++) {
            if(arr[i] !== arr[i+1]) {
                return false;
            }
        }
        return true;
    }
    while (prefixOk === true) {
        if(strs[word] == "") return commonPrefix
        if (strs.length < 2) return strs[word]
        if(identical(strs)) return strs[word]
        if (word === strs.length - 1) {
            commonPrefix += tryLetter
            word = 0
            letterCount += 1
        }
        tryLetter = strs[word][letterCount]
        if (tryLetter !== strs[word + 1][letterCount]) {
            return commonPrefix
        }
        word += 1
    }
};

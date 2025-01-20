/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    sSorted = s.split('').sort().join()
    tSorted = t.split('').sort().join()
    if(sSorted === tSorted) return true

    return false
}


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
    
    const freq = new Array(26).fill(0)
    for (var i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--
    }
    
    for (var i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) return false
    }
    
    return true
}

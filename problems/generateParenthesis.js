/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let combinations = []

    function gen (s, openCount, closeCount) {
        if (openCount === n && n === closeCount) {
            combinations.push(s)
            return
        }
        
        if (openCount < n) gen(s + '(', openCount + 1, closeCount, n)
        if (closeCount < openCount) gen(s + ')', openCount, closeCount + 1, n)

    }

    gen('', 0, 0)

    return combinations   
}

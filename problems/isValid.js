/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    const stack = [];
    for (const char of s) {
        if (['(', '[', '{'].includes(char)) {
            stack.push(char);
        } else if ([')', ']', '}'].includes(char)) {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        } else {
            return false;
        }
    }

    return stack.length === 0;
};

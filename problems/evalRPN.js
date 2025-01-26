/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = []
    let result
    let b, a

    for (let token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            b = stack.pop()
            a = stack.pop()

            switch (token) {
                case '+': result = a + b; break
                case '-': result = a - b; break
                case '*': result = a * b; break
                case '/': result = Math.trunc(a / b); break
            }

            stack.push(result)
        } else {
            stack.push(Number(token))
        }
    }

    return stack.pop()
};

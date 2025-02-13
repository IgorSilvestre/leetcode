var MinStack = function() {
    this.minStack = []
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) this.minStack.push(val)
    this.stack.push(val) 
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length === 0) return null
    const popped = this.stack.pop()
    if (popped === this.minStack[this.minStack.length - 1]) this.minStack.pop()
    return popped
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length === 0) return null
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.stack.length === 0) return null
    return this.minStack[this.minStack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

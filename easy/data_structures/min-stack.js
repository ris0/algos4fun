// Fast solution because we are not sorting
// var MinStack = function() {
//   this.elements = [];
// };

// /**

//  @param {number} x
//  @return {void}
//  */
// MinStack.prototype.push = function(x) {
//   this.elements.push({
//     value: x,
//     min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
//   });
// };
// /**

//  @return {void}
//  */
// MinStack.prototype.pop = function() {
//   this.elements.pop();
// };
// /**

//  @return {number}
//  */
// MinStack.prototype.top = function() {
//   return this.elements[this.elements.length - 1].value;
// };
// /**

//  @return {number}
//  */
// MinStack.prototype.getMin = function() {
//   return this.elements[this.elements.length - 1].min;
// };


// slow solution
// we are running slow sorting operations on our array
// it's faster if we contain a reference of the smallest value
var MinStack = function() {
  this.container = [];  
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (!isNaN(x)) {
        this.container.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.container.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // const ref = this.container.slice();
    // return ref.sort((a,b) => b - a)[0];
    return this.container[this.container.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const ref = this.container.slice();
    return ref.sort((a,b) => a - b)[0];
};

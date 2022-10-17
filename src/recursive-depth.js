const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  deep = 1;

  calculateDepth(arr) {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        this.deep++;
        this.calculateDepth(item);
      }
    });

    return this.deep;
  }
}

module.exports = {
  DepthCalculator
};

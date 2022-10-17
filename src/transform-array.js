const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) throw Error("'arr' parameter must be an instance of the Array!");

  let resultArray = arr.slice();
  
  for (let i = 0; i < resultArray.length; i++) {
    if (resultArray[i] == '--discard-next' && i != (resultArray.length - 1)) {
      resultArray[i] = 'discarded';
      resultArray[i + 1] = 'discarded';
      i++;
    }
    if (resultArray[i] == '--discard-prev' && i != 0 && typeof( resultArray[i - 1] ) != 'string') {
      resultArray[i] = 'discarded';
      resultArray[i - 1] = 'discarded';
    }
    if (resultArray[i] == '--double-next' && i != (resultArray.length - 1)) {
      resultArray[i] = resultArray[i + 1];
      i++;
    }
    if (resultArray[i] == '--double-prev' && i != 0 && typeof( resultArray[i - 1] ) != 'string') {
      resultArray[i] = resultArray[i - 1];
    }

    if (resultArray[i] == '--discard-next' || resultArray[i] == '--discard-prev' || resultArray[i] == '--double-next' || resultArray[i] == '--double-prev') {
      resultArray[i] = 'discarded';
    }
  }

  return resultArray.filter(item => item != 'discarded');
}

module.exports = {
  transform
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let array = str.split('');
  let encodedArray = [];
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      counter++;
    } else {
      if (array[i] == array[i - 1]) {
        counter++;
      } else {
        if (counter != 1) encodedArray.push(counter);
        encodedArray.push(array[i - 1]);
        counter = 1;
      }
    }
  }

  if (counter > 1) encodedArray.push(counter);
  encodedArray.push(array[array.length - 1]);

  return encodedArray.join('');
}

module.exports = {
  encodeLine
};

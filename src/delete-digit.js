const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  let array = [];

  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      array.push( +str.slice(1) );
    } else {
      if (i == str.length - 1) {
        array.push( +str.slice(0, str.length - 1) );
      } else {
        array.push( +(str.slice(0, i) + str.slice(i + 1)) );
      }
    }
  }

  return array.sort( (a, b) => a - b )[array.length - 1];
}

module.exports = {
  deleteDigit
};

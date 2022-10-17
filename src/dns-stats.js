const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let object = {};

  for (let i = 0; i < domains.length; i++) {
    let position = domains[i].length - 1;

    while (position > 0) {
      let dotPos = domains[i].lastIndexOf('.', position);

      if (dotPos == -1) {
        
      }

      let domain = domains[i].slice(dotPos);

      if (domain in object) {
        object.domain++;
      } else {
        object.domain = 1;
      }

      position = dotPos - 1;
    }
  }

  return object;
}

module.exports = {
  getDNSStats
};

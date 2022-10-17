const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);

  let baseString = str;

  if (!options) {
    let options = {
      repeatTimes: 0,
      separator: '+', 
      addition: '',
      additionRepeatTimes: 0,
      additionSeparator: '|' 
    };
  }

  if (!('repeatTimes' in options)) options.repeatTimes = 0;
  if (!('separator' in options)) options.separator = '+';
  if (!('addition' in options)) options.addition = '';
  if (!('additionRepeatTimes' in options)) options.additionRepeatTimes = 0;
  if (!('additionSeparator' in options)) options.additionSeparator = '|';

  options.addition = String(options.addition);

  for (let i = 0; i < options.repeatTimes; i++) {
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      str = str + options.addition;

      if (j != options.additionRepeatTimes - 1) {
        str = str + options.additionSeparator;
      }
    }

    if (i != options.repeatTimes - 1) {
      str = str + options.separator + baseString;
    }
  }

  return str;
}

module.exports = {
  repeater
};

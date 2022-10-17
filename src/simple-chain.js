const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  string: '',
  array: [],

  getLength() {
    return this.array.length;
  },
  addLink(value) {
    if (this.string != '') {
      this.string = this.string + '~~';
    }

    this.string = this.string + `( ${value} )`;
    this.array.push(value);
  },
  removeLink(position) {
    
  },
  reverseChain() {
    
  },
  finishChain() {
    
  }
};

module.exports = {
  chainMaker
};

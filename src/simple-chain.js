const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.str.length
  },
  addLink(value = '( )') {
    this.str = [...(this.str || []), `( ${value} )`]
    return chainMaker;
  },
  removeLink(position) {
    if (this.str[position] === undefined){
      this.str = []
      throw new Error('Error')
    }
    this.str.splice(position-1,1)
    return chainMaker
  },
  reverseChain() {
    this.str = this.str.reverse();
    return chainMaker;
  },
  finishChain() {
    this.str = this.str.join('~~')
    this.res = this.str;
    this.str = []
    return chainMaker.res;
  }
}

module.exports = chainMaker;

const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, count =1) {
    const a = arr.filter(elem => Array.isArray(elem))
      if(a.length != 0){
        const b = a.reduce((acc, elem)=>
          acc.concat(elem)
        ,[]);
       count =  this.calculateDepth(b, count+1)
      }
      return count
    }
 
};
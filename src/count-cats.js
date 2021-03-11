const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let counter = 0;
  for (let i = 0; i < matrix.length; i++){
      let test = matrix[i]
    for ( let j = 0; j < test.length; j++){
      test[j] === '^^'? counter++: 0;
    }
  }
return counter
};



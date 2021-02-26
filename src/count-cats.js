const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let counter = 0;
  for (let i = 0; i < matrix.length; i++){
      let test = matrix[i]
    for ( let j = 0; j < test.length; j++){
      test[j] === '^^'? counter++: 0;
    }
  }
return counter
};
// // restOperator
// //restructurizacia
// //destructurizacia 
// const a = {b:1};
// const arr = [
//     [1,2,3],
//     [4,5,6]
//     ]
    
// let test = [...arr];
// console.log([...'test'])
// console.log({...a, b:2})
// // console.log([...arr, 3])
// test = [...arr].push(3)
// console.log(test)


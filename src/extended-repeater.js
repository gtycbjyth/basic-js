const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
let repeat = options.repeatTimes || 1;
let separator = options.separator || '+';
let add = options.addition === null ? 'null': options.addition ;
let addRepeat = options.additionRepeatTimes || 1;
let addSeparator = options.additionSeparator || '|' ;
let newString = str;
function rep (str, repeat, separator){
  let res =[];
  for (let i = repeat; i > 0; i--) {
    res.push(str)
  }
  return res.join(separator)
}

if (add !== undefined && addRepeat === 1) {
    newString += add;
  }
if (addRepeat > 1) {
      newString += rep (add, addRepeat, addSeparator);
  }
  newString = rep (newString, repeat, separator);
return newString
}
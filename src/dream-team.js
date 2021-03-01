const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // console.log(Array.isArray(members));
  // console.log(typeof(member));
  console.log(`member - ${members}`);
if (!Array.isArray(members)){
  return false
}


  let res = members.reduce((acc, item)=>
    typeof item === 'string' ? acc += item.trim()[0].toUpperCase() : acc
  ,'');

  res = Array.isArray(members) ? res.split('').sort().join('') : false ;
  return res

};

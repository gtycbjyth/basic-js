const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const month = [ 
  'winter', 'winter', 'spring',
  'spring','spring', 'summer', 
  'summer', 'summer', 'autumn',
  'autumn','autumn', 'winter'
  ];

  try {
    if (Object.prototype.toString.call(date) === "[object Date]"){
      return month[date.getMonth()];
    } else {
      throw new Error('Unable to determine the time of year!')
    }
  }
  catch(error){
    if (typeof date == 'undefined'){
      return error.message
    }
    throw error
  }
}

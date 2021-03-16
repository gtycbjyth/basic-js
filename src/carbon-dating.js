const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const isNumber = parseFloat(sampleActivity);
  const res = Math.ceil(Math.log(MODERN_ACTIVITY/isNumber)/(0.693/HALF_LIFE_PERIOD));
  return typeof sampleActivity !== 'string' || isNaN(isNumber)|| isNumber <= 0 || res < 0 || sampleActivity > HALF_LIFE_PERIOD ? false : res;
}

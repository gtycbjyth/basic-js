const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  try {
    if(Object.prototype.toString.call(arr) !== "[object Array]"){
      throw new Error()
    }
    const test = [...arr];
    const res = test.reduce((acc, elem, index, array) => {
      switch (elem) {
          case "--discard-next":
            if (index !== acc.length-1){ acc[index+1] = 'q`'};
            acc[index] = 'q`';
            break;
            case "--discard-prev":
              if (index !== 0){ acc[index-1] = 'q`'};
              acc[index] = 'q`';
            break;
            case "--double-next":
              if (index !== acc.length-1){ acc[index] = acc[index+1]}
            else{acc[index]='q`'}
            break;
            case "--double-prev":
              if (index !== 0){ acc[index] = acc[index-1]}
              else{acc[index]='q`'}
            break;
            default:
              break;
        }
        return acc;
    },test).filter(el=>el!=='q`')
    return res
  } 
  catch (error) {
    throw error
  }
}


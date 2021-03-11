const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool = true){
    this.bool = bool;
  }
  
  convertCharCodeAt(str){
    str = [...str.toUpperCase()]
    const codeArr = [];
    for (const letter of str) {
      codeArr.push(letter.charCodeAt())
    }
    // console.log('convertCharCodeAt',codeArr);
    return codeArr
  }
  
  alphCode(code = 65){
    let test = code;
    const alph = new Array(26).fill(1);
    return alph.map((elem, index) => {
      return index === 0? test: test === 90? test = 65: ++test
    })
  }
  
  encrypt(encStr, str) {
    // if(encStr || str === undefined)throw new Error();
    encStr = this.convertCharCodeAt(encStr)
    str = this.convertCharCodeAt(str)
    const alph = this.alphCode()
    const res = [];
    
    while (str.length < encStr.length) {
      str = str.concat(str);
    }
    this.bool?this.bool: encStr = encStr.reverse()
    
    let corectIndex = 0
    for (let i = 0 ; i < encStr.length; i++ ) {
      if (encStr[i] < 65 || encStr[i] > 90){
        res.push(String.fromCharCode(encStr[i]));
        corectIndex++;
        continue;
      }
      let index = alph.indexOf(encStr[i]);
      let enCodedAlph = this.alphCode(str[i - corectIndex]);
      res.push(String.fromCharCode(enCodedAlph[index]))
    }

    return res.join('')    
  }   
  
  decrypt(decStr, str) {
    // if(encStr || str === undefined)throw new Error();
    decStr = this.convertCharCodeAt(decStr)
    str = this.convertCharCodeAt(str)
    const alph = this.alphCode()
    const res = [];
    this.bool?this.bool: decStr = decStr.reverse()

    while (str.length < decStr.length) {
      str = str.concat(str);
    }

    let corectIndex = 0
    for (let i = 0 ; i < decStr.length; i++ ) {
      if (decStr[i] < 65 || decStr[i] > 90){
        res.push(String.fromCharCode(decStr[i]));
        corectIndex++;
        continue;
      }
      let deCodedAlph = this.alphCode(str[i - corectIndex]);
      let index = deCodedAlph.indexOf(decStr[i]);

      res.push(String.fromCharCode(alph[index]))
    }
    // this.bool?1 : res= res.reverse();
    return res.join('')    
    
    
  }
}

module.exports = VigenereCipheringMachine;

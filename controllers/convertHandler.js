function ConvertHandler() {
  
  this.getNum = function(input) {
    let i = 0;
    let numerator;
    while (!isNaN(Number(input.charAt(i))) || input.charAt(i) === '.' || input.charAt(i) === '/') {
      if (input.charAt(i) === '/') {
        if (numerator) {
          return 'invalid number';
        }
        numerator = Number(input.substring(0, i));
      }
      i++;
    }
    let result;
    if (i === 0) {
      result = 1;
    } else if (!numerator) {
      result = Number(input.substring(0, i));
    } else {
      let denominator = Number(input.substring(input.indexOf('/') + 1, i));
      result = numerator / denominator;
    }
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

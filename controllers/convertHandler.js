function ConvertHandler() {
  const UNITS = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
  const RETURN_UNITS = {
    'gal': 'L',
    'L': 'gal',
    'mi': 'km',
    'km': 'mi',
    'lbs': 'kg',
    'kg': 'lbs'
  };
  const SPELLED_UNITS = {
    'gal': 'gallons',
    'L': 'liters',
    'mi': 'miles',
    'km': 'kilometers',
    'lbs': 'pounds',
    'kg': 'kilograms'
  };
  
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
    let i = 0;
    while (!isNaN(Number(input.charAt(i))) || input.charAt(i) === '/' || input.charAt(i) === '.') {
      i++;
    }
    result = input.substring(i);
    for (let unit of UNITS) {
      if (unit.toLowerCase() === result.toLowerCase()) {
        return unit;
      }
    }
    return "invalid unit";
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = RETURN_UNITS[initUnit]
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result = SPELLED_UNITS[unit];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    let result;
    
    switch(initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
    }    
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

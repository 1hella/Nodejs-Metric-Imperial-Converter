'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    if (initUnit === 'invalid unit' && initNum === "invalid number") {
      res.send('invalid number and unit');
      return;
    } else if (initNum === "invalid number") {
      res.send('invalid number');
      return;
    } else if (initUnit === "invalid unit") {
      res.send('invalid unit');
      return;
    }
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnString = convertHandler.getString(initNum,  initUnit, returnNum, returnUnit);
    res.send({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      "string": returnString
    });
  });

};

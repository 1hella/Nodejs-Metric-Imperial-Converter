const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('convertHandler should correctly read a whole number input', function () {
        let testInput = "15ml";
        let result = convertHandler.getNum(testInput);
        assert.isNotNull(result);
        assert.isNotNaN(result);
        assert.isDefined(result);
        assert.isOk(result);
        assert.isNumber(result);
        assert.strictEqual(result, 15);
    });

    test('convertHandler should correctly read a decimal number input', function () {
        let testInput = "15.5ml";
        let result = convertHandler.getNum(testInput);
        assert.isNotNull(result);
        assert.isNotNaN(result);
        assert.isDefined(result);
        assert.isOk(result);
        assert.isNumber(result);
        assert.strictEqual(result, 15.5);
    });

    test('convertHandler should correctly read a fractional input', function () {
        let testInput = "15/5ml";
        let result = convertHandler.getNum(testInput);
        assert.isNotNull(result);
        assert.isNotNaN(result);
        assert.isDefined(result);
        assert.isOk(result);
        assert.isNumber(result);
        assert.strictEqual(result, 3);
    });

    test('convertHandler should correctly read a fractional input with a decimal', function() {
        let testInput = "14.23/2.34567gal"
        let result = convertHandler.getNum(testInput);
        assert.isNotNull(result);
        assert.isNotNaN(result);
        assert.isDefined(result);
        assert.isOk(result);
        assert.isNumber(result);
        assert.approximately(result, 6.066496992330549, 0.001);
    });

    test('convertHandler should correctly return an error on a double-fraction', function() {
        let testInput = "3/2/3gal"
        let result = convertHandler.getNum(testInput);
        assert.isNotNull(result);
        assert.isNotNaN(result);
        assert.isDefined(result);
        assert.isOk(result);
        assert.isString(result);
        assert.deepEqual(result, "invalid number");
    });

    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', function() {
        let testInput = "kg";
        let result = convertHandler.getNum(testInput);
        assert.isNotNull(result);
        assert.isNotNaN(result);
        assert.isDefined(result);
        assert.isOk(result);
        assert.isNumber(result);
        assert.deepEqual(result, 1)
    });
});
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
});
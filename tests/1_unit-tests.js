const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('Numbers', function() {
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

        test('convertHandler should correctly read a fractional input with a decimal', function () {
            let testInput = "14.23/2.34567gal"
            let result = convertHandler.getNum(testInput);
            assert.isNotNull(result);
            assert.isNotNaN(result);
            assert.isDefined(result);
            assert.isOk(result);
            assert.isNumber(result);
            assert.approximately(result, 6.066496992330549, 0.001);
        });

        test('convertHandler should correctly return an error on a double-fraction', function () {
            let testInput = "3/2/3gal"
            let result = convertHandler.getNum(testInput);
            assert.isNotNull(result);
            assert.isNotNaN(result);
            assert.isDefined(result);
            assert.isOk(result);
            assert.isString(result);
            assert.deepEqual(result, "invalid number");
        });

        test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', function () {
            let testInput = "kg";
            let result = convertHandler.getNum(testInput);
            assert.isNotNull(result);
            assert.isNotNaN(result);
            assert.isDefined(result);
            assert.isOk(result);
            assert.isNumber(result);
            assert.deepEqual(result, 1)
        });

        test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', function () {
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

    suite('Units', function() {
        test('convertHandler should correctly read each valid input unit', function() {
            let testInput = "10L";
            let result = convertHandler.getUnit(testInput);
            assert.isNotNull(result);
            assert.isNotNaN(result);
            assert.isDefined(result);
            assert.isOk(result);
            assert.isString(result);
            assert.deepEqual(result, 'L');

            testInput = '1.1gal';
            result = convertHandler.getUnit(testInput);
            assert.deepEqual(result, 'gal');

            testInput = '1/2mi';
            result = convertHandler.getUnit(testInput);
            assert.deepEqual(result, 'mi');

            testInput = '1.2/3km';
            result = convertHandler.getUnit(testInput);
            assert.deepEqual(result, 'km');

            testInput = 'lbs';
            result = convertHandler.getUnit(testInput);
            assert.deepEqual(result, 'lbs');

            testInput = '0kg';
            result = convertHandler.getUnit(testInput);
            assert.deepEqual(result, 'kg');
        });

        test('convertHandler should correctly return an error for an invalid input unit', function() {
            let testInput = "10GaLlll";
            let result = convertHandler.getUnit(testInput);
            assert.isNotNull(result);
            assert.isNotNaN(result);
            assert.isDefined(result);
            assert.isOk(result);
            assert.isString(result);
            assert.deepEqual(result, 'invalid unit');
        });

        test('convertHandler should return the correct return unit for each valid input unit', function() {
            let testInput = 'L';
            let result = convertHandler.getReturnUnit(testInput);
            assert.deepEqual(result, 'gal');

            testInput = 'gal';
            result = convertHandler.getReturnUnit(testInput);
            assert.deepEqual(result, 'L');
            
            testInput = 'mi';
            result = convertHandler.getReturnUnit(testInput);
            assert.deepEqual(result, 'km');
            
            testInput = 'km';
            result = convertHandler.getReturnUnit(testInput);
            assert.deepEqual(result, 'mi');
            
            testInput = 'lbs';
            result = convertHandler.getReturnUnit(testInput);
            assert.deepEqual(result, 'kg');
            
            testInput = 'kg';
            result = convertHandler.getReturnUnit(testInput);
            assert.deepEqual(result, 'lbs');
        });

        test('convertHandler should correctly return the spelled-out string unit for each valid input unit.', function () {
            let testInput = 'L';
            let result = convertHandler.spellOutUnit(testInput);
            assert.deepEqual(result, 'liters');

            testInput = 'gal';
            result = convertHandler.spellOutUnit(testInput);
            assert.deepEqual(result, 'gallons');

            testInput = 'mi';
            result = convertHandler.spellOutUnit(testInput);
            assert.deepEqual(result, 'miles');

            testInput = 'km';
            result = convertHandler.spellOutUnit(testInput);
            assert.deepEqual(result, 'kilometers');

            testInput = 'lbs';
            result = convertHandler.spellOutUnit(testInput);
            assert.deepEqual(result, 'pounds');

            testInput = 'kg';
            result = convertHandler.spellOutUnit(testInput);
            assert.deepEqual(result, 'kilograms');
        });
    });
});
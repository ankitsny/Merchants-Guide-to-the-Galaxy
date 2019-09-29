"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RomanNumber_1 = require("./RomanNumber");
var RomanSymbol_1 = require("./RomanSymbol");
var romanSymbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};
var RomanNumberBuilder = /** @class */ (function () {
    function RomanNumberBuilder(romanNumber) {
        if (romanNumber === void 0) { romanNumber = new RomanNumber_1.RomanNumber(); }
        this.romanNumber = romanNumber;
        // @ts-ignore
        this.romanNumber.setSymbols(Object.keys(romanSymbols).map(function (key) { return new RomanSymbol_1.RomanSymbol(key, romanSymbols[key]); }));
    }
    RomanNumberBuilder.prototype.build = function () {
        return this.romanNumber;
    };
    return RomanNumberBuilder;
}());
exports.RomanNumberBuilder = RomanNumberBuilder;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RomanSymbol = /** @class */ (function () {
    function RomanSymbol(symbol, value, alias) {
        this._alias = "";
        this._symbol = symbol;
        this._value = value;
        this._alias = alias || "";
    }
    RomanSymbol.prototype.getSymbol = function () {
        return this._symbol;
    };
    RomanSymbol.prototype.setSymbol = function (s) {
        this._symbol = s;
    };
    RomanSymbol.prototype.getValue = function () {
        return this._value;
    };
    RomanSymbol.prototype.setValue = function (v) {
        this._value = v;
    };
    RomanSymbol.prototype.getAlias = function () {
        return this._alias;
    };
    RomanSymbol.prototype.setAlias = function (a) {
        this._alias = a;
    };
    return RomanSymbol;
}());
exports.RomanSymbol = RomanSymbol;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RomanNumber = /** @class */ (function () {
    function RomanNumber() {
        this._symbols = [];
    }
    RomanNumber.prototype.getSymbols = function () {
        return this._symbols;
    };
    RomanNumber.prototype.setSymbols = function (s) {
        this._symbols = s;
    };
    RomanNumber.prototype.getSymbolFromAlias = function (alias) {
        var sym = "";
        var flag = this.getSymbols().some(function (symbol) {
            if (symbol.getAlias() === alias) {
                sym = symbol.getSymbol();
                return true;
            }
        });
        return flag ? [sym, null] : [null, new Error("alias not found!")];
    };
    RomanNumber.prototype.getAliasFromSymbol = function (symbol) {
        var alias = "";
        var flag = this.getSymbols().some(function (_symbol) {
            if (_symbol.getSymbol() === symbol) {
                alias = _symbol.getAlias();
                return true;
            }
        });
        return flag ? [alias, null] : [null, new Error("symbol not found!")];
        // return alias;
    };
    RomanNumber.prototype.getValueFromAlias = function (alias) {
        var value = 0;
        var flag = this.getSymbols().some(function (_symbol) {
            if (_symbol.getAlias() === alias) {
                value = _symbol.getValue();
                return true;
            }
        });
        return flag ? [value, null] : [null, new Error("alias not found!")];
    };
    RomanNumber.prototype.getValueFromSymbol = function (symbol) {
        var value = 0;
        var flag = this.getSymbols().some(function (_symbol) {
            if (_symbol.getSymbol() === symbol) {
                value = _symbol.getValue();
                return true;
            }
        });
        return flag ? [value, null] : [null, new Error("Symbol not found!")];
    };
    /**
     *
     * @param aliasSeq - alias sequence space separated, e.g. alias1 alias2 alias3
     */
    RomanNumber.prototype.getRomanFromAliasSequence = function (aliasSeq) {
        var _this = this;
        var romanSequence = "";
        var aliasSymbolMap = aliasSeq.split(" ").reduce(function (accu, alias) {
            if (alias in accu)
                return accu;
            var _a = _this.getSymbolFromAlias(alias), romanSym = _a[0], err = _a[1];
            if (err) {
                // alias not found
                // throw error or log it and continue
                console.log(err);
                return accu;
            }
            // @ts-ignore
            accu[alias] = romanSym;
            return accu;
        }, {});
        if (!aliasSeq
            .split(" ")
            .every(function (alias) { return alias in aliasSymbolMap; })) {
            return [null, new Error("Some of the alias is missing, please create alias first")];
        }
        romanSequence = aliasSeq.split(" ").map(function (alias) {
            // @ts-ignore
            return aliasSymbolMap[alias];
        }).join("");
        return [romanSequence, null];
    };
    RomanNumber.prototype.setAlias = function (symbol, alias) {
        this.getSymbols().some(function (_sym) {
            if (_sym.getSymbol() === symbol) {
                _sym.setAlias(alias);
                return true;
            }
            return false;
        });
    };
    RomanNumber.prototype.toDecimal = function (roman) {
        var _a;
        if (!roman)
            return [null, new Error("Invalid Roman Number")];
        var _b = this.getValueFromSymbol(roman.charAt(0)), num = _b[0], err = _b[1];
        if (err)
            return [null, err];
        var pre, curr;
        for (var i = 1; i < roman.length; i++) {
            // @ts-ignore
            _a = this.getValueFromSymbol(roman.charAt(i)), curr = _a[0], err = _a[1];
            if (err)
                return [null, err];
            // @ts-ignore
            pre = this.getValueFromSymbol(roman.charAt(i - 1))[0];
            if (curr <= pre) {
                // @ts-ignore
                num += curr;
            }
            else {
                // @ts-ignore
                num = num - pre * 2 + curr;
            }
        }
        return [num, null];
    };
    return RomanNumber;
}());
exports.RomanNumber = RomanNumber;

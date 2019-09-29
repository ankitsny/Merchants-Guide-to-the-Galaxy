"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AliasSymbol = /** @class */ (function () {
    function AliasSymbol() {
        this.opName = "CREATE_ALIAS";
    }
    AliasSymbol.create = function () {
        return new AliasSymbol();
    };
    AliasSymbol.prototype.pasre = function (args) {
        // glob is I
        throw new Error("Method not implemented.");
    };
    AliasSymbol.prototype.execute = function (args) {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(AliasSymbol.prototype, "operationName", {
        get: function () {
            return this.opName;
        },
        enumerable: true,
        configurable: true
    });
    return AliasSymbol;
}());
exports.AliasSymbol = AliasSymbol;

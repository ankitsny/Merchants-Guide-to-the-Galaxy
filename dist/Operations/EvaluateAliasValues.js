"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EvaluateAliasValues = /** @class */ (function () {
    function EvaluateAliasValues() {
        this.opName = "EVALUATE_SYMBOL";
    }
    EvaluateAliasValues.create = function () {
        return new EvaluateAliasValues();
    };
    EvaluateAliasValues.prototype.pasre = function (args) {
        throw new Error("Method not implemented.");
    };
    EvaluateAliasValues.prototype.execute = function (args) {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(EvaluateAliasValues.prototype, "operationName", {
        get: function () {
            return this.opName;
        },
        enumerable: true,
        configurable: true
    });
    return EvaluateAliasValues;
}());
exports.EvaluateAliasValues = EvaluateAliasValues;

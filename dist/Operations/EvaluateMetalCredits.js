"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EvaluateMetalCredits = /** @class */ (function () {
    function EvaluateMetalCredits() {
        this.opName = "EVALUATE_METAL_CREDIT";
    }
    EvaluateMetalCredits.create = function () {
        return new EvaluateMetalCredits();
    };
    EvaluateMetalCredits.prototype.pasre = function (args) {
        throw new Error("Method not implemented.");
    };
    EvaluateMetalCredits.prototype.execute = function (args) {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(EvaluateMetalCredits.prototype, "operationName", {
        get: function () {
            return this.opName;
        },
        enumerable: true,
        configurable: true
    });
    return EvaluateMetalCredits;
}());
exports.EvaluateMetalCredits = EvaluateMetalCredits;

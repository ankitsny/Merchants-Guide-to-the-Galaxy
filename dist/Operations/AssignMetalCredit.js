"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AssignMetalCredit = /** @class */ (function () {
    function AssignMetalCredit() {
        this.opName = "ASSIGN_METAL_CREDIT";
    }
    AssignMetalCredit.create = function () {
        return new AssignMetalCredit();
    };
    AssignMetalCredit.prototype.pasre = function (args) {
        throw new Error("Method not implemented.");
    };
    AssignMetalCredit.prototype.execute = function (args) {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(AssignMetalCredit.prototype, "operationName", {
        get: function () {
            return this.opName;
        },
        enumerable: true,
        configurable: true
    });
    return AssignMetalCredit;
}());
exports.AssignMetalCredit = AssignMetalCredit;

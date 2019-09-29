"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Help_1 = require("./Help");
var EvaluateMetalCredits_1 = require("./EvaluateMetalCredits");
var AssignMetalCredit_1 = require("./AssignMetalCredit");
var EvaluateAliasValues_1 = require("./EvaluateAliasValues");
var AliasSymbol_1 = require("./AliasSymbol");
var OperationManager = /** @class */ (function () {
    function OperationManager() {
        this.operationStore = {};
    }
    OperationManager.newOperationManger = function () {
        var operationManager = new OperationManager();
        operationManager.addOperation(Help_1.Help.create());
        operationManager.addOperation(EvaluateMetalCredits_1.EvaluateMetalCredits.create());
        operationManager.addOperation(AssignMetalCredit_1.AssignMetalCredit.create());
        operationManager.addOperation(EvaluateAliasValues_1.EvaluateAliasValues.create());
        operationManager.addOperation(AliasSymbol_1.AliasSymbol.create());
        // INFO: register other operation here
        return operationManager;
    };
    OperationManager.prototype.parse = function (input) {
        // TODO:
        return null;
    };
    OperationManager.prototype.addOperation = function (operation) {
        this.operationStore[operation.operationName] = operation;
    };
    OperationManager.prototype.execute = function (input) {
        // TODO: parse the input to perform the operation
        return this.operationStore[input].execute(input);
    };
    return OperationManager;
}());
exports.OperationManager = OperationManager;

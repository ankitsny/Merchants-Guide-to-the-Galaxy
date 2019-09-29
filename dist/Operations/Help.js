"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Help = /** @class */ (function () {
    function Help() {
        this.opName = "HELP";
    }
    Help.create = function () {
        return new Help();
    };
    Help.prototype.pasre = function (args) {
        throw new Error("Method not implemented.");
    };
    Help.prototype.execute = function (args) {
        return [
            "Commands Available: ",
            "1. [Alias Name] is I",
            "\tAll Roman Symbols, can be used to set alias for the Roman Symbols",
            "\tUSAGE: 'ALIAS_NAME is X', now the alisa 'ALIAS_NAME' will be treated as 'X'",
            "",
            "2. [glob]...[aliasN] [Silver] is [34] Credits",
            "\tThis command can be used to assign the worth of a Metal",
            "\tUSAGE: 'glob Gold is 100 Credits'",
            "",
            "3. how much is [pish] [tegj] [glob] [glob] ?",
            "\t This command will evaluate the Roman Alias to Decimal Number",
            "",
            "4. how many Credits is [glob] [prok] [METAL] ?",
            "\tThis command return the worth of the metal",
            ""
        ].join("\n");
    };
    Object.defineProperty(Help.prototype, "operationName", {
        get: function () {
            return this.opName;
        },
        enumerable: true,
        configurable: true
    });
    return Help;
}());
exports.Help = Help;

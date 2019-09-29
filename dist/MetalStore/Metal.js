"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Metal = /** @class */ (function () {
    function Metal(name, worth) {
        this.name = name;
        this.worth = worth;
    }
    Metal.prototype.getName = function () {
        return this.name;
    };
    Metal.prototype.setName = function (name) {
        this.name = name;
    };
    Metal.prototype.getWorth = function () {
        return this.worth;
    };
    Metal.prototype.setWorth = function (worth) {
        this.worth = worth;
    };
    return Metal;
}());
exports.Metal = Metal;

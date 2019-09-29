"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RomanNumberBuilder_1 = require("./RomanNumberBuilder");
(function T() {
    var x = new RomanNumberBuilder_1.RomanNumberBuilder();
    var rs = x.build();
    rs.setAlias("I", "ANKSO");
    console.log(rs.getSymbolFromAlias("ANKSO"));
})();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileOperationMode_1 = require("./OperationMode/FileOperationMode");
var OperationManager_1 = require("./Operations/OperationManager");
// export abstract class MetalFactory {
//   getWorth(): number {
//     return 1;
//   }
//   abstract create(name: string, value: string): number;
// }
// export class Metal implements MetalFactory {
//   create(name: string, value: number): number {
//     return 1;
//   }
// }
(function init() {
    var operationManger = OperationManager_1.OperationManager.newOperationManger();
    new FileOperationMode_1.FileOperationMode("./help", operationManger).run();
    console.log(process.argv);
})();

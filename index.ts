import { FileOperationMode } from "./OperationMode/FileOperationMode";
import { IOperationManager } from "./Operations/IOperationManager";
import { OperationManager } from "./Operations/OperationManager";

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
  const operationManger: IOperationManager = OperationManager.newOperationManger();
  new FileOperationMode("./help", operationManger).run();
  // console.log(process.argv);
})();

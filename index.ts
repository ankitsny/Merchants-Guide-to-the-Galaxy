import { FileOperationMode } from "./src/OperationMode/FileOperationMode";
import { IOperationManager } from "./src/Operations/IOperationManager";
import { OperationManager } from "./src/Operations/OperationManager";



(function init() {
  const operationManger: IOperationManager = OperationManager.newOperationManger();
  new FileOperationMode("./help", operationManger).run();
  // console.log(process.argv);
})();

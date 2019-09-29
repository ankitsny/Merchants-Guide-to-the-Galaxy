import { FileOperationMode } from "./src/OperationMode/FileOperationMode";
import { IOperationManager } from "./src/Operations/IOperationManager";
import { OperationManager } from "./src/Operations/OperationManager";



(function init() {
  const operationManger: IOperationManager = OperationManager
    .newOperationManger();

  // TODO: load the allpication based on mode user wants

  new FileOperationMode(process.argv[2] || "default-input.txt",
    operationManger).run();
})();

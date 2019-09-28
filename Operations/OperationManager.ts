import { IOperationManager } from "../interfaces/IOperationManager";
import { IOperation } from "../interfaces/IOperation";
import { IOperationMap } from "../interfaces/IOperationMap";
import { Help } from "./Help";
import { EvaluateMetalCredits } from "./EvaluateMetalCredits";
import { AssignMetalCredit } from "./AssignMetalCredit";
import { EvaluateAliasValues } from "./EvaluateAliasValues";
import { AliasSymbol } from "./AliasSymbol";

export class OperationManager implements IOperationManager {
  private operationStore: IOperationMap = {};

  static newOperationManger(): IOperationManager {
    const operationManager = new OperationManager();

    operationManager.addOperation(Help.create());
    operationManager.addOperation(EvaluateMetalCredits.create());
    operationManager.addOperation(AssignMetalCredit.create());
    operationManager.addOperation(EvaluateAliasValues.create());
    operationManager.addOperation(AliasSymbol.create());

    // INFO: register other operation here

    return operationManager;
  }

  parse(input: string): Error | null {
    // TODO:
    return null;
  }

  addOperation(operation: IOperation) {
    this.operationStore[operation.operationName] = operation;
  }

  execute(input: string): string {
    // TODO: parse the input to perform the operation
    return this.operationStore[input].execute(input);
  }
}

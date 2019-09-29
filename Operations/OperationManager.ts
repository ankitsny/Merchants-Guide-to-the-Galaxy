import { IOperationManager } from "./IOperationManager";
import { IOperation } from "./IOperation";
import { IOperationMap } from "./IOperationMap";
import { Help } from "./Help";
import { EvaluateMetalCredits } from "./EvaluateMetalCredits";
import { AssignMetalCredit } from "./AssignMetalCredit";
import { EvaluateAliasValues } from "./EvaluateAliasValues";
import { AliasSymbol } from "./AliasSymbol";
import { InvalidOperation } from "./InvalidOPeration";


interface TT {
  [index: number]: IOperation
}

const operations = [
  Help,
  EvaluateMetalCredits,
  AssignMetalCredit,
  EvaluateAliasValues,
  AliasSymbol,
  InvalidOperation
]

export class OperationManager implements IOperationManager {
  private operationStore: IOperationMap = {};
  private currentCMD!: string;

  static newOperationManger(): IOperationManager {

    const operationManager = new OperationManager();

    operations.forEach((op) => operationManager.addOperation(op.create()));

    // operationManager.addOperation(Help.create());
    // operationManager.addOperation(EvaluateMetalCredits.create());
    // operationManager.addOperation(AssignMetalCredit.create());
    // operationManager.addOperation(EvaluateAliasValues.create());
    // operationManager.addOperation(AliasSymbol.create());

    // INFO: register other operation here

    return operationManager;
  }

  parse(input: string): Error | null {
    // TODO:
    for (let i = 0; i < operations.length; i++) {
      if (operations[i].checkCMD(input)) {
        this.currentCMD = operations[i].CMDName;
        return null;
      }
    }
    this.currentCMD = InvalidOperation.CMDName;
    return null;
  }

  addOperation(operation: IOperation) {
    this.operationStore[operation.operationName] = operation;
  }

  execute(input: string): string {
    // TODO: parse the input to perform the operation
    this.parse(input);
    return this.operationStore[this.currentCMD].execute(input);
  }
}

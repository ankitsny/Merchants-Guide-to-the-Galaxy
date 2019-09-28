import { IOperation } from "./IOperation";

export interface IOperationManager {
  parse(input: string): Error | null;
  addOperation(operation: IOperation): any;
  execute(input: string): string;
}

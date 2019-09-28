import { IOperation } from "../interfaces/IOperation";

export class EvaluateAliasValues implements IOperation {
  private opName: string = "EVALUATE_SYMBOL";

  static create(): IOperation {
    return new EvaluateAliasValues();
  }

  pasre(args: string): Error {
    throw new Error("Method not implemented.");
  }
  execute(args: string): string {
    throw new Error("Method not implemented.");
  }

  public get operationName(): string {
    return this.opName;
  }
}

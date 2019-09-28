import { IOperation } from "../interfaces/IOperation";

export class AliasSymbol implements IOperation {
  opName: string = "CREATE_ALIAS";

  static create(): IOperation {
    return new AliasSymbol();
  }

  pasre(args: string): Error {
    // glob is I
    throw new Error("Method not implemented.");
  }
  execute(args: string): string {
    throw new Error("Method not implemented.");
  }
  public get operationName(): string {
    return this.opName;
  }
}

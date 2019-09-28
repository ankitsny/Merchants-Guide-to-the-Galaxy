import { IOperation } from "../interfaces/IOperation";

export class AssignMetalCredit implements IOperation {
  opName: string = "ASSIGN_METAL_CREDIT";

  static create(): IOperation {
    return new AssignMetalCredit();
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

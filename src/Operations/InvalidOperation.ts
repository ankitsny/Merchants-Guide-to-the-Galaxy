import { IOperation } from "./IOperation";

export class InvalidOperation implements IOperation {
  static CMDName: string = "INVALID_OPERATION";

  static create(): IOperation {
    return new InvalidOperation();
  }

  static checkCMD(cmd: string): boolean {
    return false;
  }

  pasre(args: string): Error {
    throw new Error("Method not implemented.");
  }

  execute(args: string): string {
    return [
      "I have no idea what you are talking about"
    ].join("\n");
  }

  public get operationName(): string {
    return InvalidOperation.CMDName;
  }
}

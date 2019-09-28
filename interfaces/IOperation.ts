export interface IOperation {
  operationName: string;

  pasre(args: string): Error;
  execute(args: string): string;
}

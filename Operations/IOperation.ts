export interface IOperation {
  operationName: string;

  pasre(args: string): Error | undefined;
  execute(args: string): string;
}

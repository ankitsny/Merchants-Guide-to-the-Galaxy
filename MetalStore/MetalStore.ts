
export class MetalStore {
  private store: Map<string, number>
  constructor() {
    this.store = new Map<string, number>()
  }
  set(key: string, value: number) {
    this.store.set(key, value);
  }
  get(key: string): number | undefined {
    return this.store.get(key)
  }
  has(key: string): boolean {
    return this.store.has(key);
  }
}
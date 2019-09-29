import { MetalStore } from "./MetalStore"
describe("Metal Store", () => {
  let metalStore: MetalStore
  beforeEach(() => {
    metalStore = new MetalStore()
  });

  test("#Set and has", () => {
    metalStore.set("Gold", 1000)
    expect(metalStore.has("Gold")).toEqual(true);
  })

  test("#Get", () => {
    metalStore.set("Gold", 1000)
    expect(metalStore.get("Gold")).toEqual(1000);
  })
})
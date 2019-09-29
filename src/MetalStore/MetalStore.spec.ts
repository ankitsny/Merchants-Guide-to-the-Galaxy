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

  test("#getWorth", () => {
    metalStore.set("Gold", 5);
    expect(metalStore.getWorth("Gold", 4)).toEqual(20)
  })

  test("#getWorth", () => {
    metalStore.set("Gold", 5);
    expect(metalStore.getWorth("Silver", 4)).toEqual(undefined)
  })
})
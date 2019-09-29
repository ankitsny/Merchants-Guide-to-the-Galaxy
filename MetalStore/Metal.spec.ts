import { IMetal } from "./IMetal"
import { Metal } from "./Metal";

describe("Metal Class", () => {
  let metal: IMetal;
  beforeAll(() => {
    metal = new Metal("Gold", 38000)
  });

  test("#getName", () => {
    metal.setName("Gold")
    expect(metal.getName()).toEqual("Gold")
  })

  test("#setName", () => {
    metal.setName("Silver")
    expect(metal.getName()).toEqual("Silver")
  })

  test("#getWorth and #setWorth", () => {
    metal.setWorth(1000)
    expect(metal.getWorth()).toEqual(1000)
  })


})
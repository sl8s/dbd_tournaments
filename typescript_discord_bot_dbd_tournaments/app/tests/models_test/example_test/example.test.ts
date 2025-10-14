import { expect, test, describe } from "vitest"

describe("sum function", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(2+1).toBe(3);
  });
  
  test("adds 0 + 0 to equal 0", () => {
    expect(0 + 0).toBe(0);
  });
  
  test("adds -1 + 1 to equal 0", () => {
    expect(-1+1).toBe(0);
  });
});
  
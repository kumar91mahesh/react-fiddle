import { sum } from "../sum"

test("Sum function should calculate sum of two number", ()=> {
    const result = sum(1,2);
    expect(result).toBe(3);
})
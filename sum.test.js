import sum from "./sum.js";


describe("test all sum fun",()=>{
test("adds 2 +2 is equal 4",()=>{
    expect(sum(2,2)).toBe(4)
})
test("adds -5 + -5 is equal -10",()=>{
    expect(sum(-5,-5)).toBe(-10)
})
test("adds -10 + -10 is equal -10",()=>{
    expect(sum(-10,-10)).toBe(-20)
})
})
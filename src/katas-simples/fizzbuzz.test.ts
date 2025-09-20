import {describe, test, expect} from 'vitest';
import { fizzBuzz } from './fizzbuzz';


describe("FizzBuzz", () => {	
	test("given a number divisible by 3, should return Fizz", () =>{
        const result = fizzBuzz(3)
        expect(result).toBe("Fizz")
    })
	test("given a number divisible by 5, should return Buzz", () =>{
        const result = fizzBuzz(5)
        expect(result).toBe("Buzz")
    })
    test("given a number divisible by 3 and 5, should return FizzBuzz", () =>{
        const result = fizzBuzz(15)
        expect(result).toBe("FizzBuzz")
    })
    test("given a number that is not divisible by 3 or 5, should return the same number", () =>{
        const result = fizzBuzz(7)
        expect(result).toBe(7)
    })
})

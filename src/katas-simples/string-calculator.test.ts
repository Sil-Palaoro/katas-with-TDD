import {describe, test, expect} from 'vitest';
import {add} from './string-calculator';

describe("String calculator", () => {
    test("given a string with the numbers '1, 2 and 3', should return 6", () => {
        const result = add("1, 2, 3");
        expect(result).toBe(6);
    })
    
    test("given a string with the numbers 'a, b, c,...x', should return the sum of those numbers", () => {
        const result = add("3, 7, 2, 58, 4, 9, 134, 26");
        expect(result).toBe(243);
    })
    
    test("given a string with positive and negative numbers 'a, b, c,...x', should return the sum of those numbers", () => {
        const result = add("-3, -7, -2, 6, 9, -22, 3");
        expect(result).toBe(-16);
    })

    test("given a string with floating numbers, should return the sum of the numbers", () => {
        const result = add("0.2554, 0.457, 0.6556");
        expect(result).toBe(1.38);
    })
})
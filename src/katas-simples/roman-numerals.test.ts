import { describe, test, expect } from 'vitest';
import { vi } from 'vitest';
import { toRoman } from './roman-numerals';

//Las equivalencias en números romanos son: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500 y M = 1000


describe("Roman Numerals", () => {	
	test("given the number '1', should return 'I'", () =>{       
        const result = toRoman(1);
        expect(result).toBe("I"); 
    })

    test("given the number '5', should return 'V'", () =>{       
        const result = toRoman(5);
        expect(result).toBe("V"); 
    })

//     test("given the number '10', should return 'X'", () =>{       
//         const result = toRoman(10);
//         expect(result).toBe("X"); 
//     })

//     test("given the number '50', should return 'L'", () =>{       
//         const result = toRoman(50);
//         expect(result).toBe("L"); 
//     })

//     test("given the number '100', should return 'C'", () =>{       
//         const result = toRoman(100);
//         expect(result).toBe("C"); 
//     })

//     test("given the number '500', should return 'D'", () =>{       
//         const result = toRoman(500);
//         expect(result).toBe("D"); 
//     })

//     test("given the number '1000', should return 'M'", () =>{       
//         const result = toRoman(1000);
//         expect(result).toBe("M"); 
//     })

    test("given the number '2', should return 'II'", () =>{       
        const result = toRoman(2);
        expect(result).toBe("II"); 
    })

    test("given the number '3', should return 'III'", () =>{       
        const result = toRoman(3);
        expect(result).toBe("III"); 
    })

    test("given the number '4', should return 'IV'", () =>{       
        const result = toRoman(4);
        expect(result).toBe("IV"); 
    })

    test("given the number '6', should return 'VI'", () =>{       
        const result = toRoman(6);
        expect(result).toBe("VI"); 
    })

   test("given the number '7', should return 'VII'", () =>{       
        const result = toRoman(7);
        expect(result).toBe("VII"); 
    })

    test("given the number '8', should return 'VIII'", () =>{       
        const result = toRoman(8);
        expect(result).toBe("VIII"); 
    })

    test("given the number '9', should return 'IX'", () =>{       
        const result = toRoman(9);
        expect(result).toBe("IX"); 
    })

    test("given one number, the console should log the number of digits of that number", () =>{       
        const consoleSpy = vi.spyOn(console, 'log')
        toRoman(123);
        expect(consoleSpy).toHaveBeenCalledWith(3); 
    })

    // test("given the number '1994', should return 'MCMXCIV'", () =>{       
    //     // const result = toRoman(1994);
    //     // expect(result).toBe("MCMXCIV"); 
    // })
})
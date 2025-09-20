// Implementá una función llamada toRoman que tome un número entero como entrada y devuelva su representación en números romanos.
// Un ejemplo de uso sería:

// const result = toRoman(1994)
//       ^ "M CM XC IV"

//Las equivalencias en números romanos son: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500 y M = 1000


type ToRoman = (number: number) => string

interface Units {
    numberOfDigits: 1;
    number: number;
}

interface Tens {
    numberOfDigits: 2;
    number: number;
    numberArray: string[];
}

interface Hundreds {
    numberOfDigits: 3;
    number: number;
}

interface Thousands {
    numberOfDigits: 4;
    number: number;
}

type DecimalNumber = Units | Tens | Hundreds | Thousands;

const RomanEquivalent = {
    one: "I",
    five: "V",
    ten: "X",
    fifty: "L",
    oneHundred: "C",
    fiveHundred: "D",
    oneThousand: "M",
} as const;

type RomanEquivalentType = typeof RomanEquivalent [keyof typeof RomanEquivalent];     

const one: RomanEquivalentType = RomanEquivalent.one;
const five: RomanEquivalentType = RomanEquivalent.five;
const ten: RomanEquivalentType = RomanEquivalent.ten;
const fifty: RomanEquivalentType = RomanEquivalent.fifty;
const oneHundred: RomanEquivalentType = RomanEquivalent.oneHundred;
const fiveHundred: RomanEquivalentType = RomanEquivalent.fiveHundred;
const oneThousand: RomanEquivalentType = RomanEquivalent.oneThousand;


const unitNumber = (number: number): string =>{
    let result = "";

    if (number < 4) {        
        let i=0
        while (i < number) {
            i++
            result += one
        }
        return result;
    }
    if (number == 4) {
        result = one + five
        return result
    }
    if (number == 5) {
        return five;
    }
    if (number > 5 && number < 9) {        
        let i=6;
        let units = "";
        while (i<= number) {           
            units += one;               
            i++;            
        }
        result = five + units;

        return result;
    }
    if (number == 9) {
        result = one + ten
        return result
    }
    return "";
}

const tensNumber = (numberArray: string[]): string =>{
    const ones = unitNumber(Number(numberArray[1]));
    let tensDigit = Number(numberArray[0])

    const tensFunction = (tensDigit: number) => {
        let result = "";

        if (tensDigit < 4) {        
        let i=0
        while (i < tensDigit) {
            i++
            result += ten
        }
        return result;
        }
        if (tensDigit == 4) {
            result = ten + fifty
            return result
        }
        if (tensDigit == 5) {
            return fifty;
        }
        if (tensDigit > 5 && tensDigit < 9) {        
            let i=6;
            let units = "";
            while (i<= tensDigit) {           
                units += ten;               
                i++;            
            }
            result = fifty + units;

            return result;
        }
        if (tensDigit == 9) {
            result = ten + oneHundred
            return result
        }
        return "";
    }
    
    const tens = tensFunction(tensDigit);

    const total = tens + ones;


    return total;
}

const hundredNumber = (number: number): string =>{
    return "";
}

const thousandNumber = (number: number): string =>{
    return "";
}



export const toRoman: ToRoman = (number: number): string => {

    const numberArray: string[] = (number).toString().split("");
    const numberOfDigits: number = numberArray.length;

    const numberObject: DecimalNumber = {
        numberOfDigits: numberOfDigits as DecimalNumber["numberOfDigits"],
        number: number,
        numberArray: numberArray,
    }

    console.log(numberOfDigits);

    switch (numberObject.numberOfDigits) {
        case 1:
            return unitNumber(numberObject.number);
        case 2:
            return tensNumber(numberObject.numberArray);
        case 3:
            return hundredNumber(numberObject.number);
        case 4:
            return thousandNumber(numberObject.number);
        default:
            const exhaustiveCheck: never = numberObject;
            return exhaustiveCheck;

    }

    // if (number.number < 4) {        
    //     let i=0
    //     while (i < number.number) {
    //         i++
    //         result += one
    //     }
    //     return result;
    // }
    // if (number == 4) {
    //     result = one + five
    //     return result
    // }
    // if (number == 5) {
    //     return five;
    // }
    // if (number > 5 && number < 9) {        
    //     let i=6;
    //     let units = "";
    //     while (i<= number) {           
    //         units += one;               
    //         i++;            
    //     }
    //     result = five + units;

    //     return result;
    // }
    // if (number == 9) {
    //     result = one + ten
    //     return result
    // }
    // if (number == 10) {
    //     return ten;
    // }
    // if (number == 50) {
    //     return fifty;
    // }
    // if (number == 100) {
    //     return oneHundred;
    // }
    // if (number == 500) {
    //     return fiveHundred;
    // }
    // if (number == 1000) {
    //     return oneThousand;
    // }
    // return result;
};







// Sugerencias de requerimientos adicionales
// ¿Qué sucede con números negativos, 0 y decimales?
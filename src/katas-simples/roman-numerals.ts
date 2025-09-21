// Implementá una función llamada toRoman que tome un número entero como entrada y devuelva su representación en números romanos.
// Un ejemplo de uso sería:

// const result = toRoman(1994)
//       ^ "M CM XC IV"

//Las equivalencias en números romanos son: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500 y M = 1000


// Nota: Esta implementación cubre números del 1 al 3999. Los números romanos tradicionalmente no tienen una representación estándar para números mayores a 3999.


type ToRoman = (number: number) => string

interface Units {
    numberOfDigits: 1;
    number: number;
    numberArray: string[];
}

interface Tens {
    numberOfDigits: 2;
    number: number;
    numberArray: string[];
}

interface Hundreds {
    numberOfDigits: 3;
    number: number;
    numberArray: string[];
}

interface Thousands {
    numberOfDigits: 4;
    number: number;
    numberArray: string[];
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


const unitFunction = (unitDigit: number): string => {
    let result = "";

    if (unitDigit < 4) {        
        let i=0
        while (i < unitDigit) {
            i++
            result += one
        }
        return result;
    }
    if (unitDigit == 4) {
        result = one + five
        return result
    }
    if (unitDigit == 5) {
        return five;
    }
    if (unitDigit > 5 && unitDigit < 9) {        
        let i=6;
        let units = "";
        while (i<= unitDigit) {           
            units += one;               
            i++;            
        }
        result = five + units;

        return result;
    }
    if (unitDigit == 9) {
        result = one + ten
        return result
    }
    return "";
};

const tenthsFunction = (tenthsDigit: number) => {
        let result = "";

        if (tenthsDigit < 4) {        
        let i=0
        while (i < tenthsDigit) {
            i++
            result += ten
        }
        return result;
        }
        if (tenthsDigit == 4) {
            result = ten + fifty
            return result
        }
        if (tenthsDigit == 5) {
            return fifty;
        }
        if (tenthsDigit > 5 && tenthsDigit < 9) {        
            let i=6;
            let units = "";
            while (i<= tenthsDigit) {           
                units += ten;               
                i++;            
            }
            result = fifty + units;

            return result;
        }
        if (tenthsDigit == 9) {
            result = ten + oneHundred
            return result
        }
        return "";
};


const hundredthFunction = (hundredthDigit: number) => {
        let result = "";

        if (hundredthDigit < 4) {        
        let i=0
        while (i < hundredthDigit) {
            i++
            result += oneHundred
        }
        return result;
        }
        if (hundredthDigit == 4) {
            result = oneHundred + fiveHundred
            return result
        }
        if (hundredthDigit == 5) {
            return fiveHundred;
        }
        if (hundredthDigit > 5 && hundredthDigit < 9) {        
            let i=6;
            let units = "";
            while (i<= hundredthDigit) {           
                units += oneHundred;               
                i++;            
            }
            result = fiveHundred + units;

            return result;
        }
        if (hundredthDigit == 9) {
            result = oneHundred + oneThousand
            return result
        }
        return "";
};


const thousandthFunction = (thousandthDigit: number) => {
        let result = "";

        if (thousandthDigit < 4) {        
        let i=0
        while (i < thousandthDigit) {
            i++
            result += oneThousand
        }
        return result;
        }
        
        return "";
};

const unitsNumber = (numberArray: string[]): string =>{
    const ones = unitFunction(Number(numberArray[0]));
    return ones;
}

const tensNumber = (numberArray: string[]): string =>{
    const ones = unitFunction(Number(numberArray[1]));
    const tens = tenthsFunction(Number(numberArray[0]));

    const total = tens + ones;
    return total;
}

const hundredNumber = (numberArray: string[]): string =>{
    const ones = unitFunction(Number(numberArray[2]));
    const tens = tenthsFunction(Number(numberArray[1]));
    const hundreds = hundredthFunction(Number(numberArray[0]))

    const total = hundreds + tens + ones;    
    return total;
}

const thousandNumber = (numberArray: string[]): string =>{
    const ones = unitFunction(Number(numberArray[3]));
    const tens = tenthsFunction(Number(numberArray[2]));
    const hundreds = hundredthFunction(Number(numberArray[1]));
    const thousands = thousandthFunction(Number(numberArray[0]));

    const total = thousands + hundreds + tens + ones;    
    return total;
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
            return unitsNumber(numberObject.numberArray);
        case 2:
            return tensNumber(numberObject.numberArray);
        case 3:
            return hundredNumber(numberObject.numberArray);
        case 4:
            return thousandNumber(numberObject.numberArray);
        default:
            const exhaustiveCheck: never = numberObject;
            return exhaustiveCheck;
    };
};



// Sugerencias de requerimientos adicionales
// ¿Qué sucede con números negativos, 0 y decimales?


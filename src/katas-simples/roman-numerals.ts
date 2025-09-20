// Implementá una función llamada toRoman que tome un número entero como entrada y devuelva su representación en números romanos.
// Un ejemplo de uso sería:

// const result = toRoman(1994)
//       ^ "MCMXCIV"

//Las equivalencias en números romanos son: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500 y M = 1000


type ToRoman = (number: number) => string



export const toRoman: ToRoman = (number: number): string => {
    const one = "I";
    const five = "V";
    const ten = "X";
    const fifty = "L";
    const oneHundred = "C";
    const fiveHundred = "D";
    const oneThousand = "M";
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
    if (number == 10) {
        return ten;
    }
    if (number == 50) {
        return fifty;
    }
    if (number == 100) {
        return oneHundred;
    }
    if (number == 500) {
        return fiveHundred;
    }
    if (number == 1000) {
        return oneThousand;
    }
    return result;
};







// Sugerencias de requerimientos adicionales
// ¿Qué sucede con números negativos, 0 y decimales?
// Implementá una función llamada toRoman que tome un número entero como entrada y devuelva su representación en números romanos.
// Un ejemplo de uso sería:

// const result = toRoman(1994)
//       ^ "MCMXCIV"

//Las equivalencias en números romanos son: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500 y M = 1000


type ToRoman = (number: number) => string

export const toRoman: ToRoman = (number: number): string => {
    const unidad = "I";
    const cinco = "V";
    const decena = "X";
    const cincuenta = "L";
    const centena = "C";
    const quinientos = "D";
    const mil = "M";

    if (number == 1) {        
        return unidad;
    }
    if (number == 5) {
        return cinco;
    }
    if (number == 10) {
        return decena;
    }
    if (number == 50) {
        return cincuenta;
    }
    if (number == 100) {
        return centena;
    }
    if (number == 500) {
        return quinientos;
    }
    return mil;
};



// if (number < 4) {
//         let result = "";
//         for(let i=0; i=number; i++){
//             result += unidad
//         }
//         return result;
//     }





// Sugerencias de requerimientos adicionales
// ¿Qué sucede con números negativos, 0 y decimales?
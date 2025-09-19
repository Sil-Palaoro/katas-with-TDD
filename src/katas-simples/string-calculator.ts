//Implementá una función simple llamada add, que toma un string como 
// entrada y devuelve la suma de los números contenidos en él.

//Un ejemplo de uso sería:

//const result = add("1,2,3")
      //^ "6"

type Add = (numbers: string) => number

export const add: Add = (numbers:string): number => {
      const stringArray: string[] = numbers.split(",")
      const numberArray: number[] = stringArray.map((value) => parseFloat(value))

      let totalSum = 0

      for(let i=0; i<numberArray.length; i++) {
            const fixedNumber = numberArray[i].toFixed(2);
            const floatFixedNumber = parseFloat(fixedNumber);
            totalSum += floatFixedNumber;
      }      
      
      return totalSum;
}


// Sugerencias de requerimientos adicionales
// Agregá soporte para números negativos.: Ya lo cumple

// Agregá soporte para números decimales: Ya lo cumple, con redondeo de 2 cifras

// Agregá soporte para diferentes delimitadores.
// Agregá soporte para números en notación científica.
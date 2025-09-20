//Implementá una función simple llamada add, que toma un string como 
// entrada y devuelve la suma de los números contenidos en él.

//Un ejemplo de uso sería:

//const result = add("1,2,3")
      //^ "6"

type Add = (numbers: string) => number

export const add: Add = (numbers:string): number => {
      const stringArray: string[] = numbers.split(/,|[/]/)
      const numberArray: number[] = stringArray.map((value) => parseFloat(value))

      let totalSum = 0

      for(let i=0; i<numberArray.length; i++) {
            const fixedNumber = numberArray[i].toFixed(2);
            const floatFixedNumber = parseFloat(fixedNumber);
            totalSum += floatFixedNumber;
      }      
      
      return totalSum;
}


// Sugerencias de requerimientos adicionales:
// Agregá soporte para números negativos.: Ya lo cumple

// Agregá soporte para números decimales: Ya lo cumple, con redondeo de 2 cifras.
//Primero pasa cada número del array de números a que tenga 2 cifras con toFixed(2), y luego se lo vuelve a pasar a float para poder sumarlos.

// Agregá soporte para diferentes delimitadores (estos pueden ser: "-", "/").: Pude agregar soporte para el delimitador "/". No pude agregar 
// soporte para el delimitador "-", porque al usarlo como separador, los números negativos se dividen en dos partes (el signo "-" y el número), y eso genera NaN al querer parsearlo a float.


// Agregá soporte para números en notación científica.
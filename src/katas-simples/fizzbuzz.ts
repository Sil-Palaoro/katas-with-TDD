export function fizzBuzz(number: number) {
    const isDivisible5 = number % 5 == 0;
	const isDivisible3 = number % 3 == 0;

    if (isDivisible3 && isDivisible5) return "FizzBuzz";  
	if (isDivisible3) return "Fizz";
    if (isDivisible5) return "Buzz";
	return number;
}


// Requerimientos adicionales
// Agregá soporte para números negativos.
// Agregá soporte para números decimales.
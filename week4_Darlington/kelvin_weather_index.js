const kelvin = 294;
// todays weather focast is set at 294

const celsius = kelvin - 273;
// here we converted kelvin into celsius
let fahrenheit = celsius * (9/5) + 32;
// here we will calculate the fahrenheit using the celsius
fahrenheit = Math.floor(fahrenheit);
// here we convert fahrenheit into whole number.
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
// this is the result of our code in fahrenheit
const kelvin = promot('What is the kelvin temperature today?');

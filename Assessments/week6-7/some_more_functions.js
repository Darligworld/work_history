/**
  Its important that you keep practicing creating functions. Here are some more
  that you will need to implement

  ```
  function {{name_of_function}} {
    // Write your code here
  }

  OR

  const {{name_of_function}} = () => {
    // Write your code here
  }

*/

// 1. write a function that takes a string as its first parameter. This function
// counts the number of vowels in the string and returns that number.
// EX1:
  // sample input: "Hello World"
  // sample output: 3
function getVowels(str) {
  let vowelsCount = 0;
  let string = str.toString();
  for (let i = 0; i <= string.length - 1; i++) {
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
console.log(getVowels("intercontinental"))

// 2. write a function that takes a string as it first parameter. This function
// return a new string with the first 3 letters lower-cased. If the string is less
// than 3 letters long, this function will return the new string with all letters
// upper-cased.
// EX1:
  // sample input: "HELLO"
  // sample output: "helLO"
// EX2:
  // sample input: "he"
  // sample output: "HE"
  function upperToLowerCase(array) {
  let str = array.join();
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    return (str.slice(0,3).toUpperCase() + str.slice(3));
  }
}

let plant = ['Orange'];
console.log(upperToLowerCase(plant));

let pronoun = ['he'];
console.log(upperToLowerCase(pronoun));

// 3. write a function that takes a string as it first parameter. This function
// returns the first half of the string if the string is even length. Otherwise,
// it will return null;
// EX1:
  // sample input: "HelloWorld"
  // sample output: "Hello"
// EX2:
  // sample input: "Hello World"
  // sample output: null
function firstHalf(obj){
  if(obj.length%2 == 0){
    let half = (obj.length/2);
    return obj.substring(0, half);
  }else{
    return null;
  }

 };

 console.log(firstHalf("Enye"));
 console.log(firstHalf("Grace"));



// 4. write a function that takes an array of numbers as its first parameter.
// This function returns the sum of the numbers in the array
// EX:
  // sample input: [1, 7, 1, 4, 1, 6, 4, 5]
  // sample output: 29
let myArray = [4,6,7,7,3,7,3,5,5,7,10];
function arraySum(array){
  let total = 0,
      len = array.length;
      for (let i = 0; i < len; i++){
    total += array[i];
  }
  return total;
};
console.log( arraySum( myArray ) );


// 5. write a function that takes an array of numbers as its first parameter.
// This function returns an the number that is the most frequent in the array
// EX:
  // sample input: [1, 7, 1, 4, 1, 6, 4, 5]
  // sample output: 1
  function frequent(number){
      let count = 0;
      let sortedNumber = number.sort();
      let start = number[0], item;
      for(let i = 0 ;  i < sortedNumber.length; i++){
        if(start === sortedNumber[i] || sortedNumber[i] === sortedNumber[i+1]){
           item = sortedNumber[i]
        }
      }
      return item
  }
     console.log( frequent([4,6,7,7,3,7,3,5,5,7,10]))

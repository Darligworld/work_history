/**
  In this assessment, you will use your knowledge of javascript loops
  to complete the functions below.

  ```
  function {{name_of_function}} {
    // Write your code here
  }

  OR
*/
// answer 1
  newYearsResolutions = ['Rappel into a cave', 'Take a falconry class'];
  function newYearsResolutions {
    return(newYearsResolutions)
  }
    console.log(newYearsResolutions);

// answer 2
    numbers = [1,2,34,54,55,34,32,11,19,17,54,66,13]
    function numbers {
      for oddNumbers.filter((number) => number%2!==0);
      return(oddNumbers)
    }
    console.log(oddNumbers);

//answer 3
  let nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
  let evens = [];
  let evenNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {

        if ((nums[i] % 2) != 1) {
                console.log(evens);
        }
  };

//answer 4
names = ['Obinna', 'uchenna', 'chioma', 'Darlington', 'Grace' ]
searchValue = 'Darlington'
function students(names, searchValue) {
  for let(namesIndex = 4; namesIndex < names.length; namesIndex++){
    if (names[namesIndex] === searchValue) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
};

 //answer 5
 array = ['Lagos', 'Abuja', 'Owerri', 'Enugu'];
 replaceValue = ('States')
 function Variables(array, replaceValue) {
   for (let arrayIndex = 0, arrayIndex <= array.length; arrayIndex++){
     if (arrayIndex !== replaceValue){
       let a - array.indexof(array[arrayIndex]);
     }else {
       console.log(array);
     }
   }
 }

// answre 6
array = ['Lagos', 'Abuja', 'Owerri','Enugu',];
searchValue = 'Abuja'
replaceValue = 'capital'
function Variables(array, searchValue, replaceValue){
  for (let arrayIndex = 0; arrayIndex <= index.length; arrayIndex++){
    if (arrayIndex === searchValue){
      let a = array.indexof(searchValue);
      array.splice(a, 1, replaceValue);
      console.log(array);
    }
  }
}
/**

// 1. write a function that takes an array as its first parameter and console logs
// every item in the array

// 2. write a function that takes an array as its first parameter and console logs
// every item with an odd index

// 3. write a function that takes an array as its first parameter and console logs
// every item with an even index

// 4. write a function that takes an array as its first parameter and a searchValue as
// its second parameter. The function returns true if the searchValue is in the array
// and false if it is not

// 5. write a function that takes an array as its first parameter, and a replaceValue as
// its second parameter. The function returns a new array where all the values in the
// array have been overwritten by the replaceValue.

// 6. write a function that takes an array as its first parameter, a searchValue as
// its second parameter and a replaceValue as the third parameter. The function returns
// a new array where only the searchValue has been overwritten by the replaceValue.

/**
  In this assessment, you will use your knowledge of javascript iterator
  to complete the code below. Array specific functions that will be used for this
  assessment:
    > forEach
    > some
    > filter
    > map

  ```
  function {{name_of_function}} {
    // Write your code here
  }

  OR
  */
  const week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    week.forEach(function(week) {
    console.log(week);
  });

  let longDays = week(function(week) {
  return week.length > 6;
}
/**

const week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

// 1. Using the `forEach` function complete the instructions below:
// Console.log every day in the week array

// 2. Using the `some` function complete the instructions below:
// Check the week array for days that are longer than six letters

const hasDaysLongerThanSixLetters = /** erase this then write your coode here*/

// 3. Using the `filter` function complete the instructions below:
// Filter the weeks array for all the days that are longer than six letters

const week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

const filteredDaysLongerThanSixLetters = week.filter(function(week) {
return week.length > 6;
});



// 4. Using the `map` function complete the instructions below:
// create a new array that has all the days captialized

// HINT - use `toUpperCase` function to captialize strings
// https://www.w3schools.com/jsref/jsref_touppercase.asp

const week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

let arrayOfCapitalizedDays = week.map(function(week) {
  return week.toUpperCase();
});

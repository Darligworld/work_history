/**
  In this assessment, you will use your knowledge of javascript arrays
  to complete the functions below.

  ```
  function {{name_of_function}} {
    // Write your code here
  }
  */

  OR
// answer 1
  game = ['football', 'baseball', 'baskeball', 'soccar',];
  event(game);
  function event(game) {
    return game.slice(0, 1);
  }

// answer 2
guestList = ['Emmanuel', 'Juliet', 'Xzonchin', 'Johnson', 'Ray',];
event(guestList);
function event(guestList) {
  return guestList.slice(-1);
}

// answer 3
randomNumber = [2, 5, 7, 9, 10, 16];
value = 3;
variable(randomNumber, value);
function variable(randomNumber,value) {
  randomNumber.unshift(value);
  let newRandomNumber = randomNumber;{
    return newRandomNumber;
  }
};

// answer 4
array = [2, 4, 6, 8, 10];
value = 14;
variable(array,value)
function variable(array, value){
  array.push(value);
  let newArray = array; {
    return newArray;
  }
};

// answer 5
age = [5, 10. 15, 20, 25,];
value = 5;
index = 1;
variable(age, value, index);
function variable(age, value, index) {
  age[1] = value
  return age;
}

/**

// 1. write a function that takes an array as its first parameter and returns
// the first item in the array

// 2. write a function that takes an array as its first parameter and returns
// the last item in the array

// 3. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// beginning of the array.

// 4. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// end of the array.

// 5. write a function that takes an array as its first parameter, a value as
// its second parameter and an index as the third parameter. The function returns
// a new array where the value can be found at that given index.

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



// 1. write a function that takes an array as its first parameter and returns
// the first item in the array
games = ['football', 'baseball', 'hockey', 'baskeball', 'soccar'];
function sports(games) {
return games[0];
}
sports(games);




// 2. write a function that takes an array as its first parameter and returns
// the last item in the array
games = ['football', 'baseball', 'hockey', 'baskeball', 'soccar'];
function array(game) {
  return game[4];
};
sport(array)


// 3. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// beginning of the array.
game = ['Football']
players = 11
function sport(game, players) {
  sport=game.unshift(players)
  return sport;
}
console.log(sport(game, players))

// 4. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// end of the array
game = ['Basketball']
players = 15
function sport(game, players) {
  return sport;
}



// 5. write a function that takes an array as its first parameter, a value as
// its second parameter and an index as the third parameter. The function returns
// a new array where the value can be found at that given index.
game = ['Basketball', 'Baseball', 'Soccer', 'Football']
players = 15;
index = 3;
function soccar(game, players, index) {
  game[index] = players
  return game;
}
console.log(soccar(game, players, index))

const team = {
  _players: [
    {firstName: "pikaso",
    lastName: "pablo",
    Age:26},
   {firstName: "Alonso",
    lastName: "Dybala",
    Age:31},
   {firstName: "Messi",
    lastName: "Lionel",
    Age:29},
  ],
  _games: [
    {opponent: "Real madride",
     teamPoints: 47,
     opponentPoints:23},
    {opponent: "Espanol",
     teamPoints: 38,
     opponentPoints:27},
    {opponent: "real betis",
     teamPoints: 40,
     opponentPoints:29}
  ],
  addGame(opp, myPts, oppPts) {
      const game = {
          opponent: opp,
          points: myPts,
          opponentPoints: oppPts
      };
      this.games.push(game);
  },
  get games() {
    return this._games;
  },
  get players() {
    return this._players;
  }
    addPlayer(fistName, LastName, age)
  {
    let player = {
      firstName: firstName
      lastName: lastName
      age: age
};

this.players.push(player);
}
};
teame.addplayer("steph", "curry", 28);
team.addplayer("Lisa", "Leslie", 44);
team.addplayer("Bugs", "Bunny", 76);
team.addGame("Real madride", 47, 23);
team.addGame("Espanol", 38, 27);
team.addGame("real betis", 40, 29);

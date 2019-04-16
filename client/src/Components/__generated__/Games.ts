/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Games
// ====================================================

export interface Games_games_player1 {
  __typename: "User";
  id: string;
  name: string;
}

export interface Games_games_player2 {
  __typename: "User";
  id: string;
  name: string;
}

export interface Games_games_gameRounds_songQuestions {
  __typename: "SongQuestion";
  id: string;
}

export interface Games_games_gameRounds {
  __typename: "GameRound";
  id: string;
  songQuestions: Games_games_gameRounds_songQuestions[];
}

export interface Games_games {
  __typename: "Game";
  id: string;
  player1: Games_games_player1;
  player2: Games_games_player2;
  gameRounds: Games_games_gameRounds[];
}

export interface Games {
  games: Games_games[];
}

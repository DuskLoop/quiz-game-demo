/* tslint:disable */
// This file was automatically generated and should not be edited.

import { WhosTurn, GameRoundStatus } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GamesQuery
// ====================================================

export interface GamesQuery_games_player1 {
  __typename: "User";
  id: string;
  name: string;
}

export interface GamesQuery_games_player2 {
  __typename: "User";
  id: string;
  name: string;
}

export interface GamesQuery_games_gameRounds_songQuestions_player1Answer_guessedSong {
  __typename: "Song";
  id: string;
  name: string;
}

export interface GamesQuery_games_gameRounds_songQuestions_player1Answer {
  __typename: "SongAnswer";
  id: string;
  guessedSong: GamesQuery_games_gameRounds_songQuestions_player1Answer_guessedSong | null;
}

export interface GamesQuery_games_gameRounds_songQuestions_player2Answer_guessedSong {
  __typename: "Song";
  id: string;
  name: string;
}

export interface GamesQuery_games_gameRounds_songQuestions_player2Answer {
  __typename: "SongAnswer";
  id: string;
  guessedSong: GamesQuery_games_gameRounds_songQuestions_player2Answer_guessedSong | null;
}

export interface GamesQuery_games_gameRounds_songQuestions_song {
  __typename: "HiddenSong";
  id: string;
}

export interface GamesQuery_games_gameRounds_songQuestions_gameRound {
  __typename: "GameRound";
  id: string;
}

export interface GamesQuery_games_gameRounds_songQuestions {
  __typename: "SongQuestion";
  id: string;
  player1Answer: GamesQuery_games_gameRounds_songQuestions_player1Answer | null;
  player2Answer: GamesQuery_games_gameRounds_songQuestions_player2Answer | null;
  song: GamesQuery_games_gameRounds_songQuestions_song;
  gameRound: GamesQuery_games_gameRounds_songQuestions_gameRound;
}

export interface GamesQuery_games_gameRounds {
  __typename: "GameRound";
  id: string;
  status: GameRoundStatus;
  songQuestions: GamesQuery_games_gameRounds_songQuestions[];
}

export interface GamesQuery_games {
  __typename: "Game";
  id: string;
  player1: GamesQuery_games_player1;
  player2: GamesQuery_games_player2;
  whosTurn: WhosTurn;
  gameRounds: GamesQuery_games_gameRounds[];
}

export interface GamesQuery {
  games: GamesQuery_games[];
}

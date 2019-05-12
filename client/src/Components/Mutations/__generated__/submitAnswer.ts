/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: submitAnswer
// ====================================================

export interface submitAnswer_submitAnswer_song {
  __typename: "Song";
  id: string;
  name: string;
}

export interface submitAnswer_submitAnswer_answers_guessedSong_artist {
  __typename: "Artist";
  id: string;
  name: string;
}

export interface submitAnswer_submitAnswer_answers_guessedSong {
  __typename: "Song";
  id: string;
  name: string;
  artist: submitAnswer_submitAnswer_answers_guessedSong_artist;
}

export interface submitAnswer_submitAnswer_answers {
  __typename: "SongAnswer";
  id: string;
  startTime: any;
  guessedSong: submitAnswer_submitAnswer_answers_guessedSong | null;
  time: number | null;
}

export interface submitAnswer_submitAnswer_songAlternatives {
  __typename: "Song";
  id: string;
}

export interface submitAnswer_submitAnswer {
  __typename: "SongQuestion";
  id: string;
  song: submitAnswer_submitAnswer_song;
  answers: submitAnswer_submitAnswer_answers[];
  songAlternatives: submitAnswer_submitAnswer_songAlternatives[];
}

export interface submitAnswer {
  submitAnswer: submitAnswer_submitAnswer;
}

export interface submitAnswerVariables {
  questionId: string;
  songId: string;
  time: number;
}

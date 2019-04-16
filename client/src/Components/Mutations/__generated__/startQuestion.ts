/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: startQuestion
// ====================================================

export interface startQuestion_startQuestion_song {
  __typename: "Song";
  id: string;
  name: string;
}

export interface startQuestion_startQuestion_answers_guessedSong_artist {
  __typename: "Artist";
  id: string;
  name: string;
}

export interface startQuestion_startQuestion_answers_guessedSong {
  __typename: "Song";
  id: string;
  name: string;
  artist: startQuestion_startQuestion_answers_guessedSong_artist;
}

export interface startQuestion_startQuestion_answers {
  __typename: "SongAnswer";
  id: string;
  startTime: any;
  guessedSong: startQuestion_startQuestion_answers_guessedSong | null;
  time: number | null;
}

export interface startQuestion_startQuestion_songAlternatives {
  __typename: "Song";
  id: string;
  name: string;
}

export interface startQuestion_startQuestion {
  __typename: "SongQuestion";
  id: string;
  song: startQuestion_startQuestion_song;
  answers: startQuestion_startQuestion_answers[];
  songAlternatives: startQuestion_startQuestion_songAlternatives[];
}

export interface startQuestion {
  startQuestion: startQuestion_startQuestion;
}

export interface startQuestionVariables {
  questionId: string;
}

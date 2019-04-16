/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: songQuestion
// ====================================================

export interface songQuestion_songQuestion_song {
  __typename: "Song";
  id: string;
  name: string;
}

export interface songQuestion_songQuestion_answers_guessedSong_artist {
  __typename: "Artist";
  id: string;
  name: string;
}

export interface songQuestion_songQuestion_answers_guessedSong {
  __typename: "Song";
  id: string;
  name: string;
  artist: songQuestion_songQuestion_answers_guessedSong_artist;
}

export interface songQuestion_songQuestion_answers {
  __typename: "SongAnswer";
  id: string;
  startTime: any;
  guessedSong: songQuestion_songQuestion_answers_guessedSong | null;
  time: number | null;
}

export interface songQuestion_songQuestion_songAlternatives {
  __typename: "Song";
  id: string;
  name: string;
}

export interface songQuestion_songQuestion {
  __typename: "SongQuestion";
  id: string;
  song: songQuestion_songQuestion_song;
  answers: songQuestion_songQuestion_answers[];
  songAlternatives: songQuestion_songQuestion_songAlternatives[];
}

export interface songQuestion {
  songQuestion: songQuestion_songQuestion;
}

export interface songQuestionVariables {
  questionId: string;
}

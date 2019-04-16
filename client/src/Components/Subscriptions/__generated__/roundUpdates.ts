/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: roundUpdates
// ====================================================

export interface roundUpdates_roundUpdates_song {
  __typename: "Song";
  id: string;
  name: string;
}

export interface roundUpdates_roundUpdates_answers_guessedSong_artist {
  __typename: "Artist";
  id: string;
  name: string;
}

export interface roundUpdates_roundUpdates_answers_guessedSong {
  __typename: "Song";
  id: string;
  name: string;
  artist: roundUpdates_roundUpdates_answers_guessedSong_artist;
}

export interface roundUpdates_roundUpdates_answers {
  __typename: "SongAnswer";
  id: string;
  startTime: any;
  guessedSong: roundUpdates_roundUpdates_answers_guessedSong | null;
  time: number | null;
}

export interface roundUpdates_roundUpdates_songAlternatives {
  __typename: "Song";
  id: string;
  name: string;
}

export interface roundUpdates_roundUpdates {
  __typename: "SongQuestion";
  id: string;
  song: roundUpdates_roundUpdates_song;
  answers: roundUpdates_roundUpdates_answers[];
  songAlternatives: roundUpdates_roundUpdates_songAlternatives[];
}

export interface roundUpdates {
  roundUpdates: roundUpdates_roundUpdates;
}

export interface roundUpdatesVariables {
  roundId: string;
}

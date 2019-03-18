/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SongQuery
// ====================================================

export interface SongQuery_song {
  __typename: "Song";
  id: string;
  name: string;
}

export interface SongQuery {
  song: SongQuery_song | null;
}

export interface SongQueryVariables {
  id: string;
}

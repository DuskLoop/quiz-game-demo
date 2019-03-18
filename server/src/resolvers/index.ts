import { Resolvers } from "../generated/graphqlgen";

import { Query } from "./Query";
import { Game } from "./Game";
import { User } from "./User";
import { Subscription } from "./Subscription";
import { Mutation } from "./Mutation";
import { GameRound } from "./GameRound";
import { SongQuestion } from "./SongQuestion";
import { HiddenSong } from "./HiddenSong";
import { SongAnswer } from "./SongAnswer";
import { Song } from "./Song";
import { Artist } from "./Artist";

export const resolvers: Resolvers = {
  Query,
  Game,
  User,
  GameRound,
  SongQuestion,
  HiddenSong,
  SongAnswer,
  Song,
  Artist,
  Mutation,
  Subscription
};

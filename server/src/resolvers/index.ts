import { Resolvers } from "../generated/graphqlgen";
import { GraphQLDate, GraphQLDateTime } from "graphql-iso-date";

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

function oddValue(value) {
  return value % 2 === 1 ? value : null;
}

interface ResolversAndCustomScalars extends Resolvers {
  Date: any;
  DateTime: any;
}

export const resolvers: ResolversAndCustomScalars = {
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
  Subscription,
  Date: GraphQLDate,
  DateTime: GraphQLDateTime
};

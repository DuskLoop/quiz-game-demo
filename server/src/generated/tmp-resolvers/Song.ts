// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { SongResolvers } from "../graphqlgen";

export const Song: SongResolvers.Type = {
  ...SongResolvers.defaultResolvers,

  artist: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};

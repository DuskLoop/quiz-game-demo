import { SongResolvers } from "../generated/graphqlgen";

export const Song: SongResolvers.Type = {
  ...SongResolvers.defaultResolvers,

  artist: (parent, args, ctx) => {
    return ctx.prisma.song({ id: parent.id }).artist();
  }
};

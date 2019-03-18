import { ArtistResolvers } from "../generated/graphqlgen";

export const Artist: ArtistResolvers.Type = {
  ...ArtistResolvers.defaultResolvers,

  songs: (parent, args, ctx) => {
    return ctx.prisma.artist({ id: parent.id }).songs();
  }
};

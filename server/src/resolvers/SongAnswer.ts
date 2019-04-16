import { SongAnswerResolvers } from "../generated/graphqlgen";

export const SongAnswer: SongAnswerResolvers.Type = {
  ...SongAnswerResolvers.defaultResolvers,

  guessedSong: (parent, args, ctx) => {
    return ctx.prisma.songAnswer({ id: parent.id }).guessedSong();
  },
  user: (parent, args, ctx) => {
    return ctx.prisma.songAnswer({ id: parent.id }).user();
  },
  question: (parent, args, ctx) => {
    return ctx.prisma.songAnswer({ id: parent.id }).question();
  }
};

import { SongQuestionResolvers } from "../generated/graphqlgen";

export const SongQuestion: SongQuestionResolvers.Type = {
  ...SongQuestionResolvers.defaultResolvers,

  song: (parent, args, ctx) => {
    return ctx.prisma.songQuestion({ id: parent.id }).song();
  },
  answers: (parent, args, ctx) => {
    return ctx.prisma.songQuestion({ id: parent.id }).answers();
  },
  gameRound: (parent, args, ctx) => {
    return ctx.prisma.songQuestion({ id: parent.id }).gameRound();
  },
  songAlternatives: async (parent, args, ctx) => {
    const songs = await ctx.prisma.songs();
    return songs.slice(1, 4);
  }
};

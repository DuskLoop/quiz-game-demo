import { SongQuestionResolvers } from "../generated/graphqlgen";

export const SongQuestion: SongQuestionResolvers.Type = {
  ...SongQuestionResolvers.defaultResolvers,

  song: (parent, args, ctx) => {
    return ctx.prisma.songQuestion({ id: parent.id }).song();
  },
  player1Answer: (parent, args, ctx) => {
    return ctx.prisma.songQuestion({ id: parent.id }).player1Answer();
  },
  player2Answer: (parent, args, ctx) => {
    return ctx.prisma.songQuestion({ id: parent.id }).player2Answer();
  },
  gameRound: (parent, args, ctx) => {
    return ctx.prisma.songQuestion({ id: parent.id }).gameRound();
  },
  songAlternatives: async (parent, args, ctx) => {
    const songs = await ctx.prisma.songs();
    return songs.slice(0, 3);
  }
};

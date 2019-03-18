import { SongAnswerResolvers } from "../generated/graphqlgen";

export const SongAnswer: SongAnswerResolvers.Type = {
  ...SongAnswerResolvers.defaultResolvers,

  guessedSong: (parent, args, ctx) => {
    return ctx.prisma.songAnswer({ id: parent.id }).guessedSong();
  },
  songQuestion: async (parent, args, ctx) => {
    const player1SongQuestion = await ctx.prisma
      .songAnswer({ id: parent.id })
      .player1SongQuestion();
    const player2SongQuestion = await ctx.prisma
      .songAnswer({ id: parent.id })
      .player2SongQuestion();

    return player1SongQuestion || player2SongQuestion;
  }
};

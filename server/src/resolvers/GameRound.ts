import { GameRoundResolvers } from "../generated/graphqlgen";

export const GameRound: GameRoundResolvers.Type = {
  ...GameRoundResolvers.defaultResolvers,

  songQuestions: (parent, args, ctx) => {
    return ctx.prisma.gameRound({ id: parent.id }).songQuestions();
  },
  game: (parent, args, ctx) => {
    return ctx.prisma.gameRound({ id: parent.id }).Game();
  }
};

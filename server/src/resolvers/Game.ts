import { GameResolvers } from "../generated/graphqlgen";

export const Game: GameResolvers.Type = {
  ...GameResolvers.defaultResolvers,

  player1: (parent, args, ctx) => {
    return ctx.prisma.game({ id: parent.id }).player1();
  },
  player2: (parent, args, ctx) => {
    return ctx.prisma.game({ id: parent.id }).player2();
  },
  gameRounds: (parent, args, ctx) => {
    return ctx.prisma.game({ id: parent.id }).gameRounds();
  }
};

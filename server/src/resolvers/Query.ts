import { QueryResolvers } from "../generated/graphqlgen";

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  games: (parent, args, ctx) => {
    return ctx.prisma.games();
  },
  users: (parent, args, ctx) => {
    return ctx.prisma.users();
  },
  song: (parent, args, ctx) => {
    return ctx.prisma.song({ id: args.id });
  },
  gameRound: (parent, args, ctx) => {
    return ctx.prisma.gameRound({ id: "cjs7lgj9m000f0810jz1tp2nt" });
  }
};

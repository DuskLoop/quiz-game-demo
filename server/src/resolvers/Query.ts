import { QueryResolvers } from "../generated/graphqlgen";
import { ApolloError } from "apollo-server-express";

class AuthorizationError extends ApolloError {
  name = "AuthorizationError";
  constructor(message: string) {
    super(message, "UNAUTHORIZED");
  }
}

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
    return ctx.prisma.gameRound({ id: args.id });
  },
  songQuestion: (parent, args, ctx) => {
    return ctx.prisma.songQuestion({ id: args.questionId });
  }
};

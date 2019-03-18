import { UserResolvers } from "../generated/graphqlgen";

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,
  games: async (parent, args, ctx) => {
    const gamesAsPlayer1 = await ctx.prisma
      .user({ id: parent.id })
      .gamesAsPlayer1();
    const gamesAsPlayer2 = await ctx.prisma
      .user({ id: parent.id })
      .gamesAsPlayer2();

    return [...gamesAsPlayer1, ...gamesAsPlayer2];
  }
};

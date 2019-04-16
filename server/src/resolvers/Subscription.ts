import { SubscriptionResolvers } from "../generated/graphqlgen";
import { pubsub } from "..";
import { withFilter } from "graphql-subscriptions";
import { Context } from "../types";

export const Subscription: SubscriptionResolvers.Type = {
  ...SubscriptionResolvers.defaultResolvers,
  roundUpdates: {
    resolve: async (payload: any, args, ctx) => {
      return payload.startRound;
    },
    subscribe: withFilter(
      () => pubsub.asyncIterator(["QUESTION_SUBMITTED", "QUESTION_STARTED"]),
      async (payload, args, ctx: Context, info) => {
        console.log("Subscription filter");

        const player1 = await ctx.prisma
          .gameRound({ id: args.roundId })
          .Game()
          .player1();
        const player2 = await ctx.prisma
          .gameRound({ id: args.roundId })
          .Game()
          .player2();

        if (player1.id === ctx.userId) {
          console.log("You are player1");
        } else if (player2.id === ctx.userId) {
          console.log("You are player2");
        } else {
          console.log("You have no games associated with this round");
          return false;
        }

        const round = await ctx.prisma
          .songQuestion({ id: payload.startRound.id })
          .gameRound();

        if (round.id === args.roundId) {
          return true;
        }

        return false;
      }
    )
  }
};

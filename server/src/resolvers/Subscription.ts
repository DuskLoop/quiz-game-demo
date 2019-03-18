import { SubscriptionResolvers } from "../generated/graphqlgen";
import { pubsub } from "..";

export const Subscription: SubscriptionResolvers.Type = {
  ...SubscriptionResolvers.defaultResolvers,
  startGame: {
    subscribe: (parent, args, ctx) => {
      console.log("Subscribe");
      setTimeout(() => {
        pubsub.publish("GAME_STARTED", { startGame: true });
      }, 5000);
      return pubsub.asyncIterator(["GAME_STARTED"]);
    }
  }
};

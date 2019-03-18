import { SubscriptionResolvers } from "../generated/graphqlgen";
import { pubsub } from "..";

export const Subscription: SubscriptionResolvers.Type = {
  ...SubscriptionResolvers.defaultResolvers,
  startRound: {
    subscribe: () => {
      return pubsub.asyncIterator(["QUESTION_SUBMITTED"]);
    }
  }
};

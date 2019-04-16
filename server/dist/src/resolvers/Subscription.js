"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphqlgen_1 = require("../generated/graphqlgen");
var __1 = require("..");
exports.Subscription = __assign({}, graphqlgen_1.SubscriptionResolvers.defaultResolvers, { startRound: {
        resolve: function (payload, args, context, info) {
            console.log(JSON.stringify(payload));
            return payload.startRound;
        },
        subscribe: function (parent, args, ctx, info) {
            console.log("Subscription started");
            return __1.pubsub.asyncIterator(["QUESTION_SUBMITTED", "QUESTION_STARTED"]);
        }
    } });
//# sourceMappingURL=Subscription.js.map
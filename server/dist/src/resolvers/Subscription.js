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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var graphqlgen_1 = require("../generated/graphqlgen");
var __1 = require("..");
var graphql_subscriptions_1 = require("graphql-subscriptions");
exports.Subscription = __assign({}, graphqlgen_1.SubscriptionResolvers.defaultResolvers, { roundUpdates: {
        resolve: function (payload, args, ctx) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, payload.startRound];
            });
        }); },
        subscribe: graphql_subscriptions_1.withFilter(function () { return __1.pubsub.asyncIterator(["QUESTION_SUBMITTED", "QUESTION_STARTED"]); }, function (payload, args, ctx, info) { return __awaiter(_this, void 0, void 0, function () {
            var player1, player2, round;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Subscription filter");
                        return [4 /*yield*/, ctx.prisma
                                .gameRound({ id: args.roundId })
                                .Game()
                                .player1()];
                    case 1:
                        player1 = _a.sent();
                        return [4 /*yield*/, ctx.prisma
                                .gameRound({ id: args.roundId })
                                .Game()
                                .player2()];
                    case 2:
                        player2 = _a.sent();
                        if (player1.id === ctx.userId) {
                            console.log("You are player1");
                        }
                        else if (player2.id === ctx.userId) {
                            console.log("You are player2");
                        }
                        else {
                            console.log("You have no games associated with this round");
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, ctx.prisma
                                .songQuestion({ id: payload.startRound.id })
                                .gameRound()];
                    case 3:
                        round = _a.sent();
                        if (round.id === args.roundId) {
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                }
            });
        }); })
    } });
//# sourceMappingURL=Subscription.js.map
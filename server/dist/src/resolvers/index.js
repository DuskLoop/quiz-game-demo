"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_iso_date_1 = require("graphql-iso-date");
var Query_1 = require("./Query");
var Game_1 = require("./Game");
var User_1 = require("./User");
var Subscription_1 = require("./Subscription");
var Mutation_1 = require("./Mutation");
var GameRound_1 = require("./GameRound");
var SongQuestion_1 = require("./SongQuestion");
var HiddenSong_1 = require("./HiddenSong");
var SongAnswer_1 = require("./SongAnswer");
var Song_1 = require("./Song");
var Artist_1 = require("./Artist");
function oddValue(value) {
    return value % 2 === 1 ? value : null;
}
exports.resolvers = {
    Query: Query_1.Query,
    Game: Game_1.Game,
    User: User_1.User,
    GameRound: GameRound_1.GameRound,
    SongQuestion: SongQuestion_1.SongQuestion,
    HiddenSong: HiddenSong_1.HiddenSong,
    SongAnswer: SongAnswer_1.SongAnswer,
    Song: Song_1.Song,
    Artist: Artist_1.Artist,
    Mutation: Mutation_1.Mutation,
    Subscription: Subscription_1.Subscription,
    Date: graphql_iso_date_1.GraphQLDate,
    DateTime: graphql_iso_date_1.GraphQLDateTime
};
//# sourceMappingURL=index.js.map
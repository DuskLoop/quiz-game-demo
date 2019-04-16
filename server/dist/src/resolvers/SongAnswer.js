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
exports.SongAnswer = __assign({}, graphqlgen_1.SongAnswerResolvers.defaultResolvers, { guessedSong: function (parent, args, ctx) {
        return ctx.prisma.songAnswer({ id: parent.id }).guessedSong();
    }, user: function (parent, args, ctx) {
        return ctx.prisma.songAnswer({ id: parent.id }).user();
    }, question: function (parent, args, ctx) {
        return ctx.prisma.songAnswer({ id: parent.id }).question();
    } });
//# sourceMappingURL=SongAnswer.js.map
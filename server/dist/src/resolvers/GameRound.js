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
exports.GameRound = __assign({}, graphqlgen_1.GameRoundResolvers.defaultResolvers, { songQuestions: function (parent, args, ctx) {
        return ctx.prisma.gameRound({ id: parent.id }).songQuestions();
    }, game: function (parent, args, ctx) {
        return ctx.prisma.gameRound({ id: parent.id }).Game();
    } });
//# sourceMappingURL=GameRound.js.map
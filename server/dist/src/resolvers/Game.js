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
exports.Game = __assign({}, graphqlgen_1.GameResolvers.defaultResolvers, { player1: function (parent, args, ctx) {
        return ctx.prisma.game({ id: parent.id }).player1();
    }, player2: function (parent, args, ctx) {
        return ctx.prisma.game({ id: parent.id }).player2();
    }, gameRounds: function (parent, args, ctx) {
        return ctx.prisma.game({ id: parent.id }).gameRounds();
    } });
//# sourceMappingURL=Game.js.map
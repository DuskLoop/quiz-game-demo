"use strict";
// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.
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
var graphqlgen_1 = require("../graphqlgen");
exports.SongQuestion = __assign({}, graphqlgen_1.SongQuestionResolvers.defaultResolvers, { song: function (parent, args, ctx) {
        throw new Error("Resolver not implemented");
    }, answers: function (parent, args, ctx) {
        throw new Error("Resolver not implemented");
    }, gameRound: function (parent, args, ctx) {
        throw new Error("Resolver not implemented");
    }, songAlternatives: function (parent, args, ctx) {
        throw new Error("Resolver not implemented");
    } });
//# sourceMappingURL=SongQuestion.js.map
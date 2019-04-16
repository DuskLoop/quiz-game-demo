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
exports.SongAnswer = __assign({}, graphqlgen_1.SongAnswerResolvers.defaultResolvers, { user: function (parent, args, ctx) {
        throw new Error("Resolver not implemented");
    }, guessedSong: function (parent, args, ctx) {
        throw new Error("Resolver not implemented");
    }, question: function (parent, args, ctx) {
        throw new Error("Resolver not implemented");
    } });
//# sourceMappingURL=SongAnswer.js.map
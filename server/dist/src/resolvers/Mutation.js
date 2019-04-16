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
var utils_1 = require("../utils/utils");
var __1 = require("..");
exports.Mutation = __assign({}, graphqlgen_1.MutationResolvers.defaultResolvers, { startGame: function (parent, args, ctx) {
        return ctx.prisma.createGame({
            player1: { connect: { id: args.player1Id } },
            player2: { connect: { id: args.player2Id } },
            whosTurn: "PLAYER1"
        });
    }, createUser: function (parent, args, ctx) {
        return ctx.prisma.createUser({ name: args.name });
    }, startNewGameRound: function (parent, args, ctx) { return __awaiter(_this, void 0, void 0, function () {
        var allSongs, randomSongs, songQuestions, newGameRound;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ctx.prisma.songs()];
                case 1:
                    allSongs = _a.sent();
                    randomSongs = utils_1.shuffle(allSongs).slice(0, 5);
                    songQuestions = randomSongs.map(function (song) { return ({ song: { connect: { id: song.id } } }); });
                    return [4 /*yield*/, ctx.prisma.createGameRound({
                            Game: { connect: { id: args.gameId } },
                            status: "ACTIVE",
                            songQuestions: { create: songQuestions }
                        })];
                case 2:
                    newGameRound = _a.sent();
                    return [4 /*yield*/, ctx.prisma.updateGame({
                            where: { id: args.gameId },
                            data: { gameRounds: { connect: { id: newGameRound.id } } }
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, newGameRound];
            }
        });
    }); }, submitAnswer: function (parent, args, ctx) { return __awaiter(_this, void 0, void 0, function () {
        var user, usersAnswers, answer, timeDiff, updatedQuestion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ctx.prisma.user({ id: "cjrz2fu8y00030835ylla0lio" })];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, ctx.prisma
                            .songQuestion({ id: args.questionId })
                            .answers({ where: { user: { id: user.id } } })];
                case 2:
                    usersAnswers = _a.sent();
                    if (usersAnswers.length > 1) {
                        throw Error("User has more than one answer on this question");
                    }
                    if (usersAnswers[0] == null) {
                        throw Error("User has has no answers on this question");
                    }
                    answer = usersAnswers[0];
                    timeDiff = new Date().getTime() - new Date(answer.startTime).getTime();
                    return [4 /*yield*/, ctx.prisma.updateSongQuestion({
                            where: { id: args.questionId },
                            data: {
                                answers: {
                                    update: {
                                        where: { id: answer.id },
                                        data: {
                                            time: timeDiff,
                                            guessedSong: { connect: { id: args.songID } }
                                        }
                                    }
                                }
                            }
                        })];
                case 3:
                    updatedQuestion = _a.sent();
                    __1.pubsub.publish("QUESTION_SUBMITTED", { startRound: updatedQuestion });
                    return [2 /*return*/, updatedQuestion];
            }
        });
    }); }, startQuestion: function (parent, args, ctx) { return __awaiter(_this, void 0, void 0, function () {
        var startTime, startedQuestion, createdAnswers, createdAnswer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    startTime = new Date();
                    return [4 /*yield*/, ctx.prisma.updateSongQuestion({
                            where: { id: args.questionId },
                            data: {
                                answers: {
                                    create: {
                                        startTime: startTime,
                                        user: { connect: { id: "cjrz2fu8y00030835ylla0lio" } }
                                    }
                                }
                            }
                        })];
                case 1:
                    startedQuestion = _a.sent();
                    return [4 /*yield*/, ctx.prisma
                            .songQuestion({ id: args.questionId })
                            .answers({ where: { user: { id: "cjrz2fu8y00030835ylla0lio" } } })];
                case 2:
                    createdAnswers = _a.sent();
                    if (createdAnswers.length > 1) {
                        throw Error("User has more than one answer on this question");
                    }
                    if (createdAnswers[0] == null) {
                        throw Error("User has has no answers on this question");
                    }
                    createdAnswer = createdAnswers[0];
                    __1.pubsub.publish("QUESTION_STARTED", { startRound: startedQuestion });
                    return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 5000); })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, ctx.prisma.updateSongQuestion({
                            where: { id: args.questionId },
                            data: {
                                answers: {
                                    update: { where: { id: createdAnswer.id }, data: { time: 5000 } }
                                }
                            }
                        })];
            }
        });
    }); }, resetQuestion: function (parent, args, ctx) {
        return ctx.prisma.updateSongQuestion({
            where: { id: args.questionID },
            data: {
                answers: { deleteMany: { id_gt: 0 } }
            }
        });
    } });
//# sourceMappingURL=Mutation.js.map
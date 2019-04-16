import { MutationResolvers } from "../generated/graphqlgen";
import { shuffle, throwIfUndefined } from "../utils/utils";
import {
  SongQuestionCreateWithoutGameRoundInput,
  GameRoundCreateWithoutGameInput,
  prisma
} from "../../generated/prisma-client";
import { pubsub } from "..";

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  startGame: (parent, args, ctx) => {
    return ctx.prisma.createGame({
      player1: { connect: { id: args.player1Id } },
      player2: { connect: { id: args.player2Id } },
      whosTurn: "PLAYER1"
    });
  },
  createUser: (parent, args, ctx) => {
    return ctx.prisma.createUser({ name: args.name });
  },
  startNewGameRound: async (parent, args, ctx) => {
    const allSongs = await ctx.prisma.songs();
    const randomSongs = shuffle(allSongs).slice(0, 5);
    const songQuestions: SongQuestionCreateWithoutGameRoundInput[] = randomSongs.map(
      song => ({ song: { connect: { id: song.id } } })
    );

    const newGameRound = await ctx.prisma.createGameRound({
      Game: { connect: { id: args.gameId } },
      status: "ACTIVE",
      songQuestions: { create: songQuestions }
    });

    await ctx.prisma.updateGame({
      where: { id: args.gameId },
      data: { gameRounds: { connect: { id: newGameRound.id } } }
    });

    return newGameRound;
  },
  submitAnswer: async (parent, args, ctx) => {
    const submitStart = new Date();
    const user = await ctx.prisma.user({ id: "cjrz2fu8y00030835ylla0lio" });
    const usersAnswers = await ctx.prisma
      .songQuestion({ id: args.questionId })
      .answers({ where: { user: { id: user.id } } });

    if (usersAnswers.length > 1) {
      throw Error("User has more than one answer on this question");
    }

    if (usersAnswers[0] == null) {
      throw Error("User has has no answers on this question");
    }

    const answer = usersAnswers[0];

    const timeDiff =
      new Date().getTime() - new Date(answer.startTime).getTime();

    console.log("Submit: ", new Date().getTime() - submitStart.getTime());

    const updatedQuestion = await ctx.prisma.updateSongQuestion({
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
    });

    return updatedQuestion;
  },
  startQuestion: async (parent, args, ctx) => {
    const startTime = new Date();

    const startedQuestion = await ctx.prisma.updateSongQuestion({
      where: { id: args.questionId },
      data: {
        answers: {
          create: {
            startTime,
            user: { connect: { id: "cjrz2fu8y00030835ylla0lio" } }
          }
        }
      }
    });

    const createdAnswers = await ctx.prisma
      .songQuestion({ id: args.questionId })
      .answers({ where: { user: { id: "cjrz2fu8y00030835ylla0lio" } } });

    if (createdAnswers.length > 1) {
      throw Error("User has more than one answer on this question");
    }

    if (createdAnswers[0] == null) {
      throw Error("User has has no answers on this question");
    }

    const createdAnswer = createdAnswers[0];

    console.log(new Date().getTime() - startTime.getTime());

    pubsub.publish("QUESTION_STARTED", {
      startRound: startedQuestion
    });

    await new Promise(r => setTimeout(r, 10000));

    const song = await ctx.prisma
      .songAnswer({ id: createdAnswer.id })
      .guessedSong();

    if (song == null) {
      return ctx.prisma.updateSongQuestion({
        where: { id: args.questionId },
        data: {
          answers: {
            update: { where: { id: createdAnswer.id }, data: { time: 10000 } }
          }
        }
      });
    } else {
      return ctx.prisma.songQuestion({
        id: args.questionId
      });
    }
  },
  resetQuestion: (parent, args, ctx) => {
    return ctx.prisma.updateSongQuestion({
      where: { id: args.questionID },
      data: {
        answers: { deleteMany: { id_not: null } }
      }
    });
  }
};

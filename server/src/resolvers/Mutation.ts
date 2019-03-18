import { MutationResolvers } from "../generated/graphqlgen";
import { shuffle } from "../utils/utils";
import {
  SongQuestionCreateWithoutGameRoundInput,
  GameRoundCreateWithoutGameInput
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
    const newQuestion = await ctx.prisma.updateSongQuestion({
      where: { id: args.questionID },
      data: {
        player1Answer: {
          create: {
            correct: false,
            guessedSong: { connect: { id: args.songID } },
            time: 10
          }
        }
      }
    });
    pubsub.publish("QUESTION_SUBMITTED", { startRound: newQuestion });
    return newQuestion;
  }
};

export const typeDefs = /* GraphQL */ `type AggregateArtist {
  count: Int!
}

type AggregateGame {
  count: Int!
}

type AggregateGameRound {
  count: Int!
}

type AggregateSong {
  count: Int!
}

type AggregateSongAnswer {
  count: Int!
}

type AggregateSongQuestion {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Artist {
  id: ID!
  name: String!
  songs(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song!]
}

type ArtistConnection {
  pageInfo: PageInfo!
  edges: [ArtistEdge]!
  aggregate: AggregateArtist!
}

input ArtistCreateInput {
  name: String!
  songs: SongCreateManyWithoutArtistInput
}

input ArtistCreateOneWithoutSongsInput {
  create: ArtistCreateWithoutSongsInput
  connect: ArtistWhereUniqueInput
}

input ArtistCreateWithoutSongsInput {
  name: String!
}

type ArtistEdge {
  node: Artist!
  cursor: String!
}

enum ArtistOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ArtistPreviousValues {
  id: ID!
  name: String!
}

type ArtistSubscriptionPayload {
  mutation: MutationType!
  node: Artist
  updatedFields: [String!]
  previousValues: ArtistPreviousValues
}

input ArtistSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ArtistWhereInput
  AND: [ArtistSubscriptionWhereInput!]
  OR: [ArtistSubscriptionWhereInput!]
  NOT: [ArtistSubscriptionWhereInput!]
}

input ArtistUpdateInput {
  name: String
  songs: SongUpdateManyWithoutArtistInput
}

input ArtistUpdateManyMutationInput {
  name: String
}

input ArtistUpdateOneRequiredWithoutSongsInput {
  create: ArtistCreateWithoutSongsInput
  update: ArtistUpdateWithoutSongsDataInput
  upsert: ArtistUpsertWithoutSongsInput
  connect: ArtistWhereUniqueInput
}

input ArtistUpdateWithoutSongsDataInput {
  name: String
}

input ArtistUpsertWithoutSongsInput {
  update: ArtistUpdateWithoutSongsDataInput!
  create: ArtistCreateWithoutSongsInput!
}

input ArtistWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  songs_every: SongWhereInput
  songs_some: SongWhereInput
  songs_none: SongWhereInput
  AND: [ArtistWhereInput!]
  OR: [ArtistWhereInput!]
  NOT: [ArtistWhereInput!]
}

input ArtistWhereUniqueInput {
  id: ID
  name: String
}

type BatchPayload {
  count: Long!
}

type Game {
  id: ID!
  player1: User!
  player2: User!
  gameRounds(where: GameRoundWhereInput, orderBy: GameRoundOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GameRound!]
  whosTurn: WhosTurn!
}

type GameConnection {
  pageInfo: PageInfo!
  edges: [GameEdge]!
  aggregate: AggregateGame!
}

input GameCreateInput {
  player1: UserCreateOneWithoutGamesAsPlayer1Input!
  player2: UserCreateOneWithoutGamesAsPlayer2Input!
  gameRounds: GameRoundCreateManyWithoutGameInput
  whosTurn: WhosTurn!
}

input GameCreateManyWithoutPlayer1Input {
  create: [GameCreateWithoutPlayer1Input!]
  connect: [GameWhereUniqueInput!]
}

input GameCreateManyWithoutPlayer2Input {
  create: [GameCreateWithoutPlayer2Input!]
  connect: [GameWhereUniqueInput!]
}

input GameCreateOneWithoutGameRoundsInput {
  create: GameCreateWithoutGameRoundsInput
  connect: GameWhereUniqueInput
}

input GameCreateWithoutGameRoundsInput {
  player1: UserCreateOneWithoutGamesAsPlayer1Input!
  player2: UserCreateOneWithoutGamesAsPlayer2Input!
  whosTurn: WhosTurn!
}

input GameCreateWithoutPlayer1Input {
  player2: UserCreateOneWithoutGamesAsPlayer2Input!
  gameRounds: GameRoundCreateManyWithoutGameInput
  whosTurn: WhosTurn!
}

input GameCreateWithoutPlayer2Input {
  player1: UserCreateOneWithoutGamesAsPlayer1Input!
  gameRounds: GameRoundCreateManyWithoutGameInput
  whosTurn: WhosTurn!
}

type GameEdge {
  node: Game!
  cursor: String!
}

enum GameOrderByInput {
  id_ASC
  id_DESC
  whosTurn_ASC
  whosTurn_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GamePreviousValues {
  id: ID!
  whosTurn: WhosTurn!
}

type GameRound {
  id: ID!
  status: GameRoundStatus!
  songQuestions(where: SongQuestionWhereInput, orderBy: SongQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SongQuestion!]
  Game: Game!
}

type GameRoundConnection {
  pageInfo: PageInfo!
  edges: [GameRoundEdge]!
  aggregate: AggregateGameRound!
}

input GameRoundCreateInput {
  status: GameRoundStatus!
  songQuestions: SongQuestionCreateManyWithoutGameRoundInput
  Game: GameCreateOneWithoutGameRoundsInput!
}

input GameRoundCreateManyWithoutGameInput {
  create: [GameRoundCreateWithoutGameInput!]
  connect: [GameRoundWhereUniqueInput!]
}

input GameRoundCreateOneWithoutSongQuestionsInput {
  create: GameRoundCreateWithoutSongQuestionsInput
  connect: GameRoundWhereUniqueInput
}

input GameRoundCreateWithoutGameInput {
  status: GameRoundStatus!
  songQuestions: SongQuestionCreateManyWithoutGameRoundInput
}

input GameRoundCreateWithoutSongQuestionsInput {
  status: GameRoundStatus!
  Game: GameCreateOneWithoutGameRoundsInput!
}

type GameRoundEdge {
  node: GameRound!
  cursor: String!
}

enum GameRoundOrderByInput {
  id_ASC
  id_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GameRoundPreviousValues {
  id: ID!
  status: GameRoundStatus!
}

input GameRoundScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  status: GameRoundStatus
  status_not: GameRoundStatus
  status_in: [GameRoundStatus!]
  status_not_in: [GameRoundStatus!]
  AND: [GameRoundScalarWhereInput!]
  OR: [GameRoundScalarWhereInput!]
  NOT: [GameRoundScalarWhereInput!]
}

enum GameRoundStatus {
  ACTIVE
  COMPLETED
  CANCELED
}

type GameRoundSubscriptionPayload {
  mutation: MutationType!
  node: GameRound
  updatedFields: [String!]
  previousValues: GameRoundPreviousValues
}

input GameRoundSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GameRoundWhereInput
  AND: [GameRoundSubscriptionWhereInput!]
  OR: [GameRoundSubscriptionWhereInput!]
  NOT: [GameRoundSubscriptionWhereInput!]
}

input GameRoundUpdateInput {
  status: GameRoundStatus
  songQuestions: SongQuestionUpdateManyWithoutGameRoundInput
  Game: GameUpdateOneRequiredWithoutGameRoundsInput
}

input GameRoundUpdateManyDataInput {
  status: GameRoundStatus
}

input GameRoundUpdateManyMutationInput {
  status: GameRoundStatus
}

input GameRoundUpdateManyWithoutGameInput {
  create: [GameRoundCreateWithoutGameInput!]
  delete: [GameRoundWhereUniqueInput!]
  connect: [GameRoundWhereUniqueInput!]
  disconnect: [GameRoundWhereUniqueInput!]
  update: [GameRoundUpdateWithWhereUniqueWithoutGameInput!]
  upsert: [GameRoundUpsertWithWhereUniqueWithoutGameInput!]
  deleteMany: [GameRoundScalarWhereInput!]
  updateMany: [GameRoundUpdateManyWithWhereNestedInput!]
}

input GameRoundUpdateManyWithWhereNestedInput {
  where: GameRoundScalarWhereInput!
  data: GameRoundUpdateManyDataInput!
}

input GameRoundUpdateOneRequiredWithoutSongQuestionsInput {
  create: GameRoundCreateWithoutSongQuestionsInput
  update: GameRoundUpdateWithoutSongQuestionsDataInput
  upsert: GameRoundUpsertWithoutSongQuestionsInput
  connect: GameRoundWhereUniqueInput
}

input GameRoundUpdateWithoutGameDataInput {
  status: GameRoundStatus
  songQuestions: SongQuestionUpdateManyWithoutGameRoundInput
}

input GameRoundUpdateWithoutSongQuestionsDataInput {
  status: GameRoundStatus
  Game: GameUpdateOneRequiredWithoutGameRoundsInput
}

input GameRoundUpdateWithWhereUniqueWithoutGameInput {
  where: GameRoundWhereUniqueInput!
  data: GameRoundUpdateWithoutGameDataInput!
}

input GameRoundUpsertWithoutSongQuestionsInput {
  update: GameRoundUpdateWithoutSongQuestionsDataInput!
  create: GameRoundCreateWithoutSongQuestionsInput!
}

input GameRoundUpsertWithWhereUniqueWithoutGameInput {
  where: GameRoundWhereUniqueInput!
  update: GameRoundUpdateWithoutGameDataInput!
  create: GameRoundCreateWithoutGameInput!
}

input GameRoundWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  status: GameRoundStatus
  status_not: GameRoundStatus
  status_in: [GameRoundStatus!]
  status_not_in: [GameRoundStatus!]
  songQuestions_every: SongQuestionWhereInput
  songQuestions_some: SongQuestionWhereInput
  songQuestions_none: SongQuestionWhereInput
  Game: GameWhereInput
  AND: [GameRoundWhereInput!]
  OR: [GameRoundWhereInput!]
  NOT: [GameRoundWhereInput!]
}

input GameRoundWhereUniqueInput {
  id: ID
}

input GameScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  whosTurn: WhosTurn
  whosTurn_not: WhosTurn
  whosTurn_in: [WhosTurn!]
  whosTurn_not_in: [WhosTurn!]
  AND: [GameScalarWhereInput!]
  OR: [GameScalarWhereInput!]
  NOT: [GameScalarWhereInput!]
}

type GameSubscriptionPayload {
  mutation: MutationType!
  node: Game
  updatedFields: [String!]
  previousValues: GamePreviousValues
}

input GameSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GameWhereInput
  AND: [GameSubscriptionWhereInput!]
  OR: [GameSubscriptionWhereInput!]
  NOT: [GameSubscriptionWhereInput!]
}

input GameUpdateInput {
  player1: UserUpdateOneRequiredWithoutGamesAsPlayer1Input
  player2: UserUpdateOneRequiredWithoutGamesAsPlayer2Input
  gameRounds: GameRoundUpdateManyWithoutGameInput
  whosTurn: WhosTurn
}

input GameUpdateManyDataInput {
  whosTurn: WhosTurn
}

input GameUpdateManyMutationInput {
  whosTurn: WhosTurn
}

input GameUpdateManyWithoutPlayer1Input {
  create: [GameCreateWithoutPlayer1Input!]
  delete: [GameWhereUniqueInput!]
  connect: [GameWhereUniqueInput!]
  disconnect: [GameWhereUniqueInput!]
  update: [GameUpdateWithWhereUniqueWithoutPlayer1Input!]
  upsert: [GameUpsertWithWhereUniqueWithoutPlayer1Input!]
  deleteMany: [GameScalarWhereInput!]
  updateMany: [GameUpdateManyWithWhereNestedInput!]
}

input GameUpdateManyWithoutPlayer2Input {
  create: [GameCreateWithoutPlayer2Input!]
  delete: [GameWhereUniqueInput!]
  connect: [GameWhereUniqueInput!]
  disconnect: [GameWhereUniqueInput!]
  update: [GameUpdateWithWhereUniqueWithoutPlayer2Input!]
  upsert: [GameUpsertWithWhereUniqueWithoutPlayer2Input!]
  deleteMany: [GameScalarWhereInput!]
  updateMany: [GameUpdateManyWithWhereNestedInput!]
}

input GameUpdateManyWithWhereNestedInput {
  where: GameScalarWhereInput!
  data: GameUpdateManyDataInput!
}

input GameUpdateOneRequiredWithoutGameRoundsInput {
  create: GameCreateWithoutGameRoundsInput
  update: GameUpdateWithoutGameRoundsDataInput
  upsert: GameUpsertWithoutGameRoundsInput
  connect: GameWhereUniqueInput
}

input GameUpdateWithoutGameRoundsDataInput {
  player1: UserUpdateOneRequiredWithoutGamesAsPlayer1Input
  player2: UserUpdateOneRequiredWithoutGamesAsPlayer2Input
  whosTurn: WhosTurn
}

input GameUpdateWithoutPlayer1DataInput {
  player2: UserUpdateOneRequiredWithoutGamesAsPlayer2Input
  gameRounds: GameRoundUpdateManyWithoutGameInput
  whosTurn: WhosTurn
}

input GameUpdateWithoutPlayer2DataInput {
  player1: UserUpdateOneRequiredWithoutGamesAsPlayer1Input
  gameRounds: GameRoundUpdateManyWithoutGameInput
  whosTurn: WhosTurn
}

input GameUpdateWithWhereUniqueWithoutPlayer1Input {
  where: GameWhereUniqueInput!
  data: GameUpdateWithoutPlayer1DataInput!
}

input GameUpdateWithWhereUniqueWithoutPlayer2Input {
  where: GameWhereUniqueInput!
  data: GameUpdateWithoutPlayer2DataInput!
}

input GameUpsertWithoutGameRoundsInput {
  update: GameUpdateWithoutGameRoundsDataInput!
  create: GameCreateWithoutGameRoundsInput!
}

input GameUpsertWithWhereUniqueWithoutPlayer1Input {
  where: GameWhereUniqueInput!
  update: GameUpdateWithoutPlayer1DataInput!
  create: GameCreateWithoutPlayer1Input!
}

input GameUpsertWithWhereUniqueWithoutPlayer2Input {
  where: GameWhereUniqueInput!
  update: GameUpdateWithoutPlayer2DataInput!
  create: GameCreateWithoutPlayer2Input!
}

input GameWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  player1: UserWhereInput
  player2: UserWhereInput
  gameRounds_every: GameRoundWhereInput
  gameRounds_some: GameRoundWhereInput
  gameRounds_none: GameRoundWhereInput
  whosTurn: WhosTurn
  whosTurn_not: WhosTurn
  whosTurn_in: [WhosTurn!]
  whosTurn_not_in: [WhosTurn!]
  AND: [GameWhereInput!]
  OR: [GameWhereInput!]
  NOT: [GameWhereInput!]
}

input GameWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createArtist(data: ArtistCreateInput!): Artist!
  updateArtist(data: ArtistUpdateInput!, where: ArtistWhereUniqueInput!): Artist
  updateManyArtists(data: ArtistUpdateManyMutationInput!, where: ArtistWhereInput): BatchPayload!
  upsertArtist(where: ArtistWhereUniqueInput!, create: ArtistCreateInput!, update: ArtistUpdateInput!): Artist!
  deleteArtist(where: ArtistWhereUniqueInput!): Artist
  deleteManyArtists(where: ArtistWhereInput): BatchPayload!
  createGame(data: GameCreateInput!): Game!
  updateGame(data: GameUpdateInput!, where: GameWhereUniqueInput!): Game
  updateManyGames(data: GameUpdateManyMutationInput!, where: GameWhereInput): BatchPayload!
  upsertGame(where: GameWhereUniqueInput!, create: GameCreateInput!, update: GameUpdateInput!): Game!
  deleteGame(where: GameWhereUniqueInput!): Game
  deleteManyGames(where: GameWhereInput): BatchPayload!
  createGameRound(data: GameRoundCreateInput!): GameRound!
  updateGameRound(data: GameRoundUpdateInput!, where: GameRoundWhereUniqueInput!): GameRound
  updateManyGameRounds(data: GameRoundUpdateManyMutationInput!, where: GameRoundWhereInput): BatchPayload!
  upsertGameRound(where: GameRoundWhereUniqueInput!, create: GameRoundCreateInput!, update: GameRoundUpdateInput!): GameRound!
  deleteGameRound(where: GameRoundWhereUniqueInput!): GameRound
  deleteManyGameRounds(where: GameRoundWhereInput): BatchPayload!
  createSong(data: SongCreateInput!): Song!
  updateSong(data: SongUpdateInput!, where: SongWhereUniqueInput!): Song
  updateManySongs(data: SongUpdateManyMutationInput!, where: SongWhereInput): BatchPayload!
  upsertSong(where: SongWhereUniqueInput!, create: SongCreateInput!, update: SongUpdateInput!): Song!
  deleteSong(where: SongWhereUniqueInput!): Song
  deleteManySongs(where: SongWhereInput): BatchPayload!
  createSongAnswer(data: SongAnswerCreateInput!): SongAnswer!
  updateSongAnswer(data: SongAnswerUpdateInput!, where: SongAnswerWhereUniqueInput!): SongAnswer
  updateManySongAnswers(data: SongAnswerUpdateManyMutationInput!, where: SongAnswerWhereInput): BatchPayload!
  upsertSongAnswer(where: SongAnswerWhereUniqueInput!, create: SongAnswerCreateInput!, update: SongAnswerUpdateInput!): SongAnswer!
  deleteSongAnswer(where: SongAnswerWhereUniqueInput!): SongAnswer
  deleteManySongAnswers(where: SongAnswerWhereInput): BatchPayload!
  createSongQuestion(data: SongQuestionCreateInput!): SongQuestion!
  updateSongQuestion(data: SongQuestionUpdateInput!, where: SongQuestionWhereUniqueInput!): SongQuestion
  upsertSongQuestion(where: SongQuestionWhereUniqueInput!, create: SongQuestionCreateInput!, update: SongQuestionUpdateInput!): SongQuestion!
  deleteSongQuestion(where: SongQuestionWhereUniqueInput!): SongQuestion
  deleteManySongQuestions(where: SongQuestionWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  artist(where: ArtistWhereUniqueInput!): Artist
  artists(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Artist]!
  artistsConnection(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArtistConnection!
  game(where: GameWhereUniqueInput!): Game
  games(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game]!
  gamesConnection(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameConnection!
  gameRound(where: GameRoundWhereUniqueInput!): GameRound
  gameRounds(where: GameRoundWhereInput, orderBy: GameRoundOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GameRound]!
  gameRoundsConnection(where: GameRoundWhereInput, orderBy: GameRoundOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameRoundConnection!
  song(where: SongWhereUniqueInput!): Song
  songs(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song]!
  songsConnection(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SongConnection!
  songAnswer(where: SongAnswerWhereUniqueInput!): SongAnswer
  songAnswers(where: SongAnswerWhereInput, orderBy: SongAnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SongAnswer]!
  songAnswersConnection(where: SongAnswerWhereInput, orderBy: SongAnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SongAnswerConnection!
  songQuestion(where: SongQuestionWhereUniqueInput!): SongQuestion
  songQuestions(where: SongQuestionWhereInput, orderBy: SongQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SongQuestion]!
  songQuestionsConnection(where: SongQuestionWhereInput, orderBy: SongQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SongQuestionConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Song {
  id: ID!
  name: String!
  artist: Artist!
}

type SongAnswer {
  id: ID!
  correct: Boolean!
  guessedSong: Song!
  time: Int!
  player1SongQuestion: SongQuestion
  player2SongQuestion: SongQuestion
}

type SongAnswerConnection {
  pageInfo: PageInfo!
  edges: [SongAnswerEdge]!
  aggregate: AggregateSongAnswer!
}

input SongAnswerCreateInput {
  correct: Boolean!
  guessedSong: SongCreateOneInput!
  time: Int!
  player1SongQuestion: SongQuestionCreateOneWithoutPlayer1AnswerInput
  player2SongQuestion: SongQuestionCreateOneWithoutPlayer2AnswerInput
}

input SongAnswerCreateOneWithoutPlayer1SongQuestionInput {
  create: SongAnswerCreateWithoutPlayer1SongQuestionInput
  connect: SongAnswerWhereUniqueInput
}

input SongAnswerCreateOneWithoutPlayer2SongQuestionInput {
  create: SongAnswerCreateWithoutPlayer2SongQuestionInput
  connect: SongAnswerWhereUniqueInput
}

input SongAnswerCreateWithoutPlayer1SongQuestionInput {
  correct: Boolean!
  guessedSong: SongCreateOneInput!
  time: Int!
  player2SongQuestion: SongQuestionCreateOneWithoutPlayer2AnswerInput
}

input SongAnswerCreateWithoutPlayer2SongQuestionInput {
  correct: Boolean!
  guessedSong: SongCreateOneInput!
  time: Int!
  player1SongQuestion: SongQuestionCreateOneWithoutPlayer1AnswerInput
}

type SongAnswerEdge {
  node: SongAnswer!
  cursor: String!
}

enum SongAnswerOrderByInput {
  id_ASC
  id_DESC
  correct_ASC
  correct_DESC
  time_ASC
  time_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SongAnswerPreviousValues {
  id: ID!
  correct: Boolean!
  time: Int!
}

type SongAnswerSubscriptionPayload {
  mutation: MutationType!
  node: SongAnswer
  updatedFields: [String!]
  previousValues: SongAnswerPreviousValues
}

input SongAnswerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SongAnswerWhereInput
  AND: [SongAnswerSubscriptionWhereInput!]
  OR: [SongAnswerSubscriptionWhereInput!]
  NOT: [SongAnswerSubscriptionWhereInput!]
}

input SongAnswerUpdateInput {
  correct: Boolean
  guessedSong: SongUpdateOneRequiredInput
  time: Int
  player1SongQuestion: SongQuestionUpdateOneWithoutPlayer1AnswerInput
  player2SongQuestion: SongQuestionUpdateOneWithoutPlayer2AnswerInput
}

input SongAnswerUpdateManyMutationInput {
  correct: Boolean
  time: Int
}

input SongAnswerUpdateOneWithoutPlayer1SongQuestionInput {
  create: SongAnswerCreateWithoutPlayer1SongQuestionInput
  update: SongAnswerUpdateWithoutPlayer1SongQuestionDataInput
  upsert: SongAnswerUpsertWithoutPlayer1SongQuestionInput
  delete: Boolean
  disconnect: Boolean
  connect: SongAnswerWhereUniqueInput
}

input SongAnswerUpdateOneWithoutPlayer2SongQuestionInput {
  create: SongAnswerCreateWithoutPlayer2SongQuestionInput
  update: SongAnswerUpdateWithoutPlayer2SongQuestionDataInput
  upsert: SongAnswerUpsertWithoutPlayer2SongQuestionInput
  delete: Boolean
  disconnect: Boolean
  connect: SongAnswerWhereUniqueInput
}

input SongAnswerUpdateWithoutPlayer1SongQuestionDataInput {
  correct: Boolean
  guessedSong: SongUpdateOneRequiredInput
  time: Int
  player2SongQuestion: SongQuestionUpdateOneWithoutPlayer2AnswerInput
}

input SongAnswerUpdateWithoutPlayer2SongQuestionDataInput {
  correct: Boolean
  guessedSong: SongUpdateOneRequiredInput
  time: Int
  player1SongQuestion: SongQuestionUpdateOneWithoutPlayer1AnswerInput
}

input SongAnswerUpsertWithoutPlayer1SongQuestionInput {
  update: SongAnswerUpdateWithoutPlayer1SongQuestionDataInput!
  create: SongAnswerCreateWithoutPlayer1SongQuestionInput!
}

input SongAnswerUpsertWithoutPlayer2SongQuestionInput {
  update: SongAnswerUpdateWithoutPlayer2SongQuestionDataInput!
  create: SongAnswerCreateWithoutPlayer2SongQuestionInput!
}

input SongAnswerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  correct: Boolean
  correct_not: Boolean
  guessedSong: SongWhereInput
  time: Int
  time_not: Int
  time_in: [Int!]
  time_not_in: [Int!]
  time_lt: Int
  time_lte: Int
  time_gt: Int
  time_gte: Int
  player1SongQuestion: SongQuestionWhereInput
  player2SongQuestion: SongQuestionWhereInput
  AND: [SongAnswerWhereInput!]
  OR: [SongAnswerWhereInput!]
  NOT: [SongAnswerWhereInput!]
}

input SongAnswerWhereUniqueInput {
  id: ID
}

type SongConnection {
  pageInfo: PageInfo!
  edges: [SongEdge]!
  aggregate: AggregateSong!
}

input SongCreateInput {
  name: String!
  artist: ArtistCreateOneWithoutSongsInput!
}

input SongCreateManyWithoutArtistInput {
  create: [SongCreateWithoutArtistInput!]
  connect: [SongWhereUniqueInput!]
}

input SongCreateOneInput {
  create: SongCreateInput
  connect: SongWhereUniqueInput
}

input SongCreateWithoutArtistInput {
  name: String!
}

type SongEdge {
  node: Song!
  cursor: String!
}

enum SongOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SongPreviousValues {
  id: ID!
  name: String!
}

type SongQuestion {
  id: ID!
  song: Song!
  player1Answer: SongAnswer
  player2Answer: SongAnswer
  gameRound: GameRound!
}

type SongQuestionConnection {
  pageInfo: PageInfo!
  edges: [SongQuestionEdge]!
  aggregate: AggregateSongQuestion!
}

input SongQuestionCreateInput {
  song: SongCreateOneInput!
  player1Answer: SongAnswerCreateOneWithoutPlayer1SongQuestionInput
  player2Answer: SongAnswerCreateOneWithoutPlayer2SongQuestionInput
  gameRound: GameRoundCreateOneWithoutSongQuestionsInput!
}

input SongQuestionCreateManyWithoutGameRoundInput {
  create: [SongQuestionCreateWithoutGameRoundInput!]
  connect: [SongQuestionWhereUniqueInput!]
}

input SongQuestionCreateOneWithoutPlayer1AnswerInput {
  create: SongQuestionCreateWithoutPlayer1AnswerInput
  connect: SongQuestionWhereUniqueInput
}

input SongQuestionCreateOneWithoutPlayer2AnswerInput {
  create: SongQuestionCreateWithoutPlayer2AnswerInput
  connect: SongQuestionWhereUniqueInput
}

input SongQuestionCreateWithoutGameRoundInput {
  song: SongCreateOneInput!
  player1Answer: SongAnswerCreateOneWithoutPlayer1SongQuestionInput
  player2Answer: SongAnswerCreateOneWithoutPlayer2SongQuestionInput
}

input SongQuestionCreateWithoutPlayer1AnswerInput {
  song: SongCreateOneInput!
  player2Answer: SongAnswerCreateOneWithoutPlayer2SongQuestionInput
  gameRound: GameRoundCreateOneWithoutSongQuestionsInput!
}

input SongQuestionCreateWithoutPlayer2AnswerInput {
  song: SongCreateOneInput!
  player1Answer: SongAnswerCreateOneWithoutPlayer1SongQuestionInput
  gameRound: GameRoundCreateOneWithoutSongQuestionsInput!
}

type SongQuestionEdge {
  node: SongQuestion!
  cursor: String!
}

enum SongQuestionOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SongQuestionPreviousValues {
  id: ID!
}

input SongQuestionScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [SongQuestionScalarWhereInput!]
  OR: [SongQuestionScalarWhereInput!]
  NOT: [SongQuestionScalarWhereInput!]
}

type SongQuestionSubscriptionPayload {
  mutation: MutationType!
  node: SongQuestion
  updatedFields: [String!]
  previousValues: SongQuestionPreviousValues
}

input SongQuestionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SongQuestionWhereInput
  AND: [SongQuestionSubscriptionWhereInput!]
  OR: [SongQuestionSubscriptionWhereInput!]
  NOT: [SongQuestionSubscriptionWhereInput!]
}

input SongQuestionUpdateInput {
  song: SongUpdateOneRequiredInput
  player1Answer: SongAnswerUpdateOneWithoutPlayer1SongQuestionInput
  player2Answer: SongAnswerUpdateOneWithoutPlayer2SongQuestionInput
  gameRound: GameRoundUpdateOneRequiredWithoutSongQuestionsInput
}

input SongQuestionUpdateManyWithoutGameRoundInput {
  create: [SongQuestionCreateWithoutGameRoundInput!]
  delete: [SongQuestionWhereUniqueInput!]
  connect: [SongQuestionWhereUniqueInput!]
  disconnect: [SongQuestionWhereUniqueInput!]
  update: [SongQuestionUpdateWithWhereUniqueWithoutGameRoundInput!]
  upsert: [SongQuestionUpsertWithWhereUniqueWithoutGameRoundInput!]
  deleteMany: [SongQuestionScalarWhereInput!]
}

input SongQuestionUpdateOneWithoutPlayer1AnswerInput {
  create: SongQuestionCreateWithoutPlayer1AnswerInput
  update: SongQuestionUpdateWithoutPlayer1AnswerDataInput
  upsert: SongQuestionUpsertWithoutPlayer1AnswerInput
  delete: Boolean
  disconnect: Boolean
  connect: SongQuestionWhereUniqueInput
}

input SongQuestionUpdateOneWithoutPlayer2AnswerInput {
  create: SongQuestionCreateWithoutPlayer2AnswerInput
  update: SongQuestionUpdateWithoutPlayer2AnswerDataInput
  upsert: SongQuestionUpsertWithoutPlayer2AnswerInput
  delete: Boolean
  disconnect: Boolean
  connect: SongQuestionWhereUniqueInput
}

input SongQuestionUpdateWithoutGameRoundDataInput {
  song: SongUpdateOneRequiredInput
  player1Answer: SongAnswerUpdateOneWithoutPlayer1SongQuestionInput
  player2Answer: SongAnswerUpdateOneWithoutPlayer2SongQuestionInput
}

input SongQuestionUpdateWithoutPlayer1AnswerDataInput {
  song: SongUpdateOneRequiredInput
  player2Answer: SongAnswerUpdateOneWithoutPlayer2SongQuestionInput
  gameRound: GameRoundUpdateOneRequiredWithoutSongQuestionsInput
}

input SongQuestionUpdateWithoutPlayer2AnswerDataInput {
  song: SongUpdateOneRequiredInput
  player1Answer: SongAnswerUpdateOneWithoutPlayer1SongQuestionInput
  gameRound: GameRoundUpdateOneRequiredWithoutSongQuestionsInput
}

input SongQuestionUpdateWithWhereUniqueWithoutGameRoundInput {
  where: SongQuestionWhereUniqueInput!
  data: SongQuestionUpdateWithoutGameRoundDataInput!
}

input SongQuestionUpsertWithoutPlayer1AnswerInput {
  update: SongQuestionUpdateWithoutPlayer1AnswerDataInput!
  create: SongQuestionCreateWithoutPlayer1AnswerInput!
}

input SongQuestionUpsertWithoutPlayer2AnswerInput {
  update: SongQuestionUpdateWithoutPlayer2AnswerDataInput!
  create: SongQuestionCreateWithoutPlayer2AnswerInput!
}

input SongQuestionUpsertWithWhereUniqueWithoutGameRoundInput {
  where: SongQuestionWhereUniqueInput!
  update: SongQuestionUpdateWithoutGameRoundDataInput!
  create: SongQuestionCreateWithoutGameRoundInput!
}

input SongQuestionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  song: SongWhereInput
  player1Answer: SongAnswerWhereInput
  player2Answer: SongAnswerWhereInput
  gameRound: GameRoundWhereInput
  AND: [SongQuestionWhereInput!]
  OR: [SongQuestionWhereInput!]
  NOT: [SongQuestionWhereInput!]
}

input SongQuestionWhereUniqueInput {
  id: ID
}

input SongScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [SongScalarWhereInput!]
  OR: [SongScalarWhereInput!]
  NOT: [SongScalarWhereInput!]
}

type SongSubscriptionPayload {
  mutation: MutationType!
  node: Song
  updatedFields: [String!]
  previousValues: SongPreviousValues
}

input SongSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SongWhereInput
  AND: [SongSubscriptionWhereInput!]
  OR: [SongSubscriptionWhereInput!]
  NOT: [SongSubscriptionWhereInput!]
}

input SongUpdateDataInput {
  name: String
  artist: ArtistUpdateOneRequiredWithoutSongsInput
}

input SongUpdateInput {
  name: String
  artist: ArtistUpdateOneRequiredWithoutSongsInput
}

input SongUpdateManyDataInput {
  name: String
}

input SongUpdateManyMutationInput {
  name: String
}

input SongUpdateManyWithoutArtistInput {
  create: [SongCreateWithoutArtistInput!]
  delete: [SongWhereUniqueInput!]
  connect: [SongWhereUniqueInput!]
  disconnect: [SongWhereUniqueInput!]
  update: [SongUpdateWithWhereUniqueWithoutArtistInput!]
  upsert: [SongUpsertWithWhereUniqueWithoutArtistInput!]
  deleteMany: [SongScalarWhereInput!]
  updateMany: [SongUpdateManyWithWhereNestedInput!]
}

input SongUpdateManyWithWhereNestedInput {
  where: SongScalarWhereInput!
  data: SongUpdateManyDataInput!
}

input SongUpdateOneRequiredInput {
  create: SongCreateInput
  update: SongUpdateDataInput
  upsert: SongUpsertNestedInput
  connect: SongWhereUniqueInput
}

input SongUpdateWithoutArtistDataInput {
  name: String
}

input SongUpdateWithWhereUniqueWithoutArtistInput {
  where: SongWhereUniqueInput!
  data: SongUpdateWithoutArtistDataInput!
}

input SongUpsertNestedInput {
  update: SongUpdateDataInput!
  create: SongCreateInput!
}

input SongUpsertWithWhereUniqueWithoutArtistInput {
  where: SongWhereUniqueInput!
  update: SongUpdateWithoutArtistDataInput!
  create: SongCreateWithoutArtistInput!
}

input SongWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  artist: ArtistWhereInput
  AND: [SongWhereInput!]
  OR: [SongWhereInput!]
  NOT: [SongWhereInput!]
}

input SongWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  artist(where: ArtistSubscriptionWhereInput): ArtistSubscriptionPayload
  game(where: GameSubscriptionWhereInput): GameSubscriptionPayload
  gameRound(where: GameRoundSubscriptionWhereInput): GameRoundSubscriptionPayload
  song(where: SongSubscriptionWhereInput): SongSubscriptionPayload
  songAnswer(where: SongAnswerSubscriptionWhereInput): SongAnswerSubscriptionPayload
  songQuestion(where: SongQuestionSubscriptionWhereInput): SongQuestionSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  gamesAsPlayer1(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game!]
  gamesAsPlayer2(where: GameWhereInput, orderBy: GameOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Game!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  gamesAsPlayer1: GameCreateManyWithoutPlayer1Input
  gamesAsPlayer2: GameCreateManyWithoutPlayer2Input
}

input UserCreateOneWithoutGamesAsPlayer1Input {
  create: UserCreateWithoutGamesAsPlayer1Input
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutGamesAsPlayer2Input {
  create: UserCreateWithoutGamesAsPlayer2Input
  connect: UserWhereUniqueInput
}

input UserCreateWithoutGamesAsPlayer1Input {
  name: String!
  gamesAsPlayer2: GameCreateManyWithoutPlayer2Input
}

input UserCreateWithoutGamesAsPlayer2Input {
  name: String!
  gamesAsPlayer1: GameCreateManyWithoutPlayer1Input
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  gamesAsPlayer1: GameUpdateManyWithoutPlayer1Input
  gamesAsPlayer2: GameUpdateManyWithoutPlayer2Input
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateOneRequiredWithoutGamesAsPlayer1Input {
  create: UserCreateWithoutGamesAsPlayer1Input
  update: UserUpdateWithoutGamesAsPlayer1DataInput
  upsert: UserUpsertWithoutGamesAsPlayer1Input
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutGamesAsPlayer2Input {
  create: UserCreateWithoutGamesAsPlayer2Input
  update: UserUpdateWithoutGamesAsPlayer2DataInput
  upsert: UserUpsertWithoutGamesAsPlayer2Input
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutGamesAsPlayer1DataInput {
  name: String
  gamesAsPlayer2: GameUpdateManyWithoutPlayer2Input
}

input UserUpdateWithoutGamesAsPlayer2DataInput {
  name: String
  gamesAsPlayer1: GameUpdateManyWithoutPlayer1Input
}

input UserUpsertWithoutGamesAsPlayer1Input {
  update: UserUpdateWithoutGamesAsPlayer1DataInput!
  create: UserCreateWithoutGamesAsPlayer1Input!
}

input UserUpsertWithoutGamesAsPlayer2Input {
  update: UserUpdateWithoutGamesAsPlayer2DataInput!
  create: UserCreateWithoutGamesAsPlayer2Input!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  gamesAsPlayer1_every: GameWhereInput
  gamesAsPlayer1_some: GameWhereInput
  gamesAsPlayer1_none: GameWhereInput
  gamesAsPlayer2_every: GameWhereInput
  gamesAsPlayer2_some: GameWhereInput
  gamesAsPlayer2_none: GameWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}

enum WhosTurn {
  PLAYER1
  PLAYER2
}
`
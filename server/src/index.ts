import { prisma } from "../generated/prisma-client";
import { ApolloServer, PubSub } from "apollo-server-express";
import { Context } from "./types";
import { resolvers } from "./resolvers";
import { importSchema } from "graphql-import";
import * as express from "express";
import { Server } from "ws";
import { parse } from "cookie";
import * as url from "url";

const context: Context = { prisma };

const typeDefs = importSchema("./schema.graphql");

export const pubsub = new PubSub();

const wss = new Server({ port: 40510 });

wss.on("connection", async (ws, req) => {
  console.log(new URLSearchParams(url.parse(req.url).query).get("username"));
  console.log("Connnection made!");

  const users = await prisma.users();

  console.log(users);

  ws.on("message", function(message) {
    console.log("received: %s", message);
  });
  setTimeout(() => {
    console.log("Send hej");
    ws.send("Question over");
  }, 5000);
});

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  context
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀  Server ready at ${server.graphqlPath}`);
});

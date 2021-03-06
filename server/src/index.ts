import { prisma } from "../generated/prisma-client";
import { ApolloServer, PubSub } from "apollo-server-express";
import { Context } from "./types";
import { resolvers } from "./resolvers";
import { importSchema } from "graphql-import";
import * as express from "express";
import { Server } from "ws";
import { parse } from "cookie";
import * as url from "url";
import { createServer } from "http";

const typeDefs = importSchema("./schema.graphql");

export const pubsub = new PubSub();

// const wss = new Server({ port: 40510 });

// wss.on("connection", async (ws, req) => {
//   console.log(new URLSearchParams(url.parse(req.url).query).get("username"));
//   console.log("Connnection made!");

//   const users = await prisma.users();

//   console.log(users);

//   ws.on("message", function(message) {
//     console.log("received: %s", message);
//   });
//   setTimeout(() => {
//     console.log("Send hej");
//     ws.send("Question over");
//   }, 5000);
// });

const app = express();

app.use("/static", express.static("static"));

const server = new ApolloServer({
  typeDefs: typeDefs as any,
  resolvers: resolvers as any,
  context: ({ req, connection }): Context => {
    if (connection) {
      console.log("Connection: ", connection.context);

      return { prisma, userId: connection.context["user-id"] };
    } else {
      return { prisma, userId: req.headers["user-id"] };
    }
  }
});

server.applyMiddleware({ app, path: "/graphql" });

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: 4000 }, () => {
  console.log(`🚀  Server ready at ${server.graphqlPath}`);
  console.log(`🚀  Server ready at ${server.subscriptionsPath}`);
});

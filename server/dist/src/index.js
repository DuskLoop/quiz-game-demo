"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_client_1 = require("../generated/prisma-client");
var apollo_server_express_1 = require("apollo-server-express");
var resolvers_1 = require("./resolvers");
var graphql_import_1 = require("graphql-import");
var express = require("express");
var http_1 = require("http");
var typeDefs = graphql_import_1.importSchema("./schema.graphql");
exports.pubsub = new apollo_server_express_1.PubSub();
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
var app = express();
app.use("/static", express.static("static"));
var server = new apollo_server_express_1.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers_1.resolvers,
    context: function (_a) {
        var req = _a.req, connection = _a.connection;
        if (connection) {
            console.log("Connection: ", connection.context);
            return { prisma: prisma_client_1.prisma, userId: connection.context["user-id"] };
        }
        else {
            return { prisma: prisma_client_1.prisma, userId: req.headers["user-id"] };
        }
    }
});
server.applyMiddleware({ app: app, path: "/graphql" });
var httpServer = http_1.createServer(app);
server.installSubscriptionHandlers(httpServer);
httpServer.listen({ port: 4000 }, function () {
    console.log("\uD83D\uDE80  Server ready at " + server.graphqlPath);
    console.log("\uD83D\uDE80  Server ready at " + server.subscriptionsPath);
});
//# sourceMappingURL=index.js.map
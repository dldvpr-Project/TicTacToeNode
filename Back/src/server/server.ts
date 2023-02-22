import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { buildSchemaSync } from "type-graphql";
import express from "express";

async function startApolloServer() {
    try {
        const app = express();

        const schema = buildSchemaSync({
            resolvers: [TicTacToeResolver],
        });

        const server = new ApolloServer({ schema });

        await server.start();

        server.applyMiddleware({ app });

        const PORT = process.env.PORT || 4000;
        await app.listen(PORT, () =>
            console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
        );
    } catch (error) {
        console.error(error);
    }
}

startApolloServer();

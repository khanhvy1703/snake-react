import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { connect } from 'mongoose';
import * as dotenv from 'dotenv';

//Resolvers
import { SnakeReSolvers } from './snake.resolvers';

const main = async () => {
  dotenv.config();

  const schema = await buildSchema({
    resolvers: [SnakeReSolvers],
    emitSchemaFile: true,
    validate: false,
  });

  const mongoose = await connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qhe84.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)

  await mongoose.connection;

  const server = new ApolloServer({ schema: schema });
  const expressServer: Express.Application = Express();

  await server.start();

  server.applyMiddleware({ app: expressServer });

  expressServer.listen({ port: process.env.PORT }, () =>
    console.log(`Server ready and listening at ==> http://localhost:${process.env.PORT}${server.graphqlPath}`)
  );
};

main().catch((error) => {
  console.log(error, 'error');
});
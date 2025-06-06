// import { ApolloServer } from 'apollo-server';
// import { schema } from './graphql/schema';
// import { PrismaClient } from '@prisma/client';
// import { createContext } from './context';
//
// const prisma = new PrismaClient();
//
// const server = new ApolloServer({
//     schema,
//     context: createContext,
// });
//
// server.listen().then(({ url }) => {
//     console.log(`🚀 Server ready at ${url}`);
// });



// // server.ts
// import express from 'express';
// import cors from 'cors';
// import { ApolloServer } from 'apollo-server-express';
// import { schema } from './graphql/schema';
// import { createContext } from './context';
//
// const app = express();
//
// // Add any middleware you want (e.g., authentication, logging, CORS)
// app.use(cors());
// // app.use(authMiddleware);
//
// const server = new ApolloServer({
//     schema,
//     context: createContext, // This remains the same
// });
//
// await server.start();
// server.applyMiddleware({ app, path: '/graphql' });
//
// // Start the express server
// app.listen({ port: 4000 }, () => {
//     console.log(`🚀 Server ready at http://localhost:4000/graphql`);
// });

import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './graphql/schema';
import { createContext } from './context';

const  startServer = async () => {
    const app = express();

    // Middleware
    app.use(cors());
    // app.use(authMiddleware);

    const server = new ApolloServer({
        schema,
        context: createContext,
    });

    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    app.listen({ port: 4000 }, () => {
        console.log(`🚀 Server ready at http://localhost:4000/graphql`);
    });
}

startServer();

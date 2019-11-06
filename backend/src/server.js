import { ApolloServer, gql } from 'apollo-server';

import * as connectors from './connectors';
import logger from './lib/logger';
import * as models from './models';
import { typeDefs, resolvers } from './schema';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ ...models }),
});

server.listen().then(({ url }) => {
    logger.info(`🚀  Server ready at ${url}`);
});

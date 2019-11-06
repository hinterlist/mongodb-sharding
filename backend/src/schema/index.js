import * as resolvers from './resolvers';
import * as schemas from './schemas';

export { resolvers };
export const typeDefs = Object.values(schemas);

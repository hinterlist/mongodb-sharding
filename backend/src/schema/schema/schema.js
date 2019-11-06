import { gql } from 'apollo-server';

export default gql`
    schema {
        query: Query
        mutation: Mutation
    }
`;

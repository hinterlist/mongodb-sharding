import { gql } from 'apollo-boost';

export const USER_FRAGMENT = gql`
    fragment User on User {
        id
        email
        firstName
        lastName
        country
    }
`;

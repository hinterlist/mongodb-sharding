import { gql } from 'apollo-boost';

import { USER_FRAGMENT } from './Fragment';

export const USERS_LIST_QUERY = gql`
    query users($country: CountryCode, $search: String) {
        users(country: $country, search: $search) {
            ...User
        }
    }

    ${USER_FRAGMENT}
`;

export const BOOKINGS_LIST_QUERY = gql`
    query bookins {
        bookings {
            id
            price
            user {
                ...User
            }
        }
    }

    ${USER_FRAGMENT}
`;

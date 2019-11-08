import { gql } from 'apollo-boost';

import { USER_FRAGMENT } from './Fragment';

export const ADD_USER_MUTATION = gql`
    mutation addUser($input: AddUserInput!) {
        addUser(input: $input) {
            user {
                ...User
            }
        }
    }

    ${USER_FRAGMENT}
`;

export const UPDATE_USER_MUTATION = gql`
    mutation updateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
            user {
                ...User
            }
        }
    }

    ${USER_FRAGMENT}
`;

export const REMOVE_USER_MUTATION = gql`
    mutation removeUser($input: RemoveUserInput!) {
        removeUser(input: $input) {
            id
        }
    }
`;

export const ADD_BOOKING_MUTATION = gql`
    mutation addBooking($input: AddBookingInput!) {
        addBooking(input: $input) {
            booking {
                id
                price
                user {
                    ...User
                }
            }
        }
    }

    ${USER_FRAGMENT}
`;

export const UPDATE_BOOKING_MUTATION = gql`
    mutation updateBooking($input: UpdateBookingInput!) {
        updateBooking(input: $input) {
            booking {
                id
                price
                user {
                    ...User
                }
            }
        }
    }

    ${USER_FRAGMENT}
`;

export const REMOVE_BOOKING_MUTATION = gql`
    mutation removeBooking($input: RemoveBookingInput!) {
        removeBooking(input: $input) {
            id
        }
    }
`;

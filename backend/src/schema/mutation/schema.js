import { gql } from 'apollo-server-express';

export default gql`
    type Mutation {
        # Create a new booking
        addBooking(input: AddBookingInput!): AddBookingPayload!

        # Remove specified booking
        updateBooking(input: UpdateBookingInput!): UpdateBookingPayload!

        # Remove specified booking
        removeBooking(input: RemoveBookingInput!): RemoveBookingPayload!

        # Create a new user
        addUser(input: AddUserInput): AddUserPayload!

        # Update existing user identified by ID
        updateUser(input: UpdateUserInput!): UpdateUserPayload!

        # Remove existing user identified by ID
        removeUser(input: RemoveUserInput!): RemoveUserPayload!
    }
`;

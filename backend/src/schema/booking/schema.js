import { gql } from 'apollo-server';

export default gql`
    # Booking entity
    type Booking {
        # The unique  ID
        id: ID!

        # User booked the service
        user: User!

        # The price of the service
        price: Float!

        # Timestamp when booking was created
        createdAt: String!
    }

    # Create a new booking
    input AddBookingInput {
        # User's ID
        user: ID!

        # Price of the service
        price: Float!
    }

    # A payload for a new booking
    type AddBookingPayload {
        booking: Booking!
    }

    # Remove existing booking by ID
    input RemoveBookingInput {
        # Booking ID
        id: ID!
    }

    # A payload for removed booking
    type RemoveBookingPayload {
        # Booking ID
        id: ID!
    }

    # Update existing booking by ID
    input UpdateBookingInput {
        # An ID of booking that need to be updated
        id: ID!

        # User's ID
        user: ID

        # Price of the service
        price: Float
    }

    # A payload for updated booking
    type UpdateBookingPayload {
        booking: Booking!
    }
`;

import { gql } from 'apollo-server';

export default gql`
    type Query {
        # Get list of users
        users(
            # Search users by some query string
            search: String
            # Limit results by country (ISO 3166-1)
            country: CountryCode
        ): [User!]

        bookings: [Booking!]
    }
`;

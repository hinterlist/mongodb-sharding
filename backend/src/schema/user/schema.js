import { gql } from 'apollo-server-express';

export default gql`
    # User entity
    type User {
        # The unique ID
        id: ID!

        # User's email address
        email: String

        # User's first name
        firstName: String!

        # User's last name
        lastName: String!

        # Country code ISO3166
        country: CountryCode!

        # Timestamp when user was created
        createdAt: String!
    }

    # Create a new user
    input AddUserInput {
        # User's email address
        email: String

        # User's first name
        firstName: String!

        # User's last name
        lastName: String!

        # Country code ISO3166
        country: CountryCode!
    }

    # A payload for a new user
    type AddUserPayload {
        # A new user entity
        user: User!
    }

    # An input to update existing user
    input UpdateUserInput {
        # User's ID
        id: ID!

        # User's email address
        email: String

        # User's first name
        firstName: String

        # User's last name
        lastName: String

        # Country code ISO3166
        country: CountryCode
    }

    # A payload for updated user
    type UpdateUserPayload {
        # Updated user entity
        user: User!
    }

    # Remove existing user by ID
    input RemoveUserInput {
        # User's ID
        id: ID!
    }

    # A payload for deleted user
    type RemoveUserPayload {
        # User's ID
        id: ID!
    }
`;

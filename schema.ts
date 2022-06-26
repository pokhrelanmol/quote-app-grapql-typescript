import { gql } from "apollo-server";
const typeDefs = gql`
    type User {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        _id: ID!
        quotes: [Quote]!
    }
    type QuoteWithUser {
        title: String
        by: User
    }
    type Quote {
        title: String
        by: ID
        user: User
    }
    type Query {
        users: [User]
        quotes: [QuoteWithUser]
        user(_id: ID!): User
        quote(_id: ID!): [Quote]
    }
    type JwtAccessToken {
        accessToken: String
    }
    type Mutation {
        signUpUser(newUser: UserSignUpInput): User
        signInUser(userCredential: UserSignInInput): JwtAccessToken
        createQuote(title: String): String
    }
    input UserSignUpInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }
    input UserSignInInput {
        email: String!
        password: String!
    }
`;
export default typeDefs;

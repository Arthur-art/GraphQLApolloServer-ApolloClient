import {gql} from "apollo-server"

export const usersTypeDefs = gql`
    type User {
         id: ID!
         firstName: String!
         lastName: String!
         userName: String!
         indexRef: Int!
         createdAt: String!
    }

   extend type Query {
        users: [User!]!
        user(id: ID!): User!
    }
`

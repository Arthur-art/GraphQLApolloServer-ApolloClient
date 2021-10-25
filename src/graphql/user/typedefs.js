import {gql} from "apollo-server"

export const usersTypeDefs = gql`
    type User {
        name: String!
        age: Int!
    }

   extend type Query {
        users: [User!]!

    }
`

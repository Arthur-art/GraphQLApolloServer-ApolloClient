import {gql} from "apollo-server"

export const postTypeDefs = gql`
    type Post{
    id: ID!
    title: String!
    body: String!
    userId: Int!,
    indexRef: Int!,
    createdAt: String!
    unixTimestamp: String!
    }

  extend type Query{
        post(id:ID!): Post!
        posts: [Post!]!
        
    }

`
import {gql} from "apollo-server"
import { usersResolvers } from "./user/resolvers";
import { usersTypeDefs } from "./user/typeDefs";

const rootTypesDefs = gql`
    type Query{
        hello: String!
    }
`

const rootResolvers = {
    Query:{
        hello: () => "Hello"
    }
}

export const typeDefs = [rootTypesDefs, usersTypeDefs];
export const resolvers = [rootResolvers, usersResolvers];
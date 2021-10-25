import {gql} from "apollo-server"
import { postResolvers } from "./post/resolvers";
import { postTypeDefs } from "./post/typedefs";
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

export const typeDefs = [rootTypesDefs, usersTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, usersResolvers, postResolvers];
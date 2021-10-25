import {gql} from "apollo-server"

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

export const typeDefs = [rootTypesDefs];
export const resolvers = [rootResolvers];
import {ApolloServer, gql} from "apollo-server"
import { resolvers, typeDefs } from "./graphql/schema";

const port = 4003;
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen(port).then(({url})=>{
    console.log(`server rodando na url ${url}`)
})
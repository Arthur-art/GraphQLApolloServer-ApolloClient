import {ApolloServer, gql} from "apollo-server"
import { resolvers, typeDefs } from "./graphql/schema";

const port = 4003;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:()=>{
        return{
            contextId: 1910
        }
    }
});

server.listen(port).then(({url})=>{
    console.log(`server rodando na url ${url}`)
})
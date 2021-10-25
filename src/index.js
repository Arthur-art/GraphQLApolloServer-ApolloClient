import {ApolloServer, gql} from "apollo-server"
import { resolvers, typeDefs } from "./graphql/schema";
import fetch from 'cross-fetch';

const port = 4003;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:()=>{
        return{
            fetch
        }
    }
});

server.listen(port).then(({url})=>{
    console.log(`server rodando na url ${url}`)
})
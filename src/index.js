import {ApolloServer, gql} from "apollo-server"

const port = 4003;
const server = new ApolloServer({
    typeDefs: gql`
        type Query{
            hello: String!
        }
    `
    
});

server.listen(port).then(({url})=>{
    console.log(`server rodando na url ${url}`)
})
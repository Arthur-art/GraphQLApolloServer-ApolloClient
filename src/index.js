import {ApolloServer, gql} from "apollo-server"

const port = 4003;
const server = new ApolloServer({
    typeDefs: gql`
        type User {
            name: String!
            age: Int!
        }
        type Query{
            hello: String!
            user: User!
            
        }
    `,
    resolvers: {
        Query:{
            hello: () => "Hello",
            user: () =>{
                return {
                    name: "Arthur",
                    age: 25
                }
            }
        }
    }

});

server.listen(port).then(({url})=>{
    console.log(`server rodando na url ${url}`)
})
# Configurando o ambiente
- yarn init -y
- yarn add apollo-server graphql

# Trabalhando com sucrase
- yarn add sucrase-register
- node -r sucrase/register index

# Trabalhando com nodemon
- yarn add -D nodemon

# Trabalhando com json server
- yarn add json-server

# Fragment graphql

```gql
fragment user on User{
   createdAt
   firstName
   id
   indexRef
   lastName
   userName
}

query FilterId{
 user1:user(id: 115) {
   ...user
 }
```
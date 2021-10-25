function users(){
    return [
        {
            name: "Arthur",
            age: 25
        },
        {
            name:"Ivar",
            age: 25
        }
    ]
}

export const usersResolvers = {
    Query:{
        users
    }
}
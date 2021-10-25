const post = ()=>{
    return {
        id:"73918201--41294198",
        title: "POST"
    }
}

const posts = () =>{
    return [
        {
            id:"73918201--41294198",
            title: "POST"
        },
        {
            id:"73918201--41294198",
            title: "POST"
        },
        {
            id:"73918201--41294198",
            title: "POST"
        },
        {
            id:"73918201--41294198",
            title: "POST"
        }
    ]
}

export const postResolvers = {
    Query:{
        post,
        posts
    }
}
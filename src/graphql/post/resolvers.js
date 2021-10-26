import fetch from "cross-fetch";

const posts = async (_,__,{postRequest})=>{
    const posts = await postRequest;
    return posts;
}

const post = async (_,args,{postRequest}) =>{
    const posts = await postRequest;
    const filterPost = posts.find((value)=>{
        if(value.id === args.id){
            return value
        }
    })
    if (filterPost) return filterPost;
}

export const postResolvers = {
    Query:{
        post,
        posts
    },
    Post:{
        unixTimestamp: ({createdAt}) =>{
            const timestamp = new Date(createdAt).getTime() / 1000;
            return Math.floor(timestamp);
        }
    }
}
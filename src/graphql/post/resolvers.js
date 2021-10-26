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
const user = async ({userId},_,{userRequest})=>{
    const user = await userRequest;

    const filterUser = user.find((value)=>{
        if(value.id === userId){
            return value
        }
    })
    return filterUser;
}

export const postResolvers = {
    Query:{
        post,
        posts,
    },
    Post:{
        unixTimestamp: ({createdAt}) =>{
            const timestamp = new Date(createdAt).getTime() / 1000;
            return Math.floor(timestamp);
        },
        user
    }
}
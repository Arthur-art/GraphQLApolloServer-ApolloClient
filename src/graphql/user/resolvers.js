const users = async (_,__, {userRequest})=>{
 
  const users = await userRequest;
  return users;
}

const user = async (_,args,{userRequest}) =>{

    const users = await userRequest;
    const filterUser = await users.find((value)=>{
        if(value.id === args.id){
            return value;
        }
    })
    if(filterUser) return filterUser;
        
    
}

export const usersResolvers = {
    Query:{
        users,
        user
    }
}
const users = async (_,__, {fetch})=>{
 const users = await fetch('http://localhost:3000/users')
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      return res.json();
    })
    .then(user => {
      return user
    })
    .catch(err => {
      console.error(err);
    });
  return users;
}

const user = async (_,args,{fetch}) =>{
    const user = await fetch("http://localhost:3000/users")
    .then((response)=>{
        return response.json()
    })
    const filterUser = user.find((value)=>{
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
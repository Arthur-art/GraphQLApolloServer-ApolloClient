import fetch from 'cross-fetch';

const users = async ()=>{
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

export const usersResolvers = {
    Query:{
        users
    }
}
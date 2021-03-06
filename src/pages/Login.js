import React, { useState } from 'react';
import { login } from "../services/api";

const Login = () => {
  const [loading, setLoading] = useState(false)

  function send(event){
    event.preventDefault();
    setLoading(true);

    const list = event.target.elements;
    const data = {};
    
    for (const element of list){
      if(!element.name) continue;
      data[element.name] = element.value;
    }
    login(data).finally(()=> setLoading(false))
    setTimeout(()=> setLoading(false),1000)
}
  
  return(
  <>
  <h1>Login Page</h1>
    <form onSubmit={send} style={{display:"flex",flexDirection:"column",width:"50%"}}>
      <label>Email</label>
      <input type="email" name="email" />
      <labe>Password</labe>
      <input type="password" name="password" />
      <button type="submit">Login</button>
      {loading && <p>Loading...</p>}    
    </form>
  </>
  );
}
  export default Login;
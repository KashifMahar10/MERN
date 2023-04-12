import React, { useState } from 'react'
import signup2 from '../../src/Images/signup2.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e)=>{
    e.preventDefault();
   const res = await fetch('/login',{
    method: "POST",
        headers:
        {
          "Content-Type": "application/json "
        }, body:JSON.stringify({
          email, 
          password
        })

   });

   const data = res.json();

   if(data.status === 422 || !data)
   {
     window.alert("Invalid Details");
     console.log("Invalid Details");
   }
   else{
     window.alert("Login Succesfull");
     console.log("Login Succesfull");

     // histroy.push('/Login');

   }


  }


  return (
   <>
   <div className='containerBox'>
   <div className="container1">
    <figure>
      {/* <img src={signup2} alt="" id='bg-image' srcset="" /> */}
    </figure>

   </div>
   <div className="containerLog">
  
   <div className='signup-content'>
    <div className='signup-form'>
    <h2 className='form-title'>Sign in </h2>
    <form action="" id='register-from' className='register-from'>
    <div class="mb-3">
    
      <label htmlFor="Email"></label>
      <input type="Email" class="form-control" name='email' id="Email" value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder="Email"/>

      <label htmlFor="password"></label>
      <input type="password" class="form-control" name='password' id="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>

      <div class="col-12">
    <button type="submit" name='signup' id='signup' class="btn btn-primary button1" onClick={loginUser}>Login</button>
  </div>

    </div>
    </form>
    

    </div>

    </div>
   </div>

   </div>
   
   </>
  )
}

export default Login

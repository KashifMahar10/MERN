    import React, { useState} from 'react';
    // import  {useHistory} from 'react';
    


    const Register = () => { 
      // const histroy = useHistory;
      const [user, setUser]= useState({
        name:"", email:"", phone:"", work:"", password:"", cpassword:""
      });
      let  name, value;
      const handleInput = (e)=>{
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value})

      }
      const PostData = async (e)=>{
        e.preventDefault();
        
       const { name,email, phone, work, password, cpassword } = user;

      const res =  await fetch('/register', {
        method: "POST",
        headers:
        {
          "Content-Type": "application/json "
        },
        body:JSON.stringify({
          name,email, phone, work, password, cpassword
        })
      
      });

      const data = res.json();

      if(data.status === 422 || !data)
      {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      }
      else{
        window.alert("Registration Succesfull");
        console.log("Registration Succesfull");

        // histroy.push('/Login');

      }



      }
      return (
        <>
      <div className='container'>

    <div className='signup-content'>
    <div className='signup-form'>
    <h2 className='form-title'>Sign Up </h2>
    <form method='POST' id='register-from' className='register-from'>
    <div class="mb-3">
      <label htmlFor="Name"></label>
      <input type="text" class="form-control" name='name' id="Name" placeholder="First Name"
       value={user.name} onChange={handleInput} />

      <label htmlFor="Email"></label>
      <input type="Email" class="form-control" name='email' id="Email" placeholder="Email"
      value={user.email} onChange={handleInput}/>

      <label htmlFor="phone"></label>
      <input type="number" class="form-control" name='phone' id="phone" placeholder="Phone Number"
      value={user.phone} onChange={handleInput}/>


      <label htmlFor="work"></label>
      <input type="text" class="form-control" name='work' id="profession" placeholder="Profession"
      value={user.work} onChange={handleInput}/>


      <label htmlFor="password"></label>
      <input type="password" class="form-control" name='password' id="password" placeholder="Password"
      value={user.password} onChange={handleInput}/>

      <label htmlFor="cpassword"></label>
      <input type="password" class="form-control" name='cpassword' id="cpassword" placeholder="Confirm Password"
      value={user.cpassword} onChange={handleInput}/>

      <div class="col-12">
    <button type="submit" name='signup' id='signup' class="btn btn-primary button1" onClick={PostData}>Register</button>
  </div>

    </div>
    </form>
    

    </div>

    </div>


    </div> 
    
    {/* <div className="singup-image">
      <figure>
         <img src={signup2} alt="Register" /> 
      </figure>
    </div> */}
    </>
      )
    }

    export default Register



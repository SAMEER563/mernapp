import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

  const [credentials, setcredentials] = useState({ email:"",password:""})
  let Navigate = useNavigate()
    const handleSubmit = async(e)=>{
     e.preventDefault();
     console.log(JSON.stringify({ email:credentials.email, password:credentials.password}))
     const response = await fetch("http://localhost:5000/api/loginuser",{
     method:'POST',
     headers: {
        'Content-Type':'application/json'
     },
     body:JSON.stringify({ email:credentials.email, password:credentials.password})
     });
    const json = await response.json()
    console.log(json);

    if(!json.success){
      alert("Enter valid credentials")
    }

    if(json.success){
    Navigate("/");
    }

    }
    const onChange=(event)=>{
      setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <div><div className='container'>
    <form onSubmit={handleSubmit}>
   
<div className="mb-3">
 <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
 <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
 <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
 <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
 <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
</div>
<button type="submit" className="m-3 btn btn-success">Login</button>
<Link to="/createuser" className='m-3 btn btn-danger'>I'm a new User</Link>
</form>
</div></div>
  )
}

import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Notebook from '../context/notes/noteContext'
const Signup = () => {
  const {alertEvent}=useContext(Notebook)
  const navigate=useNavigate()
  const [credentials, setcredientials] = useState({name:'',password:'',cpassword:'',email:''})
  let handlechange=(e)=>{
    setcredientials({...credentials,[e.target.name]:e.target.value})
  }
  const host='http://localhost:5000/api/auth/'
  let signup=async(e)=>{
   // http://localhost:5000/api/auth/createuser
   e.preventDefault()
   try {
     const response = await fetch(`${host}createuser`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         name:credentials.name,
         password:credentials.password,
         email:credentials.email
       })
     })
     const data=await response.json()
     if(data.success){
       console.log(data)
       localStorage.setItem('Token',data.authtoken)
       navigate('/')
     }   
     else{
      alertEvent('Invalid credentials','danger','Failure')
     }                        
        //TODO--> use history ka use karke redirect karna hai
   } catch (error) {
     console.log(error.message)
   }
  }
  return (
    <div className='container w-50 mt-5'>
      <h1 className='text-center m-5'>Register here</h1>
      <form onSubmit={signup}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" name='name' className="form-control" id="name"  value={credentials.name} onChange={handlechange}  required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name='password' className="form-control" id="password" value={credentials.password} onChange={handlechange} required min={8}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
          <input type="password" name='cpassword' className="form-control" id="cpassword" value={credentials.cpassword} onChange={handlechange} required min={8}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
          <input type="email" name='email' className="form-control" id="email" value={credentials.email} onChange={handlechange} required/>
        </div>
        

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup

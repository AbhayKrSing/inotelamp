import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import NoteContext from '../context/notes/noteContext'
const Login = () => {
  const { alertEvent } = useContext(NoteContext)
  const navigate = useNavigate();
  const host = (process.env.REACT_APP_PORT || 'http://localhost:5000') + '/api/auth/'
  const [credentials, setcredentials] = useState({ email: '', password: '' })
  let handlechange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  let login = async (e) => {
    //localhost:5000/api/auth/login
    e.preventDefault()
    try {
      const response = await fetch(`${host}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password
        })
      })
      const data = await response.json()
      if (data.success) {
        console.log(data)
        localStorage.setItem('Token', data.authtoken)
        navigate('/')
        alertEvent('Logged in successfully', 'success', 'Success')
      }
      else {
        alertEvent('Invalid credentials', 'danger', 'Failure')
      }
      //TODO--> use history ka use karke redirect karna hai
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className='container w-50 mt-5'>
      <form onSubmit={login}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={credentials.email} onChange={handlechange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name='password' className="form-control" id="exampleInputPassword1" value={credentials.password} onChange={handlechange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login

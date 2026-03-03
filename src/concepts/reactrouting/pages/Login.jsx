import React, { useRef, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData,setFormData]=useState({
    email:"",
    password:""
  })
  const[passwordIcon,setPasswordIcon]=useState(false)
  const navigate=useNavigate()
  const handleInput=(e)=>{
    const{name,value}=e.target 
    setFormData({...formData,[name]:value})
  }

 

  const handleForm=(e)=>{
    e.preventDefault()
    localStorage.setItem("jwt_token",JSON.stringify("xesrdt13w4e5c6rvgbfyujiokp"))
    navigate("/dashboard")
  }



  return (
    <div className="w-full h-screen flex items-center justify-center">
        <div className='w-[30%] h-[45%] rounded-2xl shadow-2xl shadow-gray-300  p-2 '>
          <form onSubmit={handleForm}>
            <h1 className='text-center font-extrabold text-3xl'>Login</h1>
            <div className='flex flex-col w-[80%] m-auto p-2 gap-3'>
              <label htmlFor="">Email</label>
              <input type="email" className='p-2 border rounded-sm' name='email' value={formData.email} onChange={handleInput}/>
            </div>
            <div className='flex flex-col w-[80%] m-auto p-2 gap-3 relative'>
              <label htmlFor="">password</label>
              <input type={passwordIcon?"text":"password"} className='p-2 border rounded-sm' name='password' value={formData.password} onChange={handleInput}/>
              
              <div className='p-1 absolute top-12.5 right-7 cursor-pointer flex items-center justify-center' onClick={()=>setPasswordIcon(!passwordIcon)}>
                  {
                    passwordIcon?<AiOutlineEyeInvisible size={20}/>:<AiOutlineEye size={20}/>
                  }
              </div>
            </div>
            <div className='flex flex-col w-[80%] m-auto p-2 gap-3'>
              <button className='bg-blue-200 p-3 rounded-sm'>Submit</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Login
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen h-19.5 bg-gradient-to-r from-cyan-300 to-fuchsia-600 flex items-center justify-around p-3.5 text-white'>
        <div className='w-[15%] h-full flex items-center justify-center font-extrabold text-3xl font-serif tracking-widest'><Link></Link> </div>

        <ul className='w-[40%] h-full  flex items-center justify-around'>
            <li className='p-2 hover:underline cursor-pointer rounded-lg capitalize text-lg font-bold'><Link to="/home">home</Link></li>
            <li className='p-2 hover:underline cursor-pointer rounded-lg capitalize text-lg font-bold'><Link to="/about">about</Link></li>
            <li className='p-2 hover:underline cursor-pointer rounded-lg capitalize text-lg font-bold'><Link to="/projects">projects</Link></li>
            <li className='p-2 hover:underline cursor-pointer rounded-lg capitalize text-lg font-bold'><Link to="/contact">contact</Link></li>
        </ul>
        <button className='px-7 py-2  rounded-lg cursor-pointer bg-amber-300 text-lg font-medium  hover:bg-amber-500 hover:text-white'><Link to="/login">Login</Link></button>
    </div>
  )
}

export default Navbar
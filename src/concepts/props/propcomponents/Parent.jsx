import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div id='parent' className='parent'>

        <Child name="sundari" age={22} email="kavya@gmail.com"/>  
        <Child name="leela" age={28} email="leela@gmail.com"/>  
        <Child name="mala" age={22} email="mala@gmail.com"/>  

    </div>
  )
}

export default Parent
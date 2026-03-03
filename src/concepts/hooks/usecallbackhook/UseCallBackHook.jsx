import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallBackHook = () => {
    const [count,setCount]=useState(0)
    console.log("parent")

    // let a=20
    // let b=a
    // b++
    // console.log(b)
    // console.log(a)

    // let a=[1,2,3]
    // let b=JSON.parse(JSON.stringify(a))
    // b.push(10)
    // console.log(b)
    // console.log(a)



    const deleteUser=useCallback(()=>{
        console.log("user deleted")
    },[])
  return (
    <div>
        <h1>UseCallBackHook</h1>
        <p className='text-6xl'>{count}</p>
        <button className='p-3 bg-blue-300 cursor-pointer ' onClick={()=>setCount(count+1)}>Update</button>
        <hr />
        <Child data={deleteUser}/>
    </div>
  )
}

export default UseCallBackHook
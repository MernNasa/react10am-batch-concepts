import React from 'react'

const Child = ({data}) => {
    console.log("child")
  return (
    <div>
        <h1>child</h1>
        <button className='p-3 bg-red-300 cursor-pointer ' onClick={data}>Delete</button>
    </div>
  )
}

export default React.memo(Child)
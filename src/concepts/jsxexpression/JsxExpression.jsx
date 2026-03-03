import React from 'react'

const JsxExpression = () => {
  // jsx expression is used to access the js variables or functions inside the jsx | html
  // syntax---> {}

  //! Note --> inside the jsx expression is not possible to declare a variable but initialization is possible

  //! how to use js functions || how to call js functions

  //! if a function is returing a jsx element then only we called as a component, if it's not returning any jsx element then it is a js function.


  //! inside the jsx expression if we want to use conditional statement then we need to use ternary operator. if i want to use loop then map method
  let username="sundari"

  let demo=()=>{
    console.log("demo function")
  }

  let is_active=false
  if(is_active===true){
    console.log("true block")
  }
  else{
    console.log("false block")
  }

  let arr=['sundari','sheela','leela','mala']
  
  let obj={
    username:"laxmi"
  }
  return (
    <div>
      {/* <h1>{username}</h1>
      {username="leela"}
      <br />
      {username} */}

      {/* {
        let val=20;
      } */}
      <button onClick={demo}>Click</button>
        {
          is_active?<h1>i am safe</h1>: <h1>i am dead</h1>
        }

        <h1>{arr[0]}</h1>
        <h1>{arr[1]}</h1>
        <h1>{arr[3]}</h1>

        <h1>{obj.username}</h1>

        <hr />

        {
          arr.map((i)=>{
            return <h1>{i}</h1>
          })
        }
      
    </div>
  )
}

export default JsxExpression
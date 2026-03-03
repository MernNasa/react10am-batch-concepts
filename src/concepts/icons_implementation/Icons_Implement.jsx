import React from 'react'
import { IoMdHome } from 'react-icons/io';
import { IoHomeOutline } from "react-icons/io5";
import { RxHamburgerMenu } from 'react-icons/rx';
import SUNDARI from "../../assets/sundarishaoo.jpg"
const Icons_Implement = () => {
  return (
    <div>
        <h1><IoHomeOutline size={100} color='red' fill='green'/></h1>
        <h1>
            <IoMdHome fill='red' />

            <RxHamburgerMenu size={100} color='red' />
        </h1>
        <img src={SUNDARI} alt="" width={300} />
    </div>
  )
}

export default Icons_Implement
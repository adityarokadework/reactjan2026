import React from 'react'
import { Link } from 'react-router-dom'

const Navbar1 = ({name}) => {
  return (
    <div className='border-3 border-gray-300 flex justify-between px-32 items-center'>


     {name && <h1>{name}</h1>}

        <div>LOGO</div>
        <div className='flex text-[12px] gap-[10px]' >
           <Link to='/'>Home</Link>

            <a href='/pricing'> a = Pricing </a>

            <Link to='/pricing'>Pricing</Link>

            <p>How it works</p>

            <button>Log in</button>
        </div>

    </div>
  )
}

export default Navbar1
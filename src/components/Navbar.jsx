import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 border border-gray-500 p-4 justify-between min-w-[1000px]'>
        PASTE
        <div className='flex flex-row gap-4'>
          <NavLink to="/" >
              Home
          </NavLink>

          <NavLink to = "/pastes" >
              Pastes
          </NavLink>
        </div>
    </div>
  )
}

export default Navbar
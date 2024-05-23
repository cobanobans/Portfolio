import React from 'react'
import { links } from '../data'
import { GiLaptop } from 'react-icons/gi'
import { GiHamburgerMenu } from 'react-icons/gi'
import Links from './Links'

const Navbar = () => {
  return (
    <nav className='bg-cyan-100 top-0 left-0 w-full fixed  items-center'>
      <div className='align-element flex flex-row justify-between items-center py-4 lg:py-6'>
        <div className='text-3xl font-bold gap-3 flex flex-row items-end'>
          <GiLaptop className='text-cyan-700 h-12 w-12 lg:h-9 lg:w-9' />
          <h2 className='hidden md:block'>
            Đorđe<span className='text-cyan-700'>Jocić</span>
          </h2>
        </div>
        <div className='gap-x-16 hidden md:flex text-slate-600'>
          <Links />
        </div>
        <div className='dropdown dropdown-left md:hidden'>
          <div tabIndex={0} role='button' className='btn bg-white border-none'>
            <GiHamburgerMenu className='text-3xl text-cyan-700 ' />
          </div>
          <ul
            tabIndex={0}
            className='dropdown-content z-[1] menu p-2 shadow bg-cyan-300 rounded-box w-52 gap-5 text-slate-600'
          >
            <Links />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... h-72 w-{100%}'>
        <div className='text-white-800 flex justify-between items-center'>
      <h1 className='text-x1 m-2 cursor-pointer text-yellow-300 font-serif'>Header</h1>
      <ul className='flex gap-3 mr-4 cursor-pointer'>
        <Link className='hover:text-cyan-400 text-white font-extralight' href="./">Home</Link>
        <Link className='hover:text-cyan-400 text-white font-extralight' href="./About">About</Link>
        <Link className='hover:text-cyan-400 text-white font-extralight' href="./Contact">Contact</Link> 
        <Link className='hover:text-cyan-400 text-white font-extralight' href="./Portfolio">Portfolio</Link>
      </ul>
      </div>
    </div>
  )
};

export default Header

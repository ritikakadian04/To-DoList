import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex justify-around bg-blue-900 text-white py-2'>
        <div className="logo">
            <span className='fontbold text-xl mx-9'>iTASK</span>
        </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all duration-50'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-allduration-50'>Your Tasks</li>
      </ul>

    </nav>
  )
}

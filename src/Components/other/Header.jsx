import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='flex justify-between items-end '>
            <h1 className='font-medium text-white text-2xl'>
                Hello <br />
                <span className='font-semibold text-3xl'>Raj 👋</span>
            </h1>
            <button className='bg-red-600 text-white font-bold px-3 py-1 rounded'>Log Out</button>

        </div>
    </div>
  )
}

export default Header
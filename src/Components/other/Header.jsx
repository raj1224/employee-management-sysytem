import React, { useState } from 'react'

const Header = (props) => {
  // console.log(data);
  // const [username, setusername] = useState('')
  // if(!data){
  //   setusername('Admin')
  // }else{
  //   setusername(data.firstName)
  // }
  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div>
        <div className='flex justify-between items-end '>
            <h1 className='font-medium text-white text-2xl'>
                Hello <br />
                <span className='font-semibold text-3xl'>username 👋</span>
            </h1>
            <button onClick={logOutUser} className='bg-red-600 text-white font-bold px-3 py-1 rounded'>Log Out</button>

        </div>
    </div>
  )
}

export default Header
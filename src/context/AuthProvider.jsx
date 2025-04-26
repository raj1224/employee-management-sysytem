import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()


function AuthProvider({children}) {
  const [userData, setuserData] = useState(null)
  const data =getLocalStorage()
  console.log(data.employees );
  useEffect(() => {
    const{employees,admin}=getLocalStorage()
    setuserData({employees,admin})
  }, [])
  
  


  // useEffect(()=>{
  //     // setLocalStorage()
  //     getLocalStorage()
  //   },)
  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
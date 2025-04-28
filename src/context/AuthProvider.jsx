import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()


function AuthProvider({children}) {

  // localStorage.clear()

  const [userData, setuserData] = useState(null)
  // const data =getLocalStorage()
  // console.log(data.employees );
  useEffect(() => {
    setLocalStorage()
    const{employees}=getLocalStorage()
    setuserData(employees)
  }, [])
  
  


  // useEffect(()=>{
  //     // setLocalStorage()
  //     getLocalStorage()
  //   },)
  return (
    <div>
      <AuthContext.Provider value={[userData, setuserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
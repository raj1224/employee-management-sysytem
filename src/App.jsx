import React, { createContext, useContext, useEffect, useState } from 'react'

import Login from './Components/Auth/Login'
import EmployeDashboard from './Components/dashboards/EmployeeDashboard'
import Admindashboard from './Components/dashboards/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'



const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)

    }
  },[])
  
  // console.log(authData);
  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem('loggedInUser')
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role)
  //     } 
  //   }
  
    
  // }, [authData])
  
  
  
  const handleLogin = (email,password)=>{
    // console.log(email,password);

    
    if(email=='admin@me.com' && password == '123'){
      // console.log("this is Admin");
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if(userData  ){
      const employee = userData.find((e)=>email=== e.email && password == e.password)
      if(employee){
        // console.log("this is employee");
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
      }
      // console.log("this is user");
      // setUser('employee')
      // localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))

    }else{
      alert("Invalid Credentials")
    }
  }

  


  return (
    <>
    {/* <Login/> */}
   {!user ? <Login handleLogin={handleLogin}/> : ''}
   {user == 'admin' ? <Admindashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeDashboard changeUser={setLocalStorage} data ={loggedInUserData}/> : null)} 
    </>
  )
}

export default App 
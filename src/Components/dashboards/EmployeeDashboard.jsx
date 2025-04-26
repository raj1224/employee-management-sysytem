import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers.jsx'
import TaskList from '../tasklist/TaskList.jsx'



const EmployeeDashboard = () => {


  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header />
        <TaskListNumbers  />
        <TaskList  />
    </div>
  )
}

export default EmployeeDashboard
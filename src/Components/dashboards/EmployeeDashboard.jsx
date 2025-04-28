import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers.jsx'
import TaskList from '../tasklist/TaskList.jsx'



const EmployeeDashboard = (props) => {
  
  // console.log(props);
  

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        {/* <h1>{data.id}</h1> */}
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumbers data={props.data}  />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
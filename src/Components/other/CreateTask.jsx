import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
       const [userData,setUserData] = useContext(AuthContext)
    
    const [taskTitle, settaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [asignTo, setasignTo] = useState('')
    const [Category, setCategory] = useState('')

    const [newtask, setnewtask] = useState({})

    const submitHandler=(e)=>{
        e.preventDefault()
        setnewtask({taskTitle, taskDescription, taskDate, Category,active:false,newTask:true,failed:false,completed:false})

        // const data = JSON.parse(localStorage.getItem('employees'))
        const data = userData
        console.log(data);

        data.forEach((function(elem){
            if(asignTo == elem.firstName){
                elem.tasks.push(newtask)
                elem.taskCounts.newtask += 1

                // console.log(elem);
                
                // localStorage.setItem('employees', JSON.stringify(data))
            }
        }) )
        setUserData(data)
        
        // console.log(data);
        // localStorage.setItem('employees', JSON.stringify(data))
        // setUserData(data)
        setCategory('')
        settaskTitle('')
        settaskDescription('')
        settaskDate('')
        setasignTo('')
        // console.log(task);
        
        // console.log(taskDate, taskDescription,taskTitle,asignTo,Category);
    }
  return (
    <div className='bg-[#1c1c1c] w-full h-80 mt-10'>
        <form onSubmit={(e)=>{submitHandler(e)}}>
            
        <div className='flex justify-between p-5'>
            <div className=' text-zinc-400 rounded-2xl placeholder:text-zinc-500 flex flex-col  '>
                <div className='mb-3' >
                    <h1>Task Tittle</h1>
                    <input 
                    value={taskTitle}
                    onChange={((e)=>
                        settaskTitle(e.target.value)
                    )}
                    type="text"  placeholder='Make a UI design' className='border-2  border-white w-130 rounded' />
                </div>
                <div className='mb-3'>
                    <h1>Date</h1>
                    <input
                    value={taskDate}
                    onChange={((e)=>
                        settaskDate(e.target.value)
                    )}
                     type="date" placeholder='dd/mm/yyyy' className='border-2 border-white  w-130 rounded' />
                </div>
                <div className='mb-3'>
                    <h1>Assign to</h1>
                    <input
                    value={asignTo}
                    onChange={((e)=>
                        setasignTo(e.target.value)
                    )}
                     type="text" placeholder='employee name' className='border-2 border-white w-130 rounded' />
                </div>
                <div className='mb-3'>
                    <h1>Category</h1>
                    <input
                    value={Category}
                    onChange={((e)=>
                        setCategory(e.target.value)
                    )}
                     type="text" placeholder='design, dev, etc..' className='border-2 border-white w-130 rounded'/>
                </div>
            </div>
            <div className='text-white w-[45%] flex flex-col'>
                <h1>Describtion</h1>
                <input
                value={taskDescription}
                onChange={((e)=>
                    settaskDescription(e.target.value)
                )}
                 type="textarea" placeholder='write your task' className='text-center border-2 h-40 border-white'  />
                <button className='bg-green-300 py-3 rounded mt-5'>Create Task</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default CreateTask
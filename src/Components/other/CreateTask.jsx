import React from 'react'

const CreateTask = () => {
  return (
    <div className='bg-[#1c1c1c] w-full h-80 mt-10'>
        <div className='flex justify-between p-5'>
            <div className=' text-zinc-400 rounded-2xl placeholder:text-zinc-500 flex flex-col  '>
                <div className='mb-3' >
                    <h1>Task Tittle</h1>
                    <input type="text"  placeholder='Make a UI design' className='border-2  border-white w-130 rounded' />
                </div>
                <div className='mb-3'>
                    <h1>Date</h1>
                    <input type="date" placeholder='dd/mm/yyyy' className='border-2 border-white  w-130 rounded' />
                </div>
                <div className='mb-3'>
                    <h1>Assign to</h1>
                    <input type="text" placeholder='employee name' className='border-2 border-white w-130 rounded' />
                </div>
                <div className='mb-3'>
                    <h1>Category</h1>
                    <input type="text" placeholder='design, dev, etc..' className='border-2 border-white w-130 rounded'/>
                </div>
            </div>
            <div className='text-white w-[45%] flex flex-col'>
                <h1>Describtion</h1>
                <input type="textarea" placeholder='write your task' className='text-center border-2 h-40 border-white'  />
                <button className='bg-green-300 py-3 rounded mt-5'>Create Task</button>
            </div>
        </div>
    </div>
  )
}

export default CreateTask
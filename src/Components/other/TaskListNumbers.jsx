import React from 'react'

const TaskListNumber = () => {
  return (
    <div>
        <div className='flex justify-between mt-20 flex-no'>
            <div className='w-[45%] bg-red-300 h-30 rounded-xl p-8 mr-5' >
                <h1 className='text-white text-2xl font-bold'>0</h1>
                <h2 className='text-white text-xl font-semibold'>New Task</h2>
            </div>
            <div className='w-[45%] bg-blue-300 h-30 rounded-xl p-8 mr-5' >
                <h1 className='text-white text-2xl font-bold'>0</h1>
                <h2 className='text-white text-xl font-semibold'>New Task</h2>
            </div>
            <div className='w-[45%] bg-green-300 h-30 rounded-xl p-8 mr-5' >
                <h1 className='text-white text-2xl font-bold'>0</h1>
                <h2 className='text-white text-xl font-semibold'>New Task</h2>
            </div>
            <div className='w-[45%] bg-yellow-300 h-30 rounded-xl p-8 mr-5' >
                <h1 className='text-white text-2xl font-bold'>0</h1>
                <h2 className='text-white text-xl font-semibold'>New Task</h2>
            </div>
            
        </div>
    </div>
  )
}

export default TaskListNumber
import React from 'react'
const TaskList = () => {
  return (
    <div>
        <div id='tasklist' className='w-full h-85 mt-20 overflow-x-auto  flex gap-5'>
            <div className='w-90 flex-shrink-0 h-full  bg-red-300 rounded-2xl gap-5 p-5'>
                <div className='flex justify-between'>
                    <h1 className='bg-red-600 py-1 px-3 rounded text-white'>high</h1>
                    <h2 className='text-white text-md'>12 feb 2025</h2>
                </div>
                <h1 className='text-3xl text-white font-semibold pt-7'>Task Title</h1>
                <p className='text-white mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sed rerum. Impedit omnis odit quis voluptatum explicabo numquam mollitia itaque, voluptas consequatur harum ea suscipit aspernatur hic molestiae. Et, quod.</p>
            </div>
            <div className='w-90 flex-shrink-0 h-full  bg-yellow-300 rounded-2xl gap-5 p-5'>
                <div className='flex justify-between'>
                    <h1 className='bg-red-600 py-1 px-3 rounded text-white'>high</h1>
                    <h2 className='text-white text-md'>12 feb 2025</h2>
                </div>
                <h1 className='text-3xl text-white font-semibold pt-7'>Task Title</h1>
                <p className='text-white mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sed rerum. Impedit omnis odit quis voluptatum explicabo numquam mollitia itaque, voluptas consequatur harum ea suscipit aspernatur hic molestiae. Et, quod.</p>
            </div>
            <div className='w-90 flex-shrink-0 h-full  bg-blue-300 rounded-2xl gap-5 p-5'>
                <div className='flex justify-between'>
                    <h1 className='bg-red-600 py-1 px-3 rounded text-white'>high</h1>
                    <h2 className='text-white text-md'>12 feb 2025</h2>
                </div>
                <h1 className='text-3xl text-white font-semibold pt-7'>Task Title</h1>
                <p className='text-white mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sed rerum. Impedit omnis odit quis voluptatum explicabo numquam mollitia itaque, voluptas consequatur harum ea suscipit aspernatur hic molestiae. Et, quod.</p>
            </div>
            <div className='w-90 flex-shrink-0 h-full  bg-green-300 rounded-2xl gap-5 p-5'>
                <div className='flex justify-between'>
                    <h1 className='bg-red-600 py-1 px-3 rounded text-white'>high</h1>
                    <h2 className='text-white text-md'>12 feb 2025</h2>
                </div>
                <h1 className='text-3xl text-white font-semibold pt-7'>Task Title</h1>
                <p className='text-white mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sed rerum. Impedit omnis odit quis voluptatum explicabo numquam mollitia itaque, voluptas consequatur harum ea suscipit aspernatur hic molestiae. Et, quod.</p>
            </div>
            

        </div>
    </div>
  )
}

export default TaskList
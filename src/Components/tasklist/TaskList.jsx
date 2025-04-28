import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompleteTask'
import FailedTask from './FailedTask'
const TaskList = ({data}) => {
  return (
    <div>
        <div id='tasklist' className='w-full h-85 mt-20 overflow-x-auto  flex gap-5'>
           
            {data.tasks.map((elem,idx)=>{
                if(elem.active){
                    return <AcceptTask key={idx} data={elem} />
                }
                if(elem.NewTask){
                    return <NewTask key={idx} data={elem} />
                }
                if(elem.completed){
                    return <CompletedTask key={idx} data={elem} />
                }
                if(elem.failed){
                    return <FailedTask key={idx} data={elem} />
                }
            })}
            
            

        </div>
    </div>
  )
}

export default TaskList
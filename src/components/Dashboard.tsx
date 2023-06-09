import React, { useState } from 'react'
import { useStateValue } from '../state/StateProvider'
import { actionTypes } from '../state/Reducer'

function Dashboard() {
  const [state, dispatch] = useStateValue()
  const [subTaskCounts, setCubTaskCounts] = useState(0)
  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch({
      type: actionTypes.LOG_OUT,
    })
  }

  return (
    <div className='flex h-screen relative'>
      <div className='fixed h-full top-0 w-80 max-w-xs border-r-2 border-gray-400/20'>
        <button className='flex w-full gap-2 items-center px-4 py-4 justify-between bg-blue-500 text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <span className='font-semibold'>DASHBOARD</span>
        </button>
        <img className='mx-auto mt-6 border-2 border-gray-400/20 rounded-full' height={120} width={120} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" alt="" />
        <h1 className='text-center text-xl font-semibold mt-3'>John Doe</h1>
        <h2 className='text-center text-sm font-semibold mt-1'>Admin</h2>
        <button onClick={handleLogout} className='my-12 px-12 flex py-1 rounded-md mx-auto text-white text-center border bg-red-500' type="button">Logout</button>

      </div>
      <div className='w-[calc(100vw-22rem)] mx-auto px-4 absolute left-80'>
        <div className='sticky top-0'>
          <div className='text-center font-semibold text-lg '>
            Add Task
          </div>
          <form action="">
            <div className='flex justify-between max-w-xl gap-2 my-4'>
              <div className='flex flex-col gap-4'>


                <div className='flex flex-col'>
                  <label htmlFor='task' className='font-semibold'>Task Name</label>
                  <input className='border-b py-2 text-sm border-b-blue-400 outline-none ' name='task' id='task' type="text" />
                </div>
                {Array(subTaskCounts)
                  .fill(null)
                  .map((_, i) => (
                    <div key={i} className='flex flex-col'>
                      <label htmlFor={`subtask-${i}`} className='font-semibold'>
                        Subtask Name
                      </label>
                      <input
                        className='border-b py-2 text-sm border-b-blue-400 outline-none'
                        name={`subtask-${i}`}
                        id={`subtask-${i}`}
                        type="text"
                      />
                    </div>
                  ))}

              </div>
              <span onClick={() => setCubTaskCounts(subTaskCounts + 1)} className='underline cursor-pointer'>add subtask</span>
              <button className='px-8 h-10 py-1 rounded-md text-white text-center border bg-blue-500' type="submit">Add</button>
            </div>
          </form>
        </div>

        <div>
          <div className='text-center font-semibold text-lg '>
            Tasks
          </div>
          <div className='flex flex-col gap-4 my-4'>
            <div className='flex max-w-2xl justify-between items-center'>
              <div className='flex flex-col gap-2'>
                <div className='font-semibold'>Task 1 <span className='text-sm ml-8 font-normal'>3+</span></div>
                <div className='text-sm'>Subtask 1</div>
                <div className='text-sm'>Subtask 2</div>
                <div className='text-sm'>Subtask 3</div>
              </div>
              <div className='flex gap-2'>
                <button className='px-4 h-8 py-1 rounded-md text-white text-center border bg-blue-500' type="submit">Edit</button>
                <button className='px-4 h-8 py-1 rounded-md text-white text-center border bg-red-500' type="submit">Delete</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
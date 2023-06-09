import React from 'react'
import { useStateValue } from '../state/StateProvider'
import { act } from 'react-dom/test-utils'

import {actionTypes} from '../state/Reducer'

function Login() {


  const [state, dispatch] = useStateValue()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    console.log(username, password)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    };

    fetch('https://tame-red-clownfish-sari.cyclic.app/auth/login', requestOptions)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        if (data.token) {
          localStorage.setItem('token', data.token)
          dispatch({
            type: actionTypes.LOG_IN,
            token: data.token
          })
        }
      }
      )
      .catch(err => console.log(err))


  }

  return (
    <div className='bg-blue-600/40 h-screen w-screen '>
      <div className=' bg-white px-6 py-6 rounded-md w-[450px] flex items-center flex-col max-w-[90%] h-[80vh] -translate-y-1/2 absolute left-1/2 -translate-x-1/2 top-1/2'>
        <h1 className='font-semibold text-2xl'>Admin Login</h1>
        <form onSubmit={handleLogin} className='my-16 w-full'>
          <div className='flex mb-8 gap-2 flex-col w-full'>
            <label htmlFor='username' className='font-semibold'>Username</label>
            <input className='border-b py-2 text-sm border-b-blue-400 outline-none ' name='username' id='username' type="text" />
          </div>
          <div className='flex gap-2 flex-col w-full'>
            <label htmlFor='password' className='font-semibold'>Password</label>
            <input className='border-b py-2 text-sm border-b-blue-400 outline-none' name='password' id='password' type="password" />
          </div>
          <button className='my-12 px-12 flex py-1 rounded-md text-white text-center border bg-blue-500' type="submit">Login</button>
        </form>

      </div>
    </div>
  )
}

export default Login
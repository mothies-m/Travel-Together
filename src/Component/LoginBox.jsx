import React from 'react'

function LoginBox() {
  return (
    <div className='bg-[#1D1D1D] px-5 py-4 font-Recursive rounded-xl max-w-[60%]'>
            <h1 className='text-center text-[33px] pb-7 leading-snug font-thin'>Join us today</h1>
        <div className='flex flex-col gap-7 text-white'>
            <input type="text" className='text-center rounded-lg px-2 py-2 focus:outline-none bg-white/25 placeholder:text-[#D4D4D4] placeholder:text-lg' placeholder='Email'/>
            <button className='bg-[#0C569A] rounded-lg p-2'>Confirm</button>
        </div>
    </div>
  )
}

export default LoginBox
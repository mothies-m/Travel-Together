import React from 'react'

function DropDown({onClick}) {
  return (
    <div className='flex justify-center'>
      <div className='absolute bottom-0 pb-4 font-semibold text-3xl text-white hover:scale-[150%]'>
        <button type='button' onClick={onClick}>&#8964;</button>
      </div>
    </div>
  )
}

export default DropDown
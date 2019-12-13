import React from 'react'

export const Chat = () => (
  <div className='max-w-sm mx-auto bg-white-200 shadow-lg rounded-lg overflow-hidden'>
    <div className='sm:flex sm:items-center px-6 py-4'>
      <img className='block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full' src='https://randomuser.me/api/portraits/lego/3.jpg' alt="Lego's Face" />
      <div className='mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left'>
        <p className='text-xl leading-tight'>Dr. Lego</p>
        <p className='text-sm leading-tight text-gray-600'>Customer Support Specialst</p>
        <div className='mt-4'>
          <button className='text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal'>Message</button>
        </div>
      </div>
    </div>
  </div>
)

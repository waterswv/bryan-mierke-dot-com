import React from 'react'

export default function Code ({ id }) {
  return (
    <div className='rounded p-4 w-2/6' style={{ height: '24rem' }}>
      <embed className='rounded focus:outline-none focus:shadow-outline' width='100%' height='100%' src={`https://codesandbox.io/embed/${id}?codemirror=1&runonclick=1&view=editor&fontsize=14&hidenavigation=1&theme=dark`} />
    </div>
  )
}

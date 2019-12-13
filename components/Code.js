import React, { useState } from 'react'

export default function Code ({ id }) {
  const [loaded, load] = useState(false)
  return (
    <div className='rounded p-4 w-3/6 ' style={{ height: '24rem' }}>
      {
        !loaded
          ? <Preview load={load} />
          : <Embed id={id} />
      }
    </div>
  )
}

const Preview = ({ load }) => (
  <div className='relative flex w-full h-full bg-gray-300 rounded items-center justify-center' 
    onClick={() => load(true)}>
    <img className='w-full' src='https://screenshots.codesandbox.io/3fmbx.png' />
    <PreviewText />
  </div>
)

const Embed = ({ id }) => (
  <embed className='w-full h-full rounded focus:outline-none focus:shadow-outline'
    src={`https://codesandbox.io/embed/${id}?codemirror=1&runonclick=1&view=editor&fontsize=14&hidenavigation=1&theme=dark`} />
)

const PreviewText = ({ text }) => <div className='absolute bottom-0 text-center'>{text || 'Click to Load'}</div>

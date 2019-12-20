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

const BG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1442" height="902"><path d="M 721 251 C 831.457 251 921 340.543 921 451 C 921 561.457 831.457 651 721 651 C 610.543 651 521 561.457 521 451 C 521 340.543 610.543 251 721 251 Z" fill="#CCC"></path><g transform="translate(721 1)"><path d="M 0 250 L 0 0 L 720 0 L 720 900 L 0 900 L 0 650 L 200 650 L 200 562.5 L 200 450 L 200 250 L 98 250 Z" fill="rgb(160, 174, 192)" stroke="#AAA" stroke-linecap="round" stroke-linejoin="bevel"></path><path d="M 200 450 L 199.5 427 L 195 403.5 L 193 395.5 L 190.5 387.5 L 184.5 371 L 180.5 362.5 L 175.5 353.5 L 165.5 336.5 L 160.5 330 L 155.5 323.5 L 150.5 317.5 L 145 311.5 L 134.5 301.75 L 124 292.5 L 112 283.75 L 99.5 276 L 88.25 270 L 82.5 267.5 L 76.5 265 L 51.5 256.5 L 27 252 L 0 250 L 200 250 Z" fill="rgb(160, 174, 192)" stroke="#AAA"></path><path d="M 200 449 L 199.5 472 L 195 495.5 L 193 503.5 L 190.5 511.5 L 184.5 528 L 180.5 536.5 L 175.5 545.5 L 165.5 562.5 L 160.5 569 L 155.5 575.5 L 150.5 581.5 L 145 587.5 L 134.5 597.25 L 124 606.5 L 112 615.25 L 99.5 623 L 88.25 629 L 82.5 631.5 L 76.5 634 L 51.5 642.5 L 27 647 L 0 649 L 200 649 Z" fill="rgb(160, 174, 192)" stroke="#AAA"></path></g><g transform="translate(1 1)"><path d="M 720 250 L 720 0 L 0 0 L 0 900 L 720 900 L 720 650 L 520 650 L 520 562.5 L 520 450 L 520 250 L 622 250 Z" fill="rgb(160, 174, 192)" stroke="#AAA" stroke-linecap="round" stroke-linejoin="bevel"></path><path d="M 520 450 L 520.5 427 L 525 403.5 L 527 395.5 L 529.5 387.5 L 535.5 371 L 539.5 362.5 L 544.5 353.5 L 554.5 336.5 L 559.5 330 L 564.5 323.5 L 569.5 317.5 L 575 311.5 L 585.5 301.75 L 596 292.5 L 608 283.75 L 620.5 276 L 631.75 270 L 637.5 267.5 L 643.5 265 L 668.5 256.5 L 693 252 L 720 250 L 520 250 Z" fill="rgb(160, 174, 192)" stroke="#AAA"></path><path d="M 520 449 L 520.5 472 L 525 495.5 L 527 503.5 L 529.5 511.5 L 535.5 528 L 539.5 536.5 L 544.5 545.5 L 554.5 562.5 L 559.5 569 L 564.5 575.5 L 569.5 581.5 L 575 587.5 L 585.5 597.25 L 596 606.5 L 608 615.25 L 620.5 623 L 631.75 629 L 637.5 631.5 L 643.5 634 L 668.5 642.5 L 693 647 L 720 649 L 520 649 Z" fill="rgb(160, 174, 192)" stroke="#AAA"></path></g></svg>
)

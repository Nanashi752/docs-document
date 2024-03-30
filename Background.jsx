import React from 'react'

const Background = () => {
  return (
    <div>
      <div className='fixed z-[2] w-full h-screen'>
          <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-500">document</div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[14vw] text-zinc-900 tracking-tighter leading-none">Docs</h1>
      </div>
    </div>
  )
}

export default Background

"use client"
import { SpeedInsights } from '@vercel/speed-insights/next';
import React from 'react'


const SayHay = () => {
  alert("Hay");
}
const page = () => {
  return (
    <>
    <SpeedInsights />
    <div className='text-center my-52 text-white'>
        <h1 className='text-3xl font-Anton'>Hai, Welcome</h1>
        <p>Hanya Page biasa</p>
        <button onClick={SayHay} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'>Say Hay</button>
    </div>
    </>
  )
}

export default page
import React from 'react'

function Practice2Card() {
  return (
    <div className='grid place-content-center h-screen'>
      <div className='p-6 max-w-sm mx-auto bg-white rounded-lg border-2 border-black shadow-lg flex items-center space-x-4 '>
        <div>
            <img className='h-20 w-20' src="https://images.pexels.com/photos/15241238/pexels-photo-15241238/free-photo-of-asphalt-road-through-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Not Loaded" />
        </div>
        <div className='text-lg'>
            Tailwind CSS
            <p className=' text-slate-500'>By Vishal Jawadwar</p>
        </div>
      </div>
      <button className='bg-sky-400  rounded-lg mt-2 text-white text-base p-2 hover:bg-slate-300 hover:text-black'>Buy Now</button>
      <div className='text-center text-slate-500 mt-2 sm:text-red-500 lg:text-green-500'>Vishal Sanjayrao Jawadwar</div>
    </div>
  )
}

export default Practice2Card

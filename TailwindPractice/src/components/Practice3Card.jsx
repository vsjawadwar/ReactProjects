import React from 'react'

function Practice3Card() {
  return (
    <div className='grid place-content-center'>
      <div className='max-w-sm mx-auto bg-white rounded-xl border-2 border-gray-700 md:max-w-2xl '>
        <div className='md:flex'>
        <div>
            <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://images.pexels.com/photos/18296591/pexels-photo-18296591/free-photo-of-sarangpur-hanuman-ji.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-orange-500 font-semibold'>
            <h1>Jay Shree Ram</h1>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Practice3Card

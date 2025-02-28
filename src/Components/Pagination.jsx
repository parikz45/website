import React from 'react'

function Pagination({handlePrev, handleNext, pageNo}) {
  return (
    <div className='bg-gray-400 text-center text-bold mt-8 p-2 flex justify-center '>
        <div onClick={handlePrev} className='px-5 hover:cursor-pointer'><i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNo}</div>
        <div onClick={handleNext} className='px-5 hover:cursor-pointer'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
    
  )
}

export default Pagination
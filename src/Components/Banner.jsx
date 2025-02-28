import React from 'react'

function Banner() {
  return (
    <div className=' h-[20vh] md:h-[90vh] bg-cover bg-center flex items-end' style={{backgroundImage:`url(https://static1.srcdn.com/wordpress/wp-content/uploads/2018/09/Avengers-Infinity-War-poster.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
     }}>
      <div className='text-white text-xl bg-gray-900/60 text-center w-full p-3'>Avengers Endgame</div>
    </div>
    // <div>hello</div>
  )
}

export default Banner
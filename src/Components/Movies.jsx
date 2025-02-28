import React, { useState } from 'react'
import Moviecard from './Moviecard'
import { useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({addtoWatchlist, removeFromWatchlist, watchlist}) {
  const [movies, setMovies] = useState([])
  const [pageNo, setpageNo] = useState(1)

  const handlePrev=() => {
    if (pageNo == 1) {
      console.log('hello');
      
      setpageNo(pageNo)
    }
    else {
      setpageNo(pageNo - 1)
    }
  }
  const handleNext=() => {
    setpageNo(pageNo + 1)
  }

  useEffect(() => {
    console.log('hello');
    
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a3a276d05023f88a6c929f82da9541fa&language=en-US&page=${pageNo}`).then(function (res) {
      setMovies(res.data.results);
    })

  }, [pageNo])

  return (    
    <div className='p-5'>
      <div className='text-center text-2xl font-bold'>Trending Movies</div>
      <div className='flex flex-row flex-wrap justify-around gap-5'>
        {movies.map((movieObj) => {
          return <Moviecard movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} addtoWatchlist={addtoWatchlist} removeFromWatchlist={removeFromWatchlist} watchlist={watchlist} />
        })}

      </div>
      <Pagination handlePrev={handlePrev} handleNext={handleNext} pageNo={pageNo} />
    </div>
  )
}
export default Movies
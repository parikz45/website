import React, { useState } from 'react'
import genre from '../genre/Genre'

function Watchlist({ watchlist }) {
  const [search, setSearch] = useState('')
  let handleSearch = (e) =>{
    setSearch(e.target.value)
  }
  return (
    <>
      <div className='flex justify-center flex-wrap m-4'>
        <button className='text-white rounded-lg bg-blue-400 w-24 h-9'>Action</button>
        <button className='text-white rounded-lg bg-gray-400/50 w-24 h-9 mx-5'>Action</button>
      </div>
      <div className='flex justify-center my-4'>
        <input onChange={handleSearch} value={search} placeholder='Search movies' type="text" className='bg-gray-200 w-[18rem] h-[2rem] px-3 outline-none' />
      </div>

      <div className='rounded-lg m-8'>
        <table className='w-full text-center'>
          <thead className='border-b-2 bg-gray-200 text-gray-500'>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>

            {watchlist.filter((movieObj) => {
              return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movieObj) => {
              return <tr className='border-b-2'>
                <td className='px-5 py-5 flex items-center'>
                  <img className='w-[6rem] h-[8rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}></img>
                  <div className='px-10'>{movieObj.title}</div>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>{genre[movieObj.genre_ids[0]]}</td>
                <td>
                  <button className='text-white rounded-lg bg-red-600 w-20 h-8'>Delete</button>
                </td>
              </tr>
            })}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist

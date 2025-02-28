import React from 'react';

function Moviecard({ movieObj, poster_path, name, addtoWatchlist, removeFromWatchlist, watchlist }) {
  function doesContain(movieObj) {

    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-200 hover:cursor-pointer flex flex-col justify-between items-end mt-[4vh]'
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}
    >
      {doesContain(movieObj) ? (
        <div onClick={() => removeFromWatchlist(movieObj)} className='mx-4 my-3 rounded-lg bg-gray-900/60'>
          &#10060;
        </div>
      ) : (
        <div onClick={() => addtoWatchlist(movieObj)} className='mx-4 my-3 rounded-lg bg-gray-900/60'>
          <p>&#128525;</p>
        </div>
      )}
      <div className='flex-grow'></div>
      <div className='text-white text-xl p-3 text-center w-full bg-gray-900/70'>
        {name}
      </div>
    </div>
  );
}

export default Moviecard;

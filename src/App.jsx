import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Movies from './Components/Movies'
import Watchlist from './Components/Watchlist'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './Components/Banner'

function App() {
  let [watchlist, setWatchlist] = useState([]);

  // useEffect(() => {
  //   const storedWatchlist = JSON.parse(localStorage.getItem('list')) || [];
  //   setWatchlist(storedWatchlist);
  // }, []);

  let addtoWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj]
    // localStorage.setItem('list', JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist)
    console.log(newWatchlist);

  }
  let removeFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })
    setWatchlist(filteredWatchlist)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<><Banner /> <Movies addtoWatchlist={addtoWatchlist} removeFromWatchlist={removeFromWatchlist} watchlist={watchlist} /></>} />
          <Route path='/watchlist' element={<Watchlist watchlist={watchlist} />} />


        </Routes>
      </BrowserRouter>

    </>
  )
  useEffect(() => {
    document.title = `hello`
  })
}

export default App

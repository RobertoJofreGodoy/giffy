import { useState } from "react";
import { useLocation } from "wouter";
import { useGifs } from "hooks/useGifs"

import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from 'components/TrendingSearches'

export default function Home() {
  const [keyword, setKeyword] = useState("")
  //custom-hook de wouter
  const [ path, pushLocation ] = useLocation()
  //custom-hook nuestro
  const { loading, gifs  }= useGifs()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    // navegar otra ruta
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  }
    
  return (
    <>
      <form onSubmit={handleSubmit}>
      <button>Buscar</button>
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
        />
      </form>

      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  );
}

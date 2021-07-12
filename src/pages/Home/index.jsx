import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs"

import ListOfGifs from "../../components/ListOfGifs";

const POPULAR_GIFS = ["Matrix", "Witcher", "Star Wars", "House"];

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
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
        />
      </form>

      <h3>La ultima busqueda</h3>
      <ListOfGifs gifs={gifs}/>

      <h3>Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

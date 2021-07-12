import { useState } from "react";
import { Link, useLocation } from "wouter";

const POPULAR_GIFS = ["Matrix", "Witcher", "Star Wars", "House"];

export default function Home() {
  const [keyword, setKeyword] = useState("")

  //custom-hook de wouter
  const [ path, pushLocation ] = useLocation()

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

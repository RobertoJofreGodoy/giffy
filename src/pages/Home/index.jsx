import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs"

import ListOfGifs from "../../components/ListOfGifs";
import Category from '../../components/Category'

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

      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <Category
            name="Categorias populares"
            options={POPULAR_GIFS}
          />
          <Category
            name="Mascotas"
            options={['Perros', 'Gatos', 'Hamster']}
          />
        </div>
      </div>
    </>
  );
}

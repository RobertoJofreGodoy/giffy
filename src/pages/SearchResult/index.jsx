import { useState, useEffect } from "react"

import getGifs from "../../services/getGifs"
import ListOfGifs from "../../components/ListOfGifs"


export default function SearchResult({ params }) {

    const { keyword } = params
    const [ loading, setLoading ] = useState(false)
    const [ gifs, setGifs ] = useState([]);

    useEffect(() => {
        setLoading(true)
        getGifs( { keyword } )
            .then((gifs) => {
                setGifs(gifs)
                setLoading(false)
            })
      }, [ keyword ]);

    return (
        <>
            {
                loading 
                ? <h2>Cargando...</h2>
                : <ListOfGifs gifs={gifs}/>
            }
        </>
    )
}

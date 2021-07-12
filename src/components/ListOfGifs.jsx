import './Gif.css'
import Gif from "./Gif"
import getGifs from "../services/getGifs";
import { useEffect, useState } from "react";

export default function ListOfGifs({ params }) {
    const { keyword } = params

    const [gifs, setGifs] = useState([]);
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        getGifs( { keyword } )
            .then((gifs) => {
                setGifs(gifs)
                setLoading(false)
            })
      }, [ keyword ]);

     if (loading) return <h2>Cargando...</h2>  

    return (
        gifs.map(({ id, title, url }) => (
            <Gif
                key={id} 
                id={id} 
                title={title} 
                url={url} 
            />
        ))
    )
}

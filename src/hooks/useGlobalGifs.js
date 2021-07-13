import { useContext } from "react"
import { GifsContext } from "../context/GifsContext"

export default function useGlobalGifs() {

    //Mediante un cutom hook leemos un dato del context y lo retornamos, sin tener que llamar al contexto desde el componente

    return useContext(GifsContext).gifs

}

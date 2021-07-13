import ListOfGifs from "components/ListOfGifs"
import Spinner from 'components/Spinner/'
import { useGifs } from "hooks/useGifs"

export default function SearchResult({ params }) {

    const { keyword } = params
    
    // custom hook para buscar los gifs
    const { loading, gifs } = useGifs({ keyword })

    return (
        <>
            {
                loading 
                ? <Spinner />
                : (
                    <>
                        <h3 className="App-title">{decodeURI(keyword)}</h3>
                        <ListOfGifs gifs={gifs}/>
                    </>
                    )
            }
        </>
    )
}

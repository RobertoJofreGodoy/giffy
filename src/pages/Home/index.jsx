import { Link } from "wouter"

const POPULAR_GIFS = [ 'Matrix', "Witcher", "Star Wars", "House"]

export default function Home() {
    return (
        <>
            <h3>Los gifs más populares</h3>
            <ul>
                {
                    POPULAR_GIFS.map( (popularGif) => (
                        <li key={popularGif}>
                            <Link to={`/search/${popularGif}`} >Gifs de {popularGif}</Link>
                        </li>
                    ))
                }
            </ul>
            
        </>
    )
}

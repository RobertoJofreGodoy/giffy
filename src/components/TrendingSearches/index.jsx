import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";
import Spinner from "components/Spinner";

// Import dinamico
const TrendingSearches = React.lazy( () =>  import('./TrendingSearches'))

export default function LazyTrending () {

    const { isNearScreen, fromRef } = useNearScreen({ distance: '10px'})

    return (
        // enlazamos el div con la const de useRef()
        <div ref={fromRef}>
            {/* Suspense es un hook de React que nos permite esperar la promesa del componente con import dinamico 
            Ademas en el fallback podemos indicar que mostrar mientras no se ha cargado el componente, en este caso mostraremos el spinner que ya tenemos
            */}
            <Suspense fallback={<Spinner />}>
                { isNearScreen ?  <TrendingSearches /> : null }
            </Suspense>
        </div>
    )

}
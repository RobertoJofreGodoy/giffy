import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs';

export function useGifs ( { keyword } = { keyword: null } ) {

    const [ loading, setLoading ] = useState(false)
    const [ gifs, setGifs ] = useState([]);
    
    useEffect(() => {
        setLoading(true)

        //se recupera ultima keyword del localstorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword')

        getGifs( { keyword: keywordToUse } )
            .then((gifs) => {
                setGifs(gifs)
                setLoading(false)
                //se guarda la keyword
                localStorage.setItem('lastKeyword', keyword)
            })
      }, [ keyword ]);

      return { loading, gifs }
}


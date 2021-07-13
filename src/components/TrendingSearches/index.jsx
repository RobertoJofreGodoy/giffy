import React, { useEffect, useState, useRef } from "react";
import getTrendingTerms from "../../services/getTrendingTermsService";
import Category from "../Category";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return (
    <div>
      <Category name="tendencias" options={trends} />
    </div>
  );
}

export default function LazyTrending () {

    const [ show, setShow] = useState(false)

    // useRef() es un hook de React que nos permite guardar datos, la diferencia con useState() es que no se re-renderiza si el elemento cambia
    const elementRef = useRef()

    useEffect( () => {

        const onChange = ( entries ) => {
            const el = entries[0]
            
            if (el.isIntersecting) {
                setShow(true)
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px',
        })

        //Le decimos al observer que este pendiente del elemento que tiene la referencia
        observer.observe(elementRef.current)
    }, [])

    return (
        // enlazamos el div con la const de useRef()
        <div ref={elementRef}>
            { show ?  <TrendingSearches /> : null }
        </div>
    )

}
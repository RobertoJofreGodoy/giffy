import { useEffect, useState, useRef } from 'react'

export default function useNearScreen ( { distance = '100px'} ) {
    const [ isNearScreen, setIsNearScreen] = useState(false)

    // useRef() es un hook de React que nos permite guardar datos, la diferencia con useState() es que no se re-renderiza si el elemento cambia
    const fromRef = useRef()
    
    useEffect( () => {
        let observer
        const onChange = ( entries, observer ) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setIsNearScreen(true)
                observer.disconnect()
            }
        }
        // Polyfill de Intersection-observer para todos los navegadores
        Promise.resolve(
            IntersectionObserver || import(`intersection-observer`)
        ).then( () => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance,
            })
    
            //Le decimos al observer que este pendiente del elemento que tiene la referencia
            observer.observe(fromRef.current)
        })

        return () => observer && observer.disconnect()
    }, [ fromRef, distance ])

    return { isNearScreen, fromRef }
}
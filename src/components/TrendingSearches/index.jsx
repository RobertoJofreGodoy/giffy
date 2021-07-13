import React from "react"
import getTrendingTerms from '../../services/getTrendingTermsService'
import Category from '../Category'

export default function TrendingSearches() {

    const [ trends, setTrends ] = React.useState([])

    React.useEffect( () => {
        getTrendingTerms()
            .then( setTrends)
    }, [])

    return (
        <div>
            <Category name="tendencias" options={trends}/>
        </div>
    )
}

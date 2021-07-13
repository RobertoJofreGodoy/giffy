import React, { useEffect } from "react";
import getTrendingTerms from "../../services/getTrendingTermsService";
import Category from "../Category";

function TrendingSearches() {
  const [trends, setTrends] = React.useState([]);

  React.useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return (
    <div>
      <Category name="tendencias" options={trends} />
    </div>
  );
}

export default function LazyTrending () {

    const [ show, setShow] = React.useState(false)

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

        observer.observe(document.getElementById('LaziTrending'))
    }, [])

    return (
        <div id="LaziTrending">
            { show ?  <TrendingSearches /> : null }
        </div>
    )

}
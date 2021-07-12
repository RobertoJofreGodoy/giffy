const apiKey = 'iWPFCrpbJ56sKMUl1cKx1KrKnYhC6Vrp'


export default function getGifs({ keyword = 'geralt' } = {}) {


    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`


    return fetch(apiUrl)
      .then( res => res.json())
      .then( response => {
        const { data } = response
        const gifs = data.map( gif => {
            const { id, title, images } = gif
            const { url } = images.downsized_medium

            return { id, title, url }
        
        })
        return gifs
      })
}

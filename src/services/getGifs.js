import { API_KEY, API_URL } from "./settings"

export default function getGifs({ limit = 25, keyword = 'geralt', page = 0 } = {}) {


    const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${limit * page}&rating=g&lang=en`


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

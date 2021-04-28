import DisplayTitle from './DisplayTitle'
import {useState, useEffect} from 'react'
import axios from 'axios'

function AnimeTitle() {
  const [title, setTitle] = useState([])
  const [animeTitle, setAnimeTitle] = useState('')
  const displayAnimeTitle = () => {
    const url = 'https://animechan.vercel.app/api/quotes/anime?title='
    axios.get(`${url} ${animeTitle}`).then(response => {
      setTitle(response.data)
      console.log(response.data)
    })
  }
  const handleChange = e => {
    setAnimeTitle(e.target.value)
  }
  useEffect(() => {
    displayAnimeTitle()
  })
  return (
    <div>
      <p>sample anime title</p>
      <input type="text" onChange={handleChange} />
      <DisplayTitle title={title} />
    </div>
  )
}

export default AnimeTitle

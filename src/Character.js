import DisplayCharacter from './DisplayCharacter'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Character() {
  const [character, setCharacter] = useState([])
  const [characterName, setCharacterName] = useState('')
  const displayCharacterName = () => {
    const url = 'https://animechan.vercel.app/api/quotes/character?name='
    axios.get(`${url} ${characterName}`).then(response => {
      setCharacter(response.data)
      console.log(response.data)
    })
  }
  const handleChange = e => {
    setCharacterName(e.target.value)
  }
  useEffect(() => {
    displayCharacterName()
  })
  return (
    <div>
      <p>sample character quotes</p>
      <input type="text" onChange={handleChange} />
      <DisplayCharacter character={character} />
    </div>
  )
}

export default Character

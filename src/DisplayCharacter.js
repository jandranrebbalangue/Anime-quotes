function DisplayCharacter({character}) {
  const DisplayCharacter = () => {
    return character.map(data => {
      return (
        <div>
          <p>{data.anime}</p>
          <p>{data.character}</p>
          <p>{data.quote}</p>
        </div>
      )
    })
  }
  return <div>{DisplayCharacter()}</div>
}

export default DisplayCharacter

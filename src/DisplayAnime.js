function DisplayAnime({anime}) {
  const displayAnime = () => {
    return anime.map(data => {
      return (
        <div>
          <p>{data}</p>
        </div>
      )
    })
  }
  return <div>{displayAnime()}</div>
}

export default DisplayAnime

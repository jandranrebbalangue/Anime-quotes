function DisplayTitle({title}) {
  const displayTitle = () => {
    return title.map(data => {
      return (
        <div>
          <p>{data.anime}</p>
          <p>{data.character}</p>
          <p>{data.quote}</p>
        </div>
      )
    })
  }
  return <div>{displayTitle()}</div>
}

export default DisplayTitle

function DisplayCharacter({ character }) {
  return (
    <div>
      {character.map((data) => {
        return (
          <div>
            <p>{data.anime}</p>
            <p>{data.character}</p>
            <p>{data.quote}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayCharacter;

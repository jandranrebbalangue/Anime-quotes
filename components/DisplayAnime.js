function DisplayAnime({ anime }) {
  return (
    <div>
      {anime.map((data) => {
        return (
          <div>
            <p>{data}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayAnime;

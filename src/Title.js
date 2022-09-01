import DisplayTitle from "../components/DisplayTitle";
import { useState, useEffect } from "react";
import axios from "axios";

function AnimeTitle() {
  const [title, setTitle] = useState([]);
  const [animeTitle, setAnimeTitle] = useState("");

  const handleChange = (e) => {
    setAnimeTitle(e.target.value);
  };
  useEffect(() => {
    let cancel = false;
    const displayAnimeTitle = async () => {
      const url = "https://animechan.vercel.app/api/quotes/anime?title=";
      const { data } = await axios.get(`${url} ${animeTitle}`);
      if (cancel) return;
      setTitle(data);
    };
    displayAnimeTitle();
    return () => {
      cancel = true;
    };
  }, []);
  return (
    <div>
      <p>sample anime title</p>
      <input type="text" onChange={handleChange} />
      <DisplayTitle title={title} />
    </div>
  );
}

export default AnimeTitle;

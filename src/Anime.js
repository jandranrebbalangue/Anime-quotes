import DisplayAnime from "../components/DisplayAnime";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
function Anime() {
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    let cancel = false;
    const pagination = async () => {
      const { data } = await axios.get(
        "https://animechan.vercel.app/api/available/anime",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }
      );
      if (cancel) return;
      setAnime(data);
    };
    pagination();
    return () => {
      cancel = true;
    };
  }, []);
  return (
    <div>
      <AppBar position="static">
        <Typography color="inherit"> List of Anime</Typography>

        <Toolbar>
          <Link to="/">Home</Link>
        </Toolbar>
      </AppBar>
      <DisplayAnime anime={anime} />
    </div>
  );
}
export default Anime;

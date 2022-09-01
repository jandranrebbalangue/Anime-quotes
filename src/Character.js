import DisplayCharacter from "../components/DisplayCharacter";
import { useState, useEffect } from "react";
import axios from "axios";

function Character() {
  const [character, setCharacter] = useState([]);
  const [characterName, setCharacterName] = useState("");

  const handleChange = (e) => {
    setCharacterName(e.target.value);
  };
  useEffect(() => {
    let cancel = false;
    const displayCharacterName = async () => {
      const url = "https://animechan.vercel.app/api/quotes/character?name=";
      const { data } = await axios.get(`${url} ${characterName}`);
      if (cancel) return;
      setCharacter(data);
    };
    displayCharacterName();
    return () => {
      cancel = true;
    };
  }, []);
  return (
    <div>
      <p>sample character quotes</p>
      <input type="text" onChange={handleChange} />
      <DisplayCharacter character={character} />
    </div>
  );
}

export default Character;

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/characters.css";

function Characters() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-backend-samys-projects-18d2caaa.vercel.app/characters"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>Loading</span>
  ) : (
    <div className="character-container">
      {data.results.map((character, index) => (
        <div className="character-card" key={index}>
          <Link to={`/character/${character._id}`}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt=""
            />
            <h3>{character.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Characters;

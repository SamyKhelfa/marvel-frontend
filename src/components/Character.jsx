import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/character.css";

function Character() {
  const { characterId } = useParams();
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characterResponse = await axios.get(
          `https://marvel-backend-git-main-samys-projects-18d2caaa.vercel.app/character/${characterId}`
        );
        setCharacter(characterResponse.data);

        const comicsResponse = await axios.get(
          `https://marvel-backend-git-main-samys-projects-18d2caaa.vercel.app/comics/${characterId}`
        );

        setComics(comicsResponse.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [characterId]);
  console.log(comics);
  return isLoading ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="character-details">
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="character-image"
      />
      <div className="character-info">
        <h1 className="character-name">{character.name}</h1>
        <p className="character-description">{character.description}</p>
      </div>
      <div className="comics-link">
        <h2>Character-related comics</h2>
        <div className="comics-container">
          {comics.comics.map((comic, index) => (
            <div className="comics-card" key={index}>
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt=""
              />

              <h3>{comic.title}</h3>
              <h4>{comic.description}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Character;

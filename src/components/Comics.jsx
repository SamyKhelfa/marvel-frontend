import { useState, useEffect } from "react";
import axios from "axios";
import "../css/comics.css";

function Comics() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--5w6h6n8z57mm.code.run/comics"
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
    <div className="comics-container">
      {data.results.map((comics, index) => (
        <div className="comics-card" key={index}>
          <img
            src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
            alt=""
          />
          <h3>{comics.title}</h3>
          <h4>{comics.description}</h4>
        </div>
      ))}
    </div>
  );
}

export default Comics;

import logo from "../assets/marvel-logo.png";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="marvel-container">
          <img src={logo} alt="logo marvel" />
        </div>
      </Link>
      <div className="buttons">
        <button>
          <Link className="link-characters" to="/">
            Characters
          </Link>
        </button>
        <button>
          <Link className="link-comics" to="/comics">
            Comics
          </Link>
        </button>
        <button>
          <Link className="link-favorits" to="/favoris">
            Favorites
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;

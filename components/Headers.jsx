// --[4]---importer le necessaire
import logo from "../src/assets/logo.png";
import { Link } from "react-router-dom";

// ------------[3]--------créer les composants

const Header = ({ handleToken, token, search, setSearch }) => {
  return (
    <header className="header-container">
      <Link to="/">
        <img src={logo} alt="Logo vinted" />
      </Link>

      {token ? (
        <button
          onClick={() => {
            handleToken(null);
          }}
        >
          Déconnexion
        </button>
      ) : (
        <div>
          <Link to="/signup" className="button-login-signup">
            <button>Inscrivez-vous</button>
          </Link>
          <Link to="/login" className="button-login-signup">
            <button>Connectez-vous</button>
          </Link>
        </div>
      )}

      <div className="search-container">
        <input
          type="text"
          value={search}
          placeholder="Recherchez votre article"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <Link to={token ? "/publish" : "/login"} className="button-login-signup">
        <button>VENDS TES ARTICLES</button>
      </Link>
    </header>
  );
};

export default Header;

// --[4]---importer le necessaire
import logo from "../src/assets/logo.png";
import { Link } from "react-router-dom";

// ------------[3]--------créer les composants
const Header = ({ handleToken, token }) => {
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
        <>
          <Link to="/signup" className="button-login-signup">
            <button>Inscrirez vous</button>
          </Link>
          <Link to="/login" className="button-login-signup">
            <button>Connectez vous</button>
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;

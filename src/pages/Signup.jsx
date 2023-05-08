import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// ----------[18]
const Signup = ({ handleToken }) => {
  // -----------[20]....... créer les états des inputs USESTATES_donc les Importer____
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  // ------[28]----[errorMessage]----[Navigate]____
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      {/* -------[19]------créer la mise en page------- */}
      <h1>S'inscrire</h1>
      <form
        className="signup-container"
        //   -----------------[23]----------[ONSUBMIT]____________
        onSubmit={async (event) => {
          event.preventDefault();
          setErrorMessage("");
          //   ------------[24]--------TRYCATCH-----------
          try {
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/signup",
              {
                email: email,
                username: username,
                password: password,
                newsletter: newsletter,
              }
              //------------[25]------[Petit consol.log de la requete] ______
              // console.log(response.data);-OP___ [Enrgistre le Token]-----
              // ---[26]-----[Verifier avc IF si token]
            );
            if (response.data.token) {
              handleToken(response.data.token);
              navigate("/");
            }
          } catch (error) {
            console.log(error.response.data);
            // ------------[27 test error message]-----[Personnaliser réponse erreur]------
            if (error.response.status === 409) {
              setErrorMessage(
                <Link to="/login" className="button">
                  <button>Email déjà créé. Veuillez vous connecter</button>
                </Link>
              );
            } else if (error.response.data.message === "Missing parameters") {
              setErrorMessage("Merci de remplir tous les champs");
            }
          }
        }}
      >
        <input
          type="text"
          placeholder="Votre Id"
          // ----------------[21]---------[onChange]-----------
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          value={username}
        />
        <input
          type="email"
          placeholder="Votre Mail"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Votre Mot de Passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <input
            id="newlet"
            type="checkbox"
            onChange={() => {
              // ------------[22]---------[verifier StateOP]______
              setNewsletter(!newsletter);
            }}
            checked={newsletter}
          />
          <label htmlFor="newlet">Recevez de nos nouvelles</label>
        </div>
        <input type="submit" value="Soumettre" />
        {errorMessage && (
          <p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>
        )}
      </form>
      {/* ---[29]----------- */}
    </div>
  );
};

export default Signup;

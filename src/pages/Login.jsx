import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <h1>Se connecter</h1>
      <form
        className="login-container"
        onSubmit={async (event) => {
          event.preventDefault();
          setErrorMessage("");
          try {
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/login",
              {
                email: email,
                password: password,
              }
              // ----------------------
            );
            if (response.data.token) {
              handleToken(response.data.token);
              navigate("/");
            }
          } catch (error) {
            console.log(error.response.data);
            // ------------[27 test error message]-----[Personnaliser réponse erreur]------
            if (error.response.data.message === "User not found") {
              setErrorMessage("Votre mots de passe et/ou identifiant erronés");
            } else if (error.response.data.message === "Missing parameters") {
              setErrorMessage("Merci de remplir tous les champs");
            }
          }
        }}
      >
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
          placeholder="Votre MDP"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input type="submit" />
        {errorMessage && (
          <p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Login;

import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
  // ---------------try useReduce plus tard $$$$$$$$$$$$$-----------
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState();

  // const [offerId, setOfferId] = useState(false);------a TESTER
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      // navigate(`/offer: ${id}`) --------A tester
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return token ? (
    <>
      <div>
        <h1>Vends ton article</h1>
      </div>
      <div className="publish-container">
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="filePicker"></label> */}
            <input
              // style={{ display: "none" }}
              // id="filePicker"
              type="file"
              onChange={(event) => setPicture(event.target.files[0])}
            />
          </div>
          <br />
          <div>
            <span>Titre</span>
            <input
              type="text"
              placeholder="ex: chaussures vertes"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <br />
            <span>Décris ton article</span>
            <input
              type="text"
              placeholder="ex: très peu utilisé"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <br />
          <div>
            <span>Marque</span>
            <input
              type="text"
              placeholder="ex: Adidas"
              value={brand}
              // ------- e = event-----------------
              onChange={(event) => setBrand(event.target.value)}
            />
            <br />
            <span>Couleur</span>
            <input
              type="text"
              placeholder="ex: Rouge"
              value={color}
              // ------- e = event-----------------
              onChange={(event) => setColor(event.target.value)}
            />
            <br />
            <span>Taille</span>
            <input
              type="text"
              placeholder="ex: 40 / M / WL"
              value={size}
              onChange={(event) => setSize(event.target.value)}
            />
            <br />
            <span>Etat</span>
            <input
              type="text"
              placeholder="ex: Bon état"
              value={condition}
              onChange={(event) => setCondition(event.target.value)}
            />
            <br />
            <span>Lieu</span>
            <input
              type="text"
              placeholder="ex: Paris"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <br />
          <div>
            <span>Prix</span>
            <input
              type="text"
              placeholder="0,00€"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
            <input type="checkbox" />
            <span>Je suis intéressé(e) par les échanges</span>
          </div>
          <input type="submit" value="Poster votre offre" />
        </form>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;

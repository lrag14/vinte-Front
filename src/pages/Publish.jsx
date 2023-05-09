import { useState } from "react";
import axios from "axios";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState(null);

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
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div>
      <div>Vends ton article</div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" onChange={(e) => setPicture(e.target.files[0])} />
        </div>
        <div>
          <span>Titre</span>
          <input
            type="text"
            placeholder="ex: chaussures vertes"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span>Décris ton article</span>
          <input
            type="text"
            placeholder="ex: très peu utilisé"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <span>Marque</span>
          <input
            type="text"
            placeholder="ex: Adidas"
            value={brand}
            // ------- e = event-----------------
            onChange={(e) => setBrand(e.target.value)}
          />
          <span>Couleur</span>
          <input
            type="text"
            placeholder="ex: Rouge"
            value={color}
            // ------- e = event-----------------
            onChange={(e) => setColor(e.target.value)}
          />
          <span>Taille</span>
          <input
            type="text"
            placeholder="ex: 40 / M / WL"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <span>Etat</span>
          <input
            type="text"
            placeholder="ex: Bon état"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
          <span>Lieu</span>
          <input
            type="text"
            placeholder="ex: Paris"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <span>Prix</span>
          <input
            type="text"
            placeholder="0,00€"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input type="checkbox" />
          <span>Je suis intéressé(e) par les échanges</span>
        </div>
        <input type="submit" value="Ajouter" />
      </form>
    </div>
  );
};

export default Publish;

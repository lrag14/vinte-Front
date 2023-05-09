import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="offer-container">
      <div className="card-avatar-username">
        <img src={data.product_image.secure_url} alt="" />
        <span>{data.product_price} €</span>
        <div className="card-price-size-brand">
          {data.product_details.map((detail, index) => {
            const keyName = Object.keys(detail)[0];
            return (
              <div key={index}>
                <span>{keyName} : </span>
                <span>{detail[keyName]}</span>
              </div>
            );
          })}
        </div>
        <Link to={{ pathname: "/payment", state: { product: data } }}>
          Acheter
        </Link>
      </div>
    </div>
  );
};

export default Offer;

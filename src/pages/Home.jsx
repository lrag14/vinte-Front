import { useEffect, useState } from "react";
import axios from "axios";
import OfferCard from "../../components/OfferCard.jsx";

function Home({ search }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <p>Loa</p>
  ) : (
    <div className="home-card-wrapper">
      {data.offers.map((offer) => (
        <div key={offer._id}>
          <OfferCard offerData={offer} />
        </div>
      ))}
    </div>
  );
}

export default Home;

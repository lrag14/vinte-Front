// ------[5]---[importer les packets nécessaires]------

import { useEffect, useState } from "react";
import axios from "axios";

// ---------------Components---[9]-[creer Offers]-------
import OfferCard from "../../components/OfferCard.jsx";

//
function Home() {
  // ---------------[7]-----------
  const [data, setData] = useState({});
  // ----------[8]-----[attendre]
  const [isLoading, setIsLoading] = useState(true);

  // ------[6]---[try Catch et async await]---[useEffect pour une seul requete]----
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
          // "site--heavy-example--4m9rzsxzl9sv.code.run/offers"
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
    // ------[8bis]-----[true or false]-----
    <p>Loading ...</p>
  ) : (
    <div>
      {/* ------[7bis]---- */}
      <p>Nombre d'offre : {data.count}</p>
      {/* --[parcour le tableau]--[créer News Component Offers] */}
      {data.offers.map((offer) => {
        return <OfferCard key={offer._id} offerData={offer} />;
      })}
    </div>
  );
}

export default Home;

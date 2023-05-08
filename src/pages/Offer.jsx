import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  // [12]------------------
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // ---------[16]----[id always :)]-------
  const { id } = useParams();
  // --------[13]------------
  useEffect(() => {
    // -----[14 fetchData Async await trycatch ect....]
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // -----[15]------------
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`

          // `https://site--heavy-example--4m9rzsxzl9sv.code.run/${id}`
        );
        // -[17-------]
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    // --[????????????]--[id]---[????????????]-
  }, [id]);
  //--[CADAC DES BESOINS]--[Link ? Use ? ect...]--[fait les différentes div et rempli après]--
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <img src={data.product_image.secure_url} alt="" />
      <p>{data.product_price} €</p>
      <div>
        {data.product_details.map((detail, index) => {
          console.log(detail);
          const keyName = Object.keys(detail)[0];
          return (
            <div key={index}>
              <span>{keyName} : </span>
              <span>{detail[keyName]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;

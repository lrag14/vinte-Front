import { Link } from "react-router-dom";

const OfferCard = ({ offerData }) => {
  const { owner, product_image, product_price, product_details } = offerData;

  return (
    <div>
      <Link to={`/offer/${offerData._id}`}>
        <div>
          <div>
            {owner.account.avatar && (
              <img src={owner.account.avatar.secure_url} alt="" />
            )}
            <span>{owner.account.username}</span>
          </div>
          <img src={product_image.secure_url} alt="" />
          <div>
            <span>{product_price} €</span>
            <div>
              {product_details.map((detail, index) => {
                if (detail.MARQUE) {
                  return <span key={index}>{detail.MARQUE}</span>;
                } else if (detail.TAILLE) {
                  return <span key={index}>{detail.TAILLE}</span>;
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OfferCard;

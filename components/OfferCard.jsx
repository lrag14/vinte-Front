import { Link } from "react-router-dom";

// ------------[10]--------créer le composant-----
const OfferCard = ({ offerData }) => {
  const { owner, product_image, product_price, product_details } = offerData;
  // ---[11]---[CADAC DES BESOINS]--[Link ? Use ? ect...]--[fait les différentes div et rempli après]--
  return (
    <Link to={`/offer/${offerData._id}`}>
      <article className="home-card-wrapper">
        <div className="card-avatar-username">
          {/* [&& = si alors existe, sinon rien à faire ;-)]--- */}
          {owner.account.avatar && (
            <img src={owner.account.avatar.secure_url} alt="" />
          )}
          <span>{owner.account.username}</span>
        </div>
        <img className="card-container" src={product_image.secure_url} alt="" />
        <p className="card-price-size-brand">{product_price} €</p>
        <div className="card-price-size-brand">
          {product_details.map((detail, index) => {
            //---[CADAC DES BESOINS]------
            if (detail.MARQUE) {
              return <p key={index}>{detail.MARQUE}</p>;
            } else if (detail.TAILLE) {
              return <p key={index}>{detail.TAILLE}</p>;
            } else {
              return null;
            }
          })}
        </div>
      </article>
    </Link>
  );
};

export default OfferCard;

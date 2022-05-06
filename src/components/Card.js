import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const Card = ({img, rating, peopleCount, country, title, price}) => {
  return (
    <div className="card">
      <div>
        <img className="w-100" src={img} alt="" />
      </div>
      <div className="rating">
        <p>
          <FontAwesomeIcon className="star-icon" icon={faStar} /> {rating}
          <span className="rating-add-info">
            {" "}
            &#40;{peopleCount}&#41; &bull; {country}
          </span>
        </p>
      </div>
      <p className="card-title">{title}</p>
      <p className="card-price">
        <span>From {price}</span> / person
      </p>
    </div>
  );
};

export default Card;

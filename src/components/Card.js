import cardImage from "../images/image.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className="card">
      <div>
        <img className="w-100" src={cardImage} alt="" />
      </div>
      <div className="rating">
        <p>
          <FontAwesomeIcon className="star-icon" icon={faStar} /> 5.0
          &#40;6&#41; &bull; USA
        </p>
      </div>
      <p className="card-title">Life lessons with Katie Zaferes</p>
      <p className="card-price">
        <span>From $136</span> / person
      </p>
    </div>
  );
};

export default Card;

import image from "../images/airbnb-grid.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-img">
        <img className="w-100" src={image} alt="" />
      </div>
      <div className="hero-txt">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;

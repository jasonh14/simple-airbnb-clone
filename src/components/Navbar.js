import logo from "../images/airbnb-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img className="w-100" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Navbar;

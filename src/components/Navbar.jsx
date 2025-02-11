import { Link, Links } from "react-router-dom";
import logo from "../assets/afrigist_logo.jpg";
import me from "../assets/jas.jpg";
import { MY_ROUTES } from "../../paths";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar-one flex nav-padding">
        <div className="left flex">
          <div className="img">
            <img src={logo} alt="logo" height="80px" width="70px" />
          </div>
        </div>

        <div>
          <h1 style={{ margin: "0", fontSize: "40px" }}>
            MFou MUNICIPALITY WEB PORTAL
          </h1>
          <p>
            Land Infomation System for MFou Municipality Centre Region, Cameroon
          </p>
        </div>

        <div className="right flex">
          {/* <p style={{paddingRight: "10px"}}>Diom Jasper Yam</p> */}
          <p style={{paddingRight: "10px"}}>Hi</p>
          <div className="img">
            {/* <img src={me} alt="my picture" height="90px" width="70px" /> */}
            <img src={`${me}s`} alt="my picture" height="90px" width="70px" />
          </div>
        </div>
      </nav>

      <nav className="navbar-second flex-home">
        <ul className="flex justify-center">
          <li>
            <Link to={MY_ROUTES.HOME}>HOME</Link>
          </li>
          <li>
            <Link to={MY_ROUTES.SEARCH}>SEARCH</Link>
          </li>
          <li>
            <Link to={MY_ROUTES.MAP}>PARCEL LOCATION</Link>
          </li>
          <li>
            <Link to={MY_ROUTES.CONTACT}>CONTACT US</Link>
          </li>
          <li>
            {" "}
            <Link to={MY_ROUTES.LOGIN}>LOGIN </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

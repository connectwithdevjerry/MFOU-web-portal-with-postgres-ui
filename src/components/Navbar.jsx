import { Link, Links } from "react-router-dom";
import logo from "../assets/afrigist_logo.jpg";
import me from "../assets/jas.jpg";
import { MY_ROUTES } from "../../paths";

const Navbar = ({ showDetails, setShowDetails }) => {
  return (
    <header>
      <nav className="navbar-one flex nav-padding">
        <div className="left flex">
          <div className="img">
            <img src={logo} alt="logo" width="170px" />
          </div>
        </div>

        <div>
          <h1 style={{ margin: "0", fontSize: "40px", fontWeight: 700 }}>
            MFou MUNICIPALITY WEB PORTAL
          </h1>
          <p>
            Land Infomation System for MFou Municipality Centre Region, Cameroon
          </p>
        </div>

        <div className="right flex">
          <p
            onClick={() => setShowDetails(!showDetails)}
            style={{ paddingRight: "10px" }}
          >
            Diom Jasper Yam
          </p>
          <div className="img">
            <img src={me} alt="my picture" width="60px" />
          </div>
        </div>
      </nav>

      <nav className="navbar-second flex-home">
        <ul className="flex justify-center">
          <li>
            <Link to={MY_ROUTES.HOME}>HOME</Link>
          </li>
          <li className="tooltip">
            <span className="tooltip-text">
              Search for non-spatial attributes. It is achieved using <br />
              block number and plot number used to print C-of-O
            </span>
            <Link to={MY_ROUTES.SEARCH}>SEARCH</Link>
          </li>
          <li className="tooltip">
            <span className="tooltip-text">
              Used for parcel identification and a different Land-Use in the
              Municipality
            </span>
            <Link to={MY_ROUTES.MAP}>PARCEL LOCATION</Link>
          </li>
          <li className="tooltip">
            <span className="tooltip-text">
              Used to report back for any inquiry!
            </span>
            <Link to={MY_ROUTES.CONTACT}>CONTACT US</Link>
          </li>
          <li>
            <Link to={MY_ROUTES.LOGIN}>LOGIN </Link>
          </li>
          <li>
            <Link to={MY_ROUTES.ABOUT}>ABOUT </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

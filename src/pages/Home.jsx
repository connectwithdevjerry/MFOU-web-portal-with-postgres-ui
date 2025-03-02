import { Navbar } from "../components";
import cameroon from "../assets/cameroon.jpg";

const Home = ({ showDetails, setShowDetails }) => {
  return (
    <div className="parcelLocate home-cus">
      <Navbar showDetails={showDetails} setShowDetails={setShowDetails} />
      <h1 className="text-2xl weight">
        Web-based land information system for mfou municipality, centre
        Region Cameroon
      </h1>
      {showDetails && (
        <ul className="contact_card">
          <li>
            <h2>contact details:</h2>
          </li>
          <li>
            <a href="mailto:diomjasper@gmail.com">My Email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/diom-jasper-yam-50b7012a1?trk=contact-info">
              My LinkedIn
            </a>
          </li>
          <li>
            <a href="https://instagram.com/jasper_diom">My Instagram Handle</a>
          </li>
          <li>
            <a href="tel:+237674296017">Phone 1</a>
          </li>
          <li>
            <a href="tel:+23756657567">Phone 2</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Home;

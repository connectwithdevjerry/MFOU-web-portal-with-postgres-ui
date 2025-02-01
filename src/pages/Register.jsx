import { Link } from "react-router";
import { MY_ROUTES } from "../../paths";

const Register = () => {

  // const [userDetails, setU]= useState({})

  return (
    <div className="reg-wrapper">
      <div className="reg-container">
        <div className="reg-left-column">
          <div>
            <h1>Register</h1>
            <h4>Register to get started</h4>
          </div>
          <form className="">
            <label className="reg-label" for="">
              Name
            </label>
            <input type="text" className="" placeholder="Input Name" />
            <label className="reg-label" for="">
              Date Of Birth
            </label>
            <input type="date" placeholder="Input Name" />
            <label className="reg-label" for="">
              Gender
            </label>
            <input
              type="radio"
              name="gender"
              value="Male"
              className="radio-input"
              placeholder="Enter your gender"
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              className="radio-input"
              placeholder="Enter your gender"
            />
            Female
            <label className="reg-label" for="">
              Nationality
            </label>
            <input
              type="text"
              className="input-text"
              placeholder="Input Nationality"
            />
            <label className="reg-label" for="">
              Email
            </label>
            <input
              type="email"
              className="email-input"
              placeholder="Input Email"
            />
            <label className="reg-label" for="">
              Password
            </label>
            <input
              type="password"
              className="pass-input"
              placeholder="Input Password"
            />
            <input type="button" className="submit-input" value="Submit" />
          </form>
        </div>
        <div className="reg-right-column">
          <footer>
            <p>
              By clicking Sign up button you agree to out terms and condition{" "}
              <br />
              <a href="#">Terms and Condition</a>
              and <Link to={""}>Policy Privacy</Link>{" "}
            </p>
            <p>
              Already have an account? <Link to={MY_ROUTES.LOGIN}>Login here</Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Register;

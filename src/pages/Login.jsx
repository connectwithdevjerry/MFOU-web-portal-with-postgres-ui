import { Navbar } from "../components";
import loginImage from "../assets/mountain.jpg";
import { MY_ROUTES } from "../../paths";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="login-container">
      <Navbar />
      <div className="container login-wrapper">
        <form id="login-form">
          <h1>Login</h1>

          <label for="">Email</label>
          <input type="email" placeholder="Input email" />
          <label for="">Password</label>
          <input type="password" placeholder="Input password" />
          <button type="submit">Log in</button>
        </form>
        <div>
          <p>
            Not have an account{" "}
            <Link to={MY_ROUTES.REGISTER}> Register Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

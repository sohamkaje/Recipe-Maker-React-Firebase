import {Link} from 'react-router-dom';
import "./login.css";

const Login = () => {
    return (
      <body>
        <div class="background">
          <div class="shape"></div>
          <div class="shape"></div>
        </div>
        <form>
          <h3>Recipe Maker</h3>

          <label for="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username"></input>

          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password"></input>

          <button>Log In</button>
          <div class="social">
            <Link to="/recipe" class="go">
              <button>Sign in with Google</button>
            </Link>
            <Link to="/create-new-account" class="fb">
              <button>Create Account</button>
            </Link>
          </div>
        </form>
      </body>
    );
}

export default Login
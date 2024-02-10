import {Link} from 'react-router-dom';
import './signup.css';

const signup = () => {
  return (
    <body>
    <form>
      <h3>Recipe Maker</h3>

      <label for="username">Enter Email:</label>
      <input type="text" placeholder="Email" id="username"></input>

      <label for="password">Enter Password:</label>
      <input type="password" placeholder="Password" id="password"></input>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Link to="/data-collection">
          <button>Register</button>
      </Link>
    </form>
  </body>
  )
}

export default signup;
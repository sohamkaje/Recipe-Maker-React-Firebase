import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './signup.css';
import { createAcct } from '../../Firebase/firebase.js';

const Signup = () => {
  // Initialize the navigate function using the useNavigate hook from react-router-dom
  let navigate = useNavigate();

  // Event handler for form submission (user registration)
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Retrieve email and password from the form
    const email = event.target.username.value;
    const password = event.target.password.value;

    // Use createAcct from firebase.js to attempt creating a new user
    createAcct(email, password)
      .then((userCredential) => {
        // Account creation successful, userCredential contains information about the newly created user
        console.log(userCredential.user); // For debugging purposes, you might want to remove it later
        navigate('/data-collection'); // Redirect to '/data-collection' upon successful account creation
      })
      .catch((error) => {
        // Handle errors here, such as displaying a message to the user
        console.error("Error creating user:", error.message);
        alert("Failed to create account: " + error.message); // Display a simple error message
      });
  };

  return (
    <div class="loginContainer">
      <form onSubmit={handleSubmit}>
        <h3>Meals 4 Me</h3>

        <label htmlFor="username">Enter Email:</label>
        <input type="email" placeholder="Email" id="username" name="username" required />

        <label htmlFor="password">Enter Password:</label>
        <input type="password" placeholder="Password (Min: 8 characters)" id="password" name="password" required />

        <br></br>

        <button type="submit" class="loginbtn">Register</button>

        <Link to="/">
          <button class="loginbtn">Go back</button>
        </Link>
      </form>
    </div>
  );
};

export default Signup;

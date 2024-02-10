import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import "./login.css";

const Login = () => {
    // Initialize the navigate function using the useNavigate hook from react-router-dom
    let navigate = useNavigate();
    // Initialize the auth object using the getAuth function from Firebase
    const auth = getAuth();

    // Event handler for regular email and password login
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        // Retrieve the email and password from the input fields
        const email = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            // Attempt to sign in using email and password
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/data-collection'); // Redirect the user after successful login
        } catch (error) {
            alert(error.message); // Display error message
        }
    };

    // Event handler for Google sign-in
    const handleGoogleSignIn = async () => {
        // Create a Google authentication provider
        const provider = new GoogleAuthProvider();
        try {
            // Attempt to sign in with Google using a pop-up
            await signInWithPopup(auth, provider);
            navigate('/data-collection'); // Redirect the user after successful login
        } catch (error) {
            alert(error.message); // Display error message
        }
    };

    return (
        <div class="loginContainer">
            <form onSubmit={handleLogin}>
                <h3>Meals 4 Me</h3>

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Email" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />

                <button type="submit" class="loginbtn">Log In</button>
            <div className="social">
                <button onClick={handleGoogleSignIn} class="loginbtn-google">Sign in with Google</button>
                <Link to="/create-new-account">
                    <button class="loginbtn">Create Account</button>
                </Link>
            </div>
            </form>

        </div>
    );
}

export default Login;

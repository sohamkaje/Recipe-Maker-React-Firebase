import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import "./login.css";

const Login = () => {
    let navigate = useNavigate();
    const auth = getAuth();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        const email = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/data-collection'); // Redirect the user after successful login
        } catch (error) {
            alert(error.message); // Display error message
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            navigate('/data-collection'); // Redirect the user after successful login
        } catch (error) {
            alert(error.message); // Display error message
        }
    };

    return (
        <div class="loginContainer">
            <form onSubmit={handleLogin}>
                <h3>Recipe Maker</h3>

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Email" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />

                <button type="submit">Log In</button>
            <div className="social">
                <button onClick={handleGoogleSignIn} className="go">Sign in with Google</button>
                <Link to="/create-new-account" className="fb">
                    <button>Create Account</button>
                </Link>
            </div>
            </form>

        </div>
    );
}

export default Login;

import React, { useState } from 'react';
//import './App.css';

function App() {
    const [isSignUp, setIsSignUp] = useState(false);

    const switchToSignUp = () => setIsSignUp(true);
    const switchToLogin = () => setIsSignUp(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents form from reloading the page
        console.log(isSignUp ? "Signing up" : "Logging in");
        // Add form validation or submit logic here
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Shopping List</h1>
            </header>

            {!isSignUp ? (
                <section className="App-section">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" placeholder="Enter your password" required />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <div className="switch">
                        <p>Don't have an account? <a href="#" onClick={switchToSignUp}>Sign Up</a></p>
                    </div>
                </section>
            ) : (
                <section className="App-section">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="signup-email">Email:</label>
                            <input type="email" id="signup-email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="signup-password">Password:</label>
                            <input type="password" id="signup-password" placeholder="Enter your password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password:</label>
                            <input type="password" id="confirm-password" placeholder="Confirm your password" required />
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                    <div className="switch">
                        <p>Already have an account? <a href="#" onClick={switchToLogin}>Login</a></p>
                    </div>
                </section>
            )}

            <footer className="App-footer">
                <p>&copy; 2024 Shopping List. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;

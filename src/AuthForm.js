import { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="form-container">
            <div className="form-toggle">
              <button
                className={isLogin ? 'active' : ''}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={!isLogin ? 'active' : ''}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>
            <form className="form">
              <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              {!isLogin && (
                <input type="password" placeholder="Confirm Password" required />
              )}
              <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
              {isLogin && <a href="#" className="forgot-password">Forgot Password?</a>}

            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

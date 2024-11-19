import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', email, password);
    setEmail('');
    setPassword('');
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="login__open-button"
      >
        Login
      </button>

      {isOpen && (
        <div className="login__overlay">
          <div className="login__modal">
            <h3>Login to Your Account</h3>
            <form onSubmit={handleSubmit}>
              <div className="login__input-group">
                <div className="relative">
                  <FaUser className="login__icon" />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="login__input"
                  />
                </div>
              </div>
              <div className="login__input-group">
                <div className="relative">
                  <FaLock className="login__icon" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="login__input"
                  />
                </div>
              </div>
              <button type="submit" className="login__submit-button">
                Sign in
              </button>
            </form>
            <button onClick={() => setIsOpen(false)} className="login__close-button">
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;

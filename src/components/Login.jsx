import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4000/login`,{email,password}).then((result) => {
      console.log(result)
      localStorage.setItem('user-email', email)
      navigate('/')
    }).catch((err) => {console.log(err)})
    // Simulate a successful login here
    // You can replace this with your actual login logic
    // For example, here we'll assume the login is successful after a delay
    // setTimeout(() => {
    //   // Reset form fields
    //   setEmail('');
    //   setPassword('');

    //   // Show success message
    //   setSuccessMessage('Login successful!');

    //   // Clear success message after a few seconds (optional)
    //   setTimeout(() => {
    //     setSuccessMessage('');
    //   }, 5000);
    // }, 2000);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header text-center">
                <h4>Login Form</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group mt-2">
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={handleLogin}
                    className="btn btn-primary btn-block mt-2"
                  >
                    Login
                  </button>
                  {successMessage && (
                    <div className="alert alert-success mt-2">{successMessage}</div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

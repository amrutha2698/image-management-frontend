import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate()


  const handleRegister = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4000/register`,{name,email,mobile,password}).then((result) => {
      console.log(result)
      navigate('/login')
    }).catch((err) => {console.log(err)})
    // Simulate a successful registration here
    // You can replace this with your actual registration logic
    // For example, here we'll assume the registration is successful after a delay
    setTimeout(() => {
      // Reset form fields
      setName('');
      setEmail('');
      setMobile('');
      setPassword('');

      // Show success message
      setSuccessMessage('Registration successful!');

      // Clear success message after a few seconds (optional)
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    }, 2000);
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header text-center">
                <h4>Registration Form</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group mt-2">
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="tel"
                      className="form-control"
                      id="mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={handleRegister}
                    className="btn btn-primary btn-block mt-2"
                  >
                    Register
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
    </div>
  );
};

export default Register;

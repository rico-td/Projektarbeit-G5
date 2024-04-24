import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../api/userQueries";
import bg from "../../assets/img/bg.jpg";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Basic validation
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const userData = { username: name, email: email, password: password };
      const newUser = await signupUser(userData);
      // If the signup is successful, navigate to login page
      navigate("/login", newUser);
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle signup failure
    }
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${bg})` }}>
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <div className="bg-white p-3 rounded">
            <h2 className="mb-4">Sign-Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name">
                  <strong>Name</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter the Name"
                  name="name"
                  value={name}
                  onChange={handleInput}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter the Email"
                  name="email"
                  value={email}
                  onChange={handleInput}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  placeholder="Enter the Password"
                  name="password"
                  value={password}
                  onChange={handleInput}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-success w-100 mb-3">
                <strong>Signup</strong>
              </button>
              <p>You agree to our Terms and Policies</p>
              <Link
                to="/login"
                className="btn btn-default w-100 bg-light text-dark mb-3"
              >
                <strong>Login</strong>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

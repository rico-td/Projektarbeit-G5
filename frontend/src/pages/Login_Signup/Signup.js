import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../api/userQueries";

import logo from "../../assets/img/logo.png";

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
    <div className="flex flex-col justify-start py-20 items-center gap-10 min-h-screen bg-gradient-to-r">
      <div className="flex flex-col justify-center items-center">
        <Link to="/">
          <img className="rotate-180" src={logo} alt="" width="80px" />
        </Link>
        <p className="font-bold text-white">Home</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl mb-4 text-center font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={handleInput}
              className="form-input w-full focus:outline-none font-light"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={handleInput}
              className="form-input w-full focus:outline-none font-light"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={handleInput}
              className="form-input w-full focus:outline-none font-light"
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm mb-4 text-center font-bold">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="bg-orange-400 text-white w-full py-2 rounded-md hover:bg-orange-500 focus:outline-none focus:bg-orange-500"
          >
            Sign Up
          </button>
          <p className="text-xs mt-2 text-center">
            By signing up, you agree to our{" "}
            <Link to="#" className="text-orange-500">
              Terms
            </Link>{" "}
            and{" "}
            <Link to="#" className="text-orange-500">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="text-center mt-4">
            <Link to="/login" className="text-orange-500 hover:underline">
              Already have an account? Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

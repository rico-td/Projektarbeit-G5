import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "../../assets/img/logo.png";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic validation
    if (!values.email || !values.password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    // Clear previous error message
    setErrorMessage("");
    // Set loading state
    setIsLoading(true);
    axios
      .post("http://localhost:7070/v1/user/login", values)
      .then((res) => {
        if (res.data.user) {
          navigate("/");
        } else {
          setErrorMessage("Login failed. Please check your credentials.");
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(
          "An error occurred while logging in. Please try again later."
        );
      })
      .finally(() => {
        // Reset loading state
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col justify-start items-center bg-gradient-to-r h-screen gap-10 py-20">
      <div className="flex flex-col justify-center items-center">
        <Link to="/">
          <img className="rotate-180" src={logo} alt="" width="80px" />
        </Link>
        <p className="font-light text-white">Home</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>
        <form onSubmit={handleSubmit}>
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
              value={values.email}
              onChange={handleInput}
              className="form-input w-full rounded-md"
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
              value={values.password}
              onChange={handleInput}
              className="form-input w-full rounded-md"
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )}
          <button
            type="submit"
            className={`bg-blue-500 text-white w-full py-2 rounded-md focus:outline-none focus:bg-blue-600 ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <p className="text-xs mt-2 text-center">
            By signing in, you agree to our{" "}
            <Link to="#" className="text-blue-500">
              Terms
            </Link>{" "}
            and{" "}
            <Link to="#" className="text-blue-500">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="text-center mt-4">
            <Link to="/signup" className="text-blue-500 hover:underline">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

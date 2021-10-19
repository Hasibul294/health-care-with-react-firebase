import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="d-flex justify-content-center my-5">
      <div>
        <h2 className="text-center">Please Login</h2>
        <form onSubmit="">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <p className="fw-bold my-2">
          New User? <Link to="/register">Create Account</Link>
        </p>
        <hr />
        <button
          onClick={signInUsingGoogle}
          className="btn-primary px-4 py-1 mx-5 border-0 rounded-pill"
        >
          <i class="fab fa-google bg-warning p-2 rounded-circle me-3 border-0"></i>
          Google SignIn
        </button>
      </div>
    </div>
  );
};

export default Login;

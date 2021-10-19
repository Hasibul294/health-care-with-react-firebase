import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    error,
    signInUsingGoogle,
    setIsLoading,
    handleEmail,
    handlePassword,
    handleLogin,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_url);
      })
      .catch((error) => {
        console.log("Error", error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="d-flex justify-content-center my-5">
      <div>
        <h2 className="text-center">Please Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onBlur={handleEmail}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onBlur={handlePassword}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="mb-3 text-danger">{error}</div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <p className="fw-bold my-2">
          New User? <Link to="/register">Create Account</Link>
        </p>
        <hr />
        <button
          onClick={handleGoogleLogin}
          className="btn-primary px-4 py-1 mx-5 border-0 rounded-pill"
        >
          <i className="fab fa-google bg-warning p-2 rounded-circle me-3 border-0"></i>
          Google SignIn
        </button>
      </div>
    </div>
  );
};

export default Login;

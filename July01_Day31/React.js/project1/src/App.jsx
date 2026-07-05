import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">

        <h1>Login Form</h1>

        <div className="tabs">
          <button className="active">Login</button>
          <button>Signup</button>
        </div>

        <form>

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <a href="/">Forgot password?</a>

          <button className="login-btn">
            Login
          </button>

        </form>

        <p>
          Not a member?
          <span> Signup now</span>
        </p>

      </div>
    </div>
  );
}

export default App;
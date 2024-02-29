import "./Login.css";
export default function Login() {
  return (
    <div className="Login">
      <h2>Welcome back</h2>
      <form action="">
        <div className="input-text">
          <input type="text" placeholder="username" />
        </div>
        <div className="input-password">
          <input type="password" placeholder="password" />
        </div>
      </form>
      
      <button>Log In</button>
    </div>
  );
}

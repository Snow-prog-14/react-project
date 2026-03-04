import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loadUsers } from "../App";

type Props = { onLogin: () => void };

export default function LoginPage({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    const users = loadUsers();
    const match = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password,
    );

    if (!match) {
      setError("Invalid email or password.");
      return;
    }

    onLogin();
    navigate("/home");
  }

  return (
    <div className="container py-5" style={{ maxWidth: 420 }}>
      <div className="card bg-dark text-light border-secondary shadow">
        <div className="card-body p-4">
          <h2 className="mb-1">Welcome back</h2>
          <p className="text-secondary mb-4">Log in to continue.</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control bg-black text-light border-secondary"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  className="form-control bg-black text-light border-secondary"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && (
              <div className="alert alert-danger py-2 mt-3">{error}</div>
            )}

            <button className="btn btn-primary w-100 mt-3" type="submit">
              Login
            </button>

            <div className="text-center text-secondary my-3">or</div>

            <div className="text-center">
              <Link className="link-info" to="/register">
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

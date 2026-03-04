import { useState } from "react";
import "./App.css";

type LoginForm = {
  email: string;
  password: string;
};

type User = {
  email: string;
  password: string;
};

function loadUsers(): User[] {
  const raw = localStorage.getItem("users");
  return raw ? (JSON.parse(raw) as User[]) : [];
}

function saveUsers(users: User[]) {
  localStorage.setItem("users", JSON.stringify(users));
}

type PasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  placeholder: string;
};

function PasswordInput({
  value,
  onChange,
  showPassword,
  setShowPassword,
  placeholder,
}: PasswordInputProps) {
  return (
    <label className="label">
      Password
      <div className="passwordWrap">
        <input
          className="input"
          type={showPassword ? "text" : "password"}
          name="password"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />

        <button
          type="button"
          className="eyeBtn"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      </div>
    </label>
  );
}

export default function App() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const [error, setError] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!form.email || !form.password) {
      setError("Please fill in both email and password.");
      return;
    }

    const users = loadUsers();
    const match = users.find(
      (u) =>
        u.email.toLocaleLowerCase() === form.email.toLowerCase() &&
        u.password === form.password,
    );

    if (match) {
      setIsLoggedIn(true);
      return;
    }

    setError("Invalid Email or Password");
  }

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please fill in both email and password.");
      return;
    }

    if (form.password.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }

    const users = loadUsers();
    const exists = users.some(
      (u) => u.email.toLowerCase() === form.email.toLowerCase(),
    );

    if (exists) {
      setError("That email is already registered. Try logging in.");
      return;
    }

    users.push({ email: form.email, password: form.password });
    saveUsers(users);

    // after creating account, switch to login
    setMode("login");
    setError("Account created! Now log in.");
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setForm({ email: "", password: "" });
    setError("");
  }

return (
  <div className="page">
    <div className="card">
      <div className="header">
        <h1 className="title">{mode === "login" ? "Welcome" : "Create account"}</h1>
        <p className="subtitle">
          {mode === "login" ? "Log in to continue." : "Make an account in 10 seconds."}
        </p>
      </div>

      {isLoggedIn ? (
        <>
          <p className="text">You’re logged in. Congrats.</p>
          <button className="button" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          {mode === "login" ? (
            <form onSubmit={handleSubmit} className="form">
              <label className="label">
                Email
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </label>

              <PasswordInput
                value={form.password}
                onChange={handleChange}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                placeholder="Enter your password"
              />

              {error && <p className="error">{error}</p>}

              <button className="button" type="submit">
                Login
              </button>

              <div className="dividerRow">
                <div className="dividerLine" />
                <span className="dividerText">or</span>
                <div className="dividerLine" />
              </div>

              <p className="hint">
                No account?{" "}
                <button
                  type="button"
                  className="linkBtn"
                  onClick={() => setMode("register")}
                >
                  Create one
                </button>
              </p>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="form">
              <label className="label">
                Email
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </label>

              <PasswordInput
                value={form.password}
                onChange={handleChange}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                placeholder="Create a password"
              />

              {error && <p className="error">{error}</p>}

              <button className="button" type="submit">
                Create Account
              </button>

              <p className="hint">
                Already have one?{" "}
                <button
                  type="button"
                  className="linkBtn"
                  onClick={() => setMode("login")}
                >
                  Log in
                </button>
              </p>
            </form>
          )}
        </>
      )}
    </div>
  </div>
);
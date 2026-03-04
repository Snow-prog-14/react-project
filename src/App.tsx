import { useState } from "react";

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

const styles: Record<string, React.CSSProperties> = {
  header: {
    marginBottom: 18,
  },
  subtitle: {
    margin: "8px 0 0",
    color: "#94a3b8",
    fontSize: 13,
    lineHeight: 1.4,
  },
  passwordWrap: {
    position: "relative",
    display: "grid",
  },
  eyeBtn: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: "translateY(-50%)",
    border: "1px solid rgba(148,163,184,0.16)",
    background: "rgba(15, 23, 42, 0.7)",
    color: "#e5e7eb",
    borderRadius: 10,
    padding: "6px 10px",
    cursor: "pointer",
    lineHeight: 1,
  },
  dividerRow: {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    gap: 10,
    marginTop: 14,
    marginBottom: 6,
  },
  dividerLine: {
    height: 1,
    background: "rgba(148,163,184,0.18)",
  },
  dividerText: {
    color: "#94a3b8",
    fontSize: 12,
  },
  linkBtn: {
    background: "transparent",
    border: "none",
    padding: 0,
    color: "#a5b4fc",
    cursor: "pointer",
    fontWeight: 700,
    textDecoration: "underline",
  },

  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "#0f172a",
    padding: 16,
  },
  card: {
    width: "100%",
    maxWidth: 380,
    background: "#111827",
    borderRadius: 16,
    padding: 24,
    boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
  },
  title: {
    margin: 0,
    marginBottom: 16,
    color: "#e5e7eb",
    fontSize: 24,
  },
  form: {
    display: "grid",
    gap: 12,
  },
  label: {
    color: "#cbd5e1",
    display: "grid",
    gap: 6,
    fontSize: 14,
  },
  input: {
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid #334155",
    background: "#0b1220",
    color: "#e5e7eb",
    outline: "none",
  },
  button: {
    marginTop: 8,
    padding: "10px 12px",
    borderRadius: 10,
    border: "none",
    background: "#6366f1",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
  },
  error: {
    margin: 0,
    color: "#fb7185",
    fontSize: 14,
  },
  hint: {
    margin: 0,
    marginTop: 8,
    color: "#94a3b8",
    fontSize: 12,
  },
  text: {
    color: "#cbd5e1",
    marginTop: 8,
    marginBottom: 12,
  },
};

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

    // Fake login rule (demo only)
    if (form.email === "test@email.com" && form.password === "1234") {
      setIsLoggedIn(true);
      return;
    }

    setError("Invalid credentials. Try test@email.com / 1234");
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
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>
            {mode === "login" ? "Welcome" : "Create account"}
          </h1>
          <p style={styles.subtitle}>
            {mode === "login"
              ? "Log in to continue."
              : "Make an account in 10 seconds."}
          </p>
        </div>

        {isLoggedIn ? (
          <>
            <p style={styles.text}>You’re logged in. Congrats.</p>
            <button style={styles.button} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            {mode === "login" ? (
              <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>
                  Email
                  <input
                    style={styles.input}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </label>

                <label style={styles.label}>
                  Password
                  <div style={styles.passwordWrap}>
                    <input
                      style={styles.input}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder={
                        mode === "login"
                          ? "Enter your Password"
                          : "Create a Password"
                      }
                    />
                    <button
                      type="button"
                      style={styles.eyeBtn}
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={
                        showPassword ? "Hide Password" : "Show Password"
                      }
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </label>

                {error && <p style={styles.error}>{error}</p>}

                <button style={styles.button} type="submit">
                  Login
                </button>

                <div style={styles.dividerRow}>
                  <div style={styles.dividerLine} />
                  <span style={styles.dividerText}>or</span>
                  <div style={styles.dividerLine} />
                </div>

                <p style={styles.hint}>
                  No account?{" "}
                  <button
                    type="button"
                    style={styles.linkBtn}
                    onClick={() => setMode("register")}
                  >
                    Create one
                  </button>
                </p>
              </form>
            ) : (
              <form onSubmit={handleRegister} style={styles.form}>
                <label style={styles.label}>
                  Email
                  <input
                    style={styles.input}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </label>

                <label style={styles.label}>
                  Password
                  <input
                    style={styles.input}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                  />
                </label>

                <button
                  type="button"
                  style={styles.button}
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

                {error && <p style={styles.error}>{error}</p>}

                <button style={styles.button} type="submit">
                  Create Account
                </button>

                <p style={styles.hint}>
                  Already have one?{" "}
                  <button
                    type="button"
                    style={styles.linkBtn}
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
}

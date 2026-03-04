import { useState } from "react";

type LoginForm = {
  email: string;
  password: string;
};

export default function App() {
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

    // Fake login rule (demo only)
    if (form.email === "test@email.com" && form.password === "1234") {
      setIsLoggedIn(true);
      return;
    }

    setError("Invalid credentials. Try test@email.com / 1234");
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setForm({ email: "", password: "" });
    setError("");
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Simple Login</h1>

        {isLoggedIn ? (
          <>
            <p style={styles.text}>
              You’re logged in. Congrats on surviving authentication.
            </p>
            <button style={styles.button} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
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
              <input
                style={styles.input}
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </label>

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>

            {error && <p style={styles.error}>{error}</p>}

            <button style={styles.button} type="submit">
              Login
            </button>

            <p style={styles.hint}>Try: test@email.com / 1234</p>
          </form>
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
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

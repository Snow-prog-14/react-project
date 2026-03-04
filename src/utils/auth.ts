export type User = {
  email: string;
  password: string;
};

export function loadUsers(): User[] {
  const raw = localStorage.getItem("users");
  return raw ? (JSON.parse(raw) as User[]) : [];
}

export function saveUsers(users: User[]) {
  localStorage.setItem("users", JSON.stringify(users));
}
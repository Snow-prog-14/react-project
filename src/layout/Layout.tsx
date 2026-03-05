import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Search, Mic, PlusSquare } from "lucide-react";

type LayoutProps = { onLogout: () => void };

export default function Layout({ onLogout }: LayoutProps) {
  return (
    <div className="appShell">
      <header className="topbar">
        {/* ... your navbar ... */}
        <button onClick={onLogout} className="avatarBtn">
          Logout
        </button>
      </header>

      <div className="contentRow">
        <Sidebar collapsed={false} />
        <main className="mainContent">
          <Outlet context={{ onLogout }} />
        </main>
      </div>
    </div>
  );
}
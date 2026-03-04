import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Search, Mic, PlusSquare } from "lucide-react";

type Props = {
  onLogout: () => void;
};

export default function Layout({ onLogout }: Props) {
  return (
    <div className="appShell">

      {/* Sticky Topbar */}
      <header className="topbar">

        <div className="topbarLeft">
          <div className="brand">
            <span className="brandDot" />
            <span className="brandText">YouTube</span>
          </div>
        </div>

        <div className="topbarCenter">
          <div className="searchWrap">
            <input className="searchInput" placeholder="Search" />
            <button className="searchBtn">
              <Search size={18} />
            </button>
          </div>

          <button className="iconBtn">
            <Mic size={18} />
          </button>
        </div>

        <div className="topbarRight">
          <button className="iconBtn">
            <PlusSquare size={18} />
          </button>

          <button onClick={onLogout} className="avatarBtn">
            Logout
          </button>
        </div>

      </header>

      <div className="contentRow">

        <Sidebar collapsed={false} />

        {/* Page content loads here */}
        <main className="mainContent">
          <Outlet />
        </main>

      </div>

    </div>
  );
}
import {Home, PlaySquare, Tv, Clock, ThumbsUp } from "lucide-react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

type Props = {
  collapsed?: boolean;
};

export default function Sidebar({ collapsed }: Props) {
    const nav = useNavigate();

 const items = [
  { label: "Home", icon: <Home size={18} />, route: "/home" },
  { label: "Shorts", icon: <PlaySquare size={18} />, route: "/shorts" },
  { label: "Subscriptions", icon: <Tv size={18} />, route: "/home" },
  { label: "History", icon: <Clock size={18} />, route: "/home" },
  { label: "Liked videos", icon: <ThumbsUp size={18} />, route: "/home" },
];
  return (
    <aside className={`sidebar ${collapsed ? "sidebarCollapsed" : ""}`}>
      {items.map((it) => (
        <button
          key={it.label}
          className="sideItem"
          onClick={() => nav(it.route)}
        >
          <span className="sideIcon">{it.icon}</span>
          {!collapsed && <span className="sideLabel">{it.label}</span>}
        </button>
      ))}
    </aside>
  );
}
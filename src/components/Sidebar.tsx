import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      className="bg-dark border-end border-secondary p-3"
      style={{ minHeight: "calc(100vh - 56px)" }}
    >
      <div className="list-group">
        <Link
          to="/home"
          className="list-group-item list-group-item-action active"
        >
          Home
        </Link>

        <Link
          to="/shorts"
          className="list-group-item list-group-item-action bg-dark text-light border-secondary"
        >
          Shorts
        </Link>

        <Link
          to="/subscriptions"
          className="list-group-item list-group-item-action bg-dark text-light border-secondary"
        >
          Subscriptions
        </Link>

        <div className="border-top border-secondary my-2"></div>

        <Link
          to="/library"
          className="list-group-item list-group-item-action bg-dark text-light border-secondary"
        >
          Library
        </Link>

        <Link
          to="/history"
          className="list-group-item list-group-item-action bg-dark text-light border-secondary"
        >
          History
        </Link>
      </div>
    </aside>
  );
}

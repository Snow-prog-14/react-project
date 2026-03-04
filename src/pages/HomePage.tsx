import { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import { videos } from "../components/videos";
import { Search, Mic, PlusSquare } from "lucide-react";

type Props = { onLogout: () => void };

export default function HomePage({ onLogout }: Props) {

  const [collapsed, setCollapsed] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return videos;
    return videos.filter((v) =>
      v.title.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="appShell">

      {/* Top bar */}
      <header className="topbar">

        <div className="topbarLeft">
          <button
            className="iconBtn"
            onClick={() => setCollapsed((s) => !s)}
          >
            ☰
          </button>

          <div className="brand">
            <span className="brandDot" />
            <span className="brandText">YouTube</span>
          </div>
        </div>

        <div className="topbarCenter">
          <div className="searchWrap">
            <input
              className="searchInput"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

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

          {/* Logout button */}
          <button onClick={onLogout} className="avatarBtn">
            Logout
          </button>
        </div>

      </header>

      <div className="contentRow">

        <Sidebar collapsed={collapsed} />

        <main className="mainContent">

          {/* Category chips */}
          <div className="chipsRow">
            {["All", "Gaming", "Music", "Mixes", "Minigame", "News", "Live"].map((c) => (
              <button
                key={c}
                className={`chip ${c === "All" ? "chipActive" : ""}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Video grid */}
          <section className="grid">
            {filtered.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </section>

        </main>

      </div>

    </div>
  );
}
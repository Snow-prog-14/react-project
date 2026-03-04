import { useState } from "react";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import { videos } from "../components/videos";

type Props = { onLogout: () => void };

export default function HomePage({ onLogout }: Props) {
  const [query, setQuery] = useState("");

  const filtered = videos.filter((v) => {
    const q = query.toLowerCase();
    return (
      v.title.toLowerCase().includes(q) || v.channel.toLowerCase().includes(q)
    );
  });

  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-dark bg-dark border-bottom border-secondary px-3">
        <span className="navbar-brand">▶ YouTube</span>

        <form className="d-flex flex-grow-1 mx-3" style={{ maxWidth: 700 }}>
          <input
            className="form-control me-2 bg-black text-light border-secondary"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-primary" type="button">
            Search
          </button>
        </form>

        <button className="btn btn-outline-light" onClick={onLogout}>
          Logout
        </button>
      </nav>

      <div className="row g-0">
        <div className="col-12 col-md-3 col-lg-2">
          <Sidebar />
        </div>

        <main className="col-12 col-md-9 col-lg-10 p-3">
          <h5 className="text-light mb-3">Recommended</h5>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3">
            {filtered.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-secondary mt-3">No videos found.</div>
          )}
        </main>
      </div>
    </div>
  );
}

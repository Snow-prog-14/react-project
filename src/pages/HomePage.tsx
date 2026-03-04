import { useMemo, useState } from "react";
import VideoCard from "../components/VideoCard";
import { videos } from "../components/videos";

export default function HomePage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return videos;
    return videos.filter((v) => v.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      {/* Category chips */}
      <div className="chipsRow">
        {["All", "Gaming", "Music", "Mixes", "Minigame", "News", "Live"].map((c) => (
          <button key={c} className={`chip ${c === "All" ? "chipActive" : ""}`}>
            {c}
          </button>
        ))}
      </div>

      {/* Feed grid */}
      <section className="grid">
        {filtered.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </section>
    </>
  );
}
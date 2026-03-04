import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { videos } from "../components/videos";

export default function WatchPage() {
  const { id } = useParams();
  const nav = useNavigate();

  const video = useMemo(() => videos.find((v) => v.id === id), [id]);
  const recommended = useMemo(() => videos.filter((v) => v.id !== id), [id]);

  if (!video) {
    return (
      <div style={{ padding: 20 }}>
        <p>Video not found. Humans broke something again.</p>
        <button onClick={() => nav("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="watchShell">
      <div className="watchMain">
        <div className="playerFake">
          <img className="playerThumb" src={video.thumbnail} alt={video.title} />
        </div>

        <h1 className="watchTitle">{video.title}</h1>
        <p className="watchSub">
          {video.channel} • {video.views} • {video.uploaded}
        </p>
      </div>

      <aside className="watchSide">
        {recommended.map((r) => (
          <button key={r.id} className="recRow" onClick={() => nav(`/watch/${r.id}`)}>
            <img className="recThumb" src={r.thumbnail} alt={r.title} />
            <div className="recMeta">
              <div className="recTitle">{r.title}</div>
              <div className="recSub">{r.channel}</div>
              <div className="recSub">{r.views}</div>
            </div>
          </button>
        ))}
      </aside>
    </div>
  );
}
import { useNavigate } from "react-router-dom";
import type { Video } from "../components/videos";

export default function VideoCard({ video }: { video: Video }) {
  const nav = useNavigate();

  return (
    <article className="card" onClick={() => nav(`/watch/${video.id}`)} role="button">
      <div className="thumbWrap">
        <img className="thumb" src={video.thumbnail} alt={video.title} />
        <span className="duration">{video.duration}</span>
      </div>

      <div className="meta">
        <div className="metaAvatar">•</div>
        <div className="metaText">
          <h3 className="title">{video.title}</h3>
          <p className="sub">{video.channel}</p>
          <p className="sub">
            {video.views} • {video.uploaded}
          </p>
        </div>
      </div>
    </article>
  );
}
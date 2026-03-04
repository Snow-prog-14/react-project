import { Link } from "react-router-dom";
import type { Video } from "../components/videos";

type Props = {
  video: Video;
};

export default function VideoCard({ video }: Props) {
  return (
    <div className="col">
      <Link to={`/watch/${video.id}`} className="text-decoration-none">
        <div className="card bg-dark text-light border-secondary h-100 shadow-sm ytCard">
          {/* Thumbnail */}
          <div className="ratio ratio-16x9 bg-secondary position-relative ytThumb">
            {video.thumbnail ? (
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-100 h-100 object-fit-cover"
              />
            ) : null}

            {/* Duration badge */}
            <span className="badge bg-black bg-opacity-75 position-absolute bottom-0 end-0 m-2">
              {video.duration}
            </span>
          </div>

          {/* Meta */}
          <div className="card-body">
            <div className="d-flex gap-2">
              <div className="rounded-circle bg-secondary flex-shrink-0 ytAvatarDot" />
              <div>
                <div className="fw-bold small ytTitleClamp">{video.title}</div>
                <div className="text-secondary small">{video.channel}</div>
                <div className="text-secondary small">
                  {video.views} • {video.uploaded}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

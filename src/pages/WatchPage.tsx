import { useParams, Link } from "react-router-dom";
import { videos } from "../components/videos";

export default function WatchPage() {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);

  if (!video) {
    return (
      <div className="container py-4 text-light">
        <h3>Video not found</h3>
        <Link to="/home" className="btn btn-primary mt-3">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container-fluid py-3">
      <div className="row g-3">
        {/* Player */}
        <div className="col-12 col-lg-8">
          <div className="ratio ratio-16x9 bg-dark border border-secondary rounded">
            <div className="d-flex align-items-center justify-content-center text-secondary">
              Fake Video Player (put embed here later)
            </div>
          </div>

          <div className="mt-3 text-light">
            <h5 className="mb-1">{video.title}</h5>
            <div className="text-secondary small">
              {video.views} • {video.uploaded}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="col-12 col-lg-4">
          <h6 className="text-light mb-2">Up next</h6>
          <div className="d-grid gap-2">
            {videos
              .filter((v) => v.id !== video.id)
              .map((v) => (
                <Link
                  key={v.id}
                  to={`/watch/${v.id}`}
                  className="p-2 rounded border border-secondary bg-dark text-light text-decoration-none"
                >
                  <div className="fw-bold small">{v.title}</div>
                  <div className="text-secondary small">{v.channel}</div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

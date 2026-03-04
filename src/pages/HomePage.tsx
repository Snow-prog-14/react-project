type Props = { onLogout: () => void };

export default function HomePage({ onLogout }: Props) {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-dark bg-dark border-bottom border-secondary px-3">
        <span className="navbar-brand mb-0 h1">▶ YouTube</span>

        <form className="d-flex w-50">
          <input
            className="form-control me-2 bg-black text-light border-secondary"
            placeholder="Search"
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
        <aside
          className="col-12 col-md-2 bg-dark border-end border-secondary p-3"
          style={{ minHeight: "calc(100vh - 56px)" }}
        >
          <div className="list-group">
            <button className="list-group-item list-group-item-action active">
              Home
            </button>
            <button className="list-group-item list-group-item-action bg-dark text-light border-secondary">
              Shorts
            </button>
            <button className="list-group-item list-group-item-action bg-dark text-light border-secondary">
              Subscriptions
            </button>
          </div>
        </aside>

        <main className="col-12 col-md-10 p-3">
          <h5 className="text-light mb-3">Recommended</h5>

          <div className="row g-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={i}>
                <div className="card bg-dark text-light border-secondary h-100">
                  <div
                    style={{ height: 140 }}
                    className="bg-secondary bg-opacity-25"
                  />
                  <div className="card-body">
                    <div className="fw-bold">Sample Video Title #{i + 1}</div>
                    <div className="text-secondary small">Channel Name</div>
                    <div className="text-secondary small">
                      12K views • 2 days ago
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

import Sidebar from "../components/Sidebar";
import { shorts } from "../components/shorts";

type Props = { onLogout: () => void };

export default function ShortsPage({ onLogout }: Props) {
  return (
    <div className="appShell">
      <header className="topbar">
        <div className="topbarLeft">
          <div className="brand">
            <span className="brandDot" />
            <span className="brandText">YouTube</span>
          </div>
        </div>

        <div className="topbarRight">
          <button onClick={onLogout} className="avatarBtn">
            Logout
          </button>
        </div>
      </header>

      <div className="contentRow">
        <Sidebar collapsed={false} />

        <main className="mainContent">
          <h2 style={{ margin: "8px 0 14px" }}>Shorts</h2>

          <section className="shortsGrid">
            {shorts.map((s) => (
              <article key={s.id} className="shortCard">
                <div className="shortThumbWrap">
                  <img className="shortThumb" src={s.thumbnail} alt={s.title} />
                </div>

                <div className="shortMeta">
                  <div className="shortTitle">{s.title}</div>
                  <div className="shortSub">
                    {s.channel} • {s.views}
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
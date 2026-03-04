type DashboardProps = {
  onLogout: () => void;
};

type Video = {
  id: number;
  title: string;
  channel: string;
  views: string;
  uploaded: string;
};

const videos: Video[] = [
  {
    id: 1,
    title: "React Login Project",
    channel: "Baby Dev",
    views: "12K views",
    uploaded: "2 days ago",
  },
  {
    id: 2,
    title: "TypeScript Basics",
    channel: "Code Snacks",
    views: "88K views",
    uploaded: "1 week ago",
  },
  {
    id: 3,
    title: "UI Tricks That Look Pro",
    channel: "Design Lite",
    views: "203K views",
    uploaded: "3 weeks ago",
  },
  {
    id: 4,
    title: "Build a Tiny YouTube Clone",
    channel: "Frontend Fun",
    views: "34K views",
    uploaded: "5 days ago",
  },
];

export default function Dashboard({ onLogout }: DashboardProps) {
  return (
    <div className="yt">
      <header className="ytTop">
        <div className="ytLogo">▶ YouTube</div>

        <div className="ytSearch">
          <input className="ytSearchInput" placeholder="Search" />
          <button className="ytSearchBtn">Search</button>
        </div>

        <div className="ytRight">
          <div className="ytAvatar">B</div>
          <button className="ytLogout" onClick={onLogout}>
            Logout
          </button>
        </div>
      </header>

      <div className="ytBody">
        <aside className="ytSide">
          <button className="ytSideItem ytActive">Home</button>
          <button className="ytSideItem">Shorts</button>
          <button className="ytSideItem">Subscriptions</button>
        </aside>

        <main className="ytMain">
          <h2 className="ytHeading">Recommended</h2>

          <div className="ytGrid">
            {videos.map((video) => (
              <div key={video.id} className="ytCard">
                <div className="ytThumb" />

                <div className="ytMeta">
                  <div className="ytTitle">{video.title}</div>
                  <div className="ytSub">{video.channel}</div>
                  <div className="ytSub">
                    {video.views} • {video.uploaded}
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

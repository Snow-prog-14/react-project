import { NavLink } from "react-router-dom";

type Sub = {
  name: string;
  img?: string;
  live?: boolean; // <-- lowercase "live" to match your objects
};

const subs: Sub[] = [
  { name: "Muse Asia", live: true },
  { name: "Muse Philippines", live: true },
  { name: "Disney Jr.", live: true },
  { name: "Disney Channel", live: true },
  { name: "Ani-One Philippin...", live: true },
  { name: "Wild Kratts - Sch...", live: true },
  { name: "Alan Becker", live: true },
];

type Props = {
  collapsed?: boolean;
};

export default function Sidebar({ collapsed = false }: Props) {
  return (
    <aside className={`ytSide ${collapsed ? "ytSide--collapsed" : ""}`}>
      {/* Top group */}
      <nav className="ytGroup">
        <SideItem to="/home" icon="bi-house-door-fill" label="Home" />
        <SideItem to="/shorts" icon="bi-lightning-charge" label="Shorts" />
        <SideItem
          to="/subscriptions"
          icon="bi-collection-play"
          label="Subscriptions"
        />
      </nav>

      <div className="ytDivider" />

      {/* Subscriptions */}
      <div className="ytSectionHeader">
        <span>Subscriptions</span>
        <span className="ytChevron">›</span>
      </div>

      <div className="ytGroup">
        {subs.map((s) => (
          <button key={s.name} className="ytSubRow" type="button">
            <span className="ytAvatar" aria-hidden="true">
              {s.img ? <img src={s.img} alt="" /> : s.name[0]}
            </span>

            {!collapsed && (
              <>
                <span className="ytSubName">{s.name}</span>
                {s.live && <span className="ytLiveDot" title="Live" />}
              </>
            )}
          </button>
        ))}

        <button className="ytShowMore" type="button">
          <span className="ytShowMoreIcon">⌄</span>
          {!collapsed && <span>Show more</span>}
        </button>
      </div>

      <div className="ytDivider" />

      {/* You section */}
      <div className="ytSectionHeader">
        <span>You</span>
        <span className="ytChevron">›</span>
      </div>

      <nav className="ytGroup">
        <SideItem to="/history" icon="bi-clock-history" label="History" />
        <SideItem to="/library" icon="bi-collection" label="Library" />
        <SideItem to="/watch-later" icon="bi-clock" label="Watch later" />
      </nav>
    </aside>
  );
}

function SideItem({
  to,
  icon,
  label,
}: {
  to: string;
  icon: string;
  label: string;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }: { isActive: boolean }) =>
        `ytItem ${isActive ? "ytItem--active" : ""}`
      }
    >
      <i className={`bi ${icon} ytIcon`} />
      <span className="ytLabel">{label}</span>
    </NavLink>
  );
}

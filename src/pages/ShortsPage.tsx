import { useOutletContext } from "react-router-dom";
import { shorts } from "../components/shorts";

type Props = { onLogout: () => void };

export default function ShortsPage() {
  const { onLogout } = useOutletContext<Props>();

  return (
    <div>
      <button onClick={onLogout}>Logout</button>

      <section className="shortsGrid">
        {shorts.map((s) => (
          <article key={s.id} className="shortCard">
            <img className="shortThumb" src={s.thumbnail} alt={s.title} />
            <div className="shortTitle">{s.title}</div>
          </article>
        ))}
      </section>
    </div>
  );
}
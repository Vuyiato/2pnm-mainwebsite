// Reusable programme card: keeps the catalogue concise and scannable.
import { Link } from "react-router-dom";

function ProgrammeCard({ programme }) {
  return (
    <article className={`programme-card programme-card--${programme.accent}`}>
      <div className="programme-card__topline">
        <span className="programme-card__number">{programme.number}</span>
        <span className="programme-card__tag">{programme.tag}</span>
      </div>
      <div>
        <p className="eyebrow">{programme.category}</p>
        <h3>{programme.title}</h3>
        <p className="programme-card__description">{programme.description}</p>
      </div>
      <div className="programme-card__footer">
        <span>{programme.duration}</span>
        <span>{programme.level}</span>
        <Link
          to={`/programmes/${programme.slug}`}
          aria-label={`Learn more about ${programme.title}`}
        >
          Explore <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}

export default ProgrammeCard;

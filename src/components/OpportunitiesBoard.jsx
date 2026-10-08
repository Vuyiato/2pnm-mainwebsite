// Opportunities board: reusable live-style listing driven by the shared opportunity data.
import { opportunities } from "../data/programmes";

function OpportunitiesBoard({ compact = false }) {
  const visibleOpportunities = compact
    ? opportunities.slice(0, 3)
    : opportunities;

  return (
    <div
      className={`opportunities-board ${compact ? "opportunities-board--compact" : ""}`}
    >
      {visibleOpportunities.map((opportunity) => (
        <article className="opportunity-board-card" key={opportunity.title}>
          <div className="opportunity-board-card__top">
            <span className="opportunity-type">{opportunity.type}</span>
            <span
              className={`opportunity-badge opportunity-badge--${opportunity.statusKey}`}
            >
              {opportunity.status}
            </span>
          </div>
          <h3>{opportunity.title}</h3>
          <p>{opportunity.detail}</p>
          <dl>
            <div>
              <dt>Closing</dt>
              <dd>{opportunity.closingDate}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{opportunity.location}</dd>
            </div>
            <div>
              <dt>Requirements</dt>
              <dd>{opportunity.requirements}</dd>
            </div>
          </dl>
          <a
            className="text-link"
            href="mailto:info@2pnm.co.za?subject=Opportunity%20enquiry"
          >
            Ask about this opportunity <span aria-hidden="true">↗</span>
          </a>
        </article>
      ))}
    </div>
  );
}

export default OpportunitiesBoard;

// News and events feed: article cards link to full story pages.
import { Link } from "react-router-dom";
import { events } from "../data/events";

function NewsPage() {
  const featuredEvent = events.find((event) => event.featured);
  const orderedEvents = featuredEvent
    ? [featuredEvent, ...events.filter((event) => event !== featuredEvent)]
    : events;

  return (
    <main className="news-page">
      <section className="page-hero news-page__hero">
        <p className="kicker">
          <span className="kicker-dot" /> News & events
        </p>
        <h1>
          What’s happening
          <br />
          <em>at TWOPNM.</em>
        </h1>
        <p className="hero-intro">
          Stories, workshops, programme updates, and moments from the Academy
          community.
        </p>
      </section>
      <section className="news-feed">
        <div className="news-feed__intro">
          <p className="eyebrow">The latest</p>
          <h2>
            Ideas, people,
            <br />
            <em>momentum.</em>
          </h2>
        </div>
        <div className="article-grid">
          {orderedEvents.map((event) => (
            <article
              className={`article-card ${event.featured ? "article-card--featured" : ""}`}
              key={event.slug}
            >
              <Link className="article-card__image" to={`/news/${event.slug}`}>
                <img
                  src={event.image}
                  alt={event.imageAlt}
                  loading="lazy"
                  onError={(eventTarget) => {
                    eventTarget.currentTarget.onerror = null;
                    eventTarget.currentTarget.src =
                      event.imageFallback || event.image;
                  }}
                />
              </Link>
              <div className="article-card__content">
                <div className="article-card__meta">
                  <span>{event.category}</span>
                  <span>{event.date}</span>
                </div>
                <h3>
                  <Link to={`/news/${event.slug}`}>{event.title}</Link>
                </h3>
                <p>{event.excerpt}</p>
                <Link className="text-link" to={`/news/${event.slug}`}>
                  Read article <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default NewsPage;

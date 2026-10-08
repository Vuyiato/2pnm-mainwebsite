// Full article page: renders one event or story from the shared events data.
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { events } from "../data/events";

function ArticlePage() {
  const { slug } = useParams();
  const event = events.find((item) => item.slug === slug);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (!selectedPhoto) return undefined;
    const closeOnEscape = (eventTarget) => {
      if (eventTarget.key === "Escape") setSelectedPhoto(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto]);

  if (!event)
    return (
      <main className="content-page">
        <section className="page-hero">
          <p className="kicker">
            <span className="kicker-dot" /> Story not found
          </p>
          <h1>
            This article is
            <br />
            <em>not available.</em>
          </h1>
          <Link className="button" to="/news">
            Back to news <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
    );

  return (
    <main className="article-page">
      <Link className="article-back-link" to="/news">
        <span aria-hidden="true">←</span> All news & events
      </Link>
      <article>
        <header className="article-page__header">
          <p className="eyebrow">
            {event.category} · {event.date} · {event.readTime}
          </p>
          <h1>{event.title}</h1>
          <p>{event.excerpt}</p>
        </header>
        <img
          className="article-page__image"
          src={event.image}
          alt={event.imageAlt}
          onError={(eventTarget) => {
            eventTarget.currentTarget.onerror = null;
            eventTarget.currentTarget.src = event.imageFallback || event.image;
          }}
        />
        {event.gallery && (
          <div className="article-gallery" aria-label="Event photo gallery">
            {event.gallery.map((photo) => (
              <button
                key={photo.src}
                type="button"
                className="article-gallery__item"
                onClick={() => setSelectedPhoto(photo)}
                aria-label={`View larger: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  onError={(eventTarget) => {
                    eventTarget.currentTarget.onerror = null;
                    eventTarget.currentTarget.src = photo.fallback || photo.src;
                  }}
                />
              </button>
            ))}
          </div>
        )}
        <div className="article-page__body">
          {event.sections
            ? event.sections.map((section) => (
                <section className="article-section" key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <div key={paragraph}>
                      <p>{paragraph}</p>
                      {section.images
                        ?.filter(
                          (image) => image.afterParagraph === paragraphIndex,
                        )
                        .map((image) => (
                          <button
                            type="button"
                            className="article-inline-image"
                            key={image.src}
                            onClick={() => setSelectedPhoto(image)}
                            aria-label={`View larger: ${image.alt}`}
                          >
                            <img
                              src={image.src}
                              alt={image.alt}
                              loading="lazy"
                              onError={(eventTarget) => {
                                eventTarget.currentTarget.onerror = null;
                                eventTarget.currentTarget.src =
                                  image.fallback || image.src;
                              }}
                            />
                          </button>
                        ))}
                    </div>
                  ))}
                </section>
              ))
            : event.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </article>
      {selectedPhoto && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded event image"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            className="image-lightbox__close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close expanded image"
          >
            ×
          </button>
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            onError={(eventTarget) => {
              eventTarget.currentTarget.onerror = null;
              eventTarget.currentTarget.src =
                selectedPhoto.fallback || selectedPhoto.src;
            }}
            onClick={(eventTarget) => eventTarget.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}

export default ArticlePage;

// Programme detail page: gives every programme a complete, reusable information journey.
import { Link, useParams } from "react-router-dom";
import { programmes } from "../data/programmes";

function ProgrammeDetailPage() {
  const { slug } = useParams();
  const programme = programmes.find((item) => item.slug === slug);

  if (!programme)
    return (
      <main className="content-page">
        <section className="page-hero">
          <p className="kicker">
            <span className="kicker-dot" /> Programme not found
          </p>
          <h1>
            That pathway is
            <br />
            <em>not available.</em>
          </h1>
          <Link className="button" to="/programmes">
            Back to programmes <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
    );

  return (
    <main className="programme-detail-page">
      <section
        className={`programme-detail-hero programme-detail-hero--${programme.accent}`}
      >
        <div>
          <Link className="programme-back-link" to="/programmes">
            <span aria-hidden="true">←</span> All programmes
          </Link>
          <p className="kicker">
            {programme.number} / {programme.category}
          </p>
          <h1>{programme.title}</h1>
          <p className="programme-detail-lede">{programme.description}</p>
          <Link className="button button--dark" to="/apply">
            Apply for this programme <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="programme-detail-stat">
          <strong>{programme.duration}</strong>
          <span>{programme.level}</span>
          <small>{programme.tag}</small>
        </div>
      </section>
      <section className="programme-detail-intro">
        <div>
          <p className="eyebrow">What this programme is about</p>
          <h2>
            Build skills you can
            <br />
            <em>take with you.</em>
          </h2>
        </div>
        <p>
          {programme.description} This pathway is designed to make learning
          practical, supportive, and connected to the opportunities emerging in
          the digital economy.
        </p>
      </section>
      <section className="programme-detail-grid">
        <article>
          <p className="eyebrow">What you will learn</p>
          <ul>
            {programme.learn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <p className="eyebrow">Who can apply</p>
          <p>{programme.eligibility}</p>
          <p className="eyebrow programme-detail-eyebrow-gap">Delivery</p>
          <p>{programme.delivery}</p>
        </article>
        <article>
          <p className="eyebrow">Accreditation</p>
          <p>{programme.accreditation}</p>
          <p className="eyebrow programme-detail-eyebrow-gap">
            Cost and funding
          </p>
          <p>{programme.funding}</p>
        </article>
      </section>
      <section className="career-pathways">
        <div>
          <p className="eyebrow">Where it can lead</p>
          <h2>
            Make your next move
            <br />
            <em>more possible.</em>
          </h2>
        </div>
        <div className="career-list">
          {programme.careers.map((career, index) => (
            <div key={career}>
              <span>0{index + 1}</span>
              <strong>{career}</strong>
            </div>
          ))}
        </div>
      </section>
      <section className="programme-detail-cta">
        <div>
          <p className="eyebrow">Ready to begin?</p>
          <h2>
            Find your place
            <br />
            <em>in the future.</em>
          </h2>
        </div>
        <Link className="button button--dark" to="/apply">
          Start your application <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}

export default ProgrammeDetailPage;

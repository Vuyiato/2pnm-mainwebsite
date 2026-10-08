// Homepage: the primary entry point for learners, partners, and funders.
import { useState } from "react";
import { Link } from "react-router-dom";
import ProgrammeCard from "../components/ProgrammeCard";
import { programmeCategories, programmes } from "../data/programmes";
import { siteImages } from "../data/images";
import { testimonials } from "../data/testimonials";
import FaqSection from "../components/FaqSection";
import OpportunitiesBoard from "../components/OpportunitiesBoard";

function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All programmes");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const visibleProgrammes =
    activeCategory === "All programmes"
      ? programmes
      : programmes.filter((programme) => programme.category === activeCategory);
  const testimonial = testimonials[activeTestimonial];

  return (
    <main id="top" className="home-page">
      <section className="hero-section section-grid landing-hero">
        <div className="hero-copy reveal reveal--one">
          <p className="kicker">
            <span className="kicker-dot" /> Skills for the digital economy
          </p>
          <h1>
            Build your future <em>in technology.</em>
          </h1>
          <p className="hero-intro">
            Free ICT and 4IR skills programmes designed to equip South African
            youth with practical skills, confidence, and a pathway into
            opportunity.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/programmes">
              Explore programmes <span aria-hidden="true">↗</span>
            </Link>
            <a className="text-link" href="#how-it-works">
              How it works <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div
          className="hero-visual reveal reveal--two"
          aria-label={siteImages.hero.alt}
          style={{ "--hero-image": `url(${siteImages.hero.src})` }}
        >
          <div
            className="hero-image"
            role="img"
            aria-label={siteImages.hero.alt}
          />
          <div className="hero-sticker">
            <strong>01</strong>
            <span>
              Learn.
              <br />
              Build.
              <br />
              Launch.
            </span>
          </div>
          <div className="hero-caption">
            <span>TWOPNM / 2025</span>
            <span>Johannesburg, South Africa</span>
          </div>
        </div>
      </section>
      <section
        className="audience-rail reveal reveal--three"
        aria-label="Choose your TWOPNM pathway"
      >
        <p className="eyebrow">Start where you are</p>
        <div className="audience-links">
          <Link to="/programmes">
            <strong>I want to learn</strong>
            <span>Explore programmes ↗</span>
          </Link>
          <Link to="/opportunities">
            <strong>I need an opportunity</strong>
            <span>See what is open ↗</span>
          </Link>
          <Link to="/contact">
            <strong>I want to partner</strong>
            <span>Work with TWOPNM ↗</span>
          </Link>
        </div>
      </section>
      <section className="facts-strip" aria-label="TWOPNM at a glance">
        <div>
          <strong>01</strong>
          <span>Practical learning</span>
        </div>
        <div>
          <strong>4IR</strong>
          <span>Future-focused skills</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Designed for access</span>
        </div>
        <div>
          <strong>SA</strong>
          <span>Rooted in community</span>
        </div>
      </section>
      <section className="intro-section section-grid reveal reveal--one">
        <div className="section-heading">
          <p className="eyebrow">Why TWOPNM</p>
          <h2>Opportunity should not depend on where you start.</h2>
        </div>
        <div className="intro-copy">
          <p>
            We help young people access the skills, support, and real-world
            experience needed to take their next step in a changing economy.
          </p>
          <Link className="text-link" to="/about">
            Meet the Academy <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="programmes-section reveal reveal--two">
        <div className="section-header section-grid">
          <div>
            <p className="eyebrow">A place to begin</p>
            <h2>
              Learn something
              <br />
              <em>that moves you.</em>
            </h2>
          </div>
          <p className="section-lede">
            A quick look at the pathways available. Open a programme for the
            full picture.
          </p>
        </div>
        <div
          className="category-tabs"
          role="tablist"
          aria-label="Programme categories"
        >
          {programmeCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? "is-active" : ""}
              onClick={() => setActiveCategory(category)}
              role="tab"
              aria-selected={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="programme-grid">
          {visibleProgrammes.map((programme) => (
            <ProgrammeCard key={programme.title} programme={programme} />
          ))}
        </div>
        <Link className="button button--outline" to="/programmes">
          View all programmes <span aria-hidden="true">↗</span>
        </Link>
      </section>
      <section
        className="journey-section reveal reveal--three"
        id="how-it-works"
      >
        <div className="section-heading">
          <p className="eyebrow">Your next step</p>
          <h2>
            From curious
            <br />
            <em>to capable.</em>
          </h2>
        </div>
        <div className="journey-list">
          <div>
            <span>01</span>
            <h3>Choose your pathway</h3>
            <p>Explore programmes built around the skills you want to grow.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Check your eligibility</h3>
            <p>See what you need before starting your application.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Apply with confidence</h3>
            <p>Complete your application and we’ll guide you from there.</p>
          </div>
        </div>
      </section>
      <section
        className="testimonial-section reveal reveal--one"
        aria-label="Learner testimonials"
      >
        <div className="testimonial-heading">
          <p className="eyebrow">Learner voices</p>
          <h2>
            Real stories.
            <br />
            <em>Real momentum.</em>
          </h2>
          <div className="testimonial-controls">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() =>
                setActiveTestimonial(
                  (activeTestimonial - 1 + testimonials.length) %
                    testimonials.length,
                )
              }
            >
              ←
            </button>
            <span>
              0{activeTestimonial + 1} / 0{testimonials.length}
            </span>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() =>
                setActiveTestimonial(
                  (activeTestimonial + 1) % testimonials.length,
                )
              }
            >
              →
            </button>
          </div>
        </div>
        <article className="testimonial-card">
          <span className="testimonial-quote" aria-hidden="true">
            “
          </span>
          <blockquote>{testimonial.quote}</blockquote>
          <div>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.role}</span>
          </div>
        </article>
      </section>
      <section className="opportunities-section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Stay in the loop</p>
            <h2>
              Open doors,
              <br />
              <em>right here.</em>
            </h2>
          </div>
          <Link className="text-link" to="/opportunities">
            See all opportunities <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <OpportunitiesBoard compact />
      </section>
      <FaqSection compact />
      <section className="apply-section">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>
            Your next chapter
            <br />
            <em>starts here.</em>
          </h2>
          <p>
            Tell us a little about yourself and we’ll help you find the right
            place to begin.
          </p>
        </div>
        <Link className="button button--dark" to="/apply">
          Start your application <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}

export default HomePage;

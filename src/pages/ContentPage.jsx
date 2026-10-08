// Shared editorial page pattern for the site's main information journeys.
import { Link } from "react-router-dom";
import { siteImages } from "../data/images";
import FaqSection from "../components/FaqSection";
import OpportunitiesBoard from "../components/OpportunitiesBoard";

const pageContent = {
  about: {
    eyebrow: "About TWOPNM",
    title: (
      <>
        A practical path into
        <br />
        <em>what comes next.</em>
      </>
    ),
    intro:
      "TWOPNM Academy exists to make technology education and workplace opportunity more accessible to South African youth.",
    sections: [
      [
        "Who we are",
        "We are a youth skills development academy focused on ICT, 4IR education, workplace readiness, and entrepreneurship.",
      ],
      [
        "Who we serve",
        "Young people, people living with disabilities, aspiring entrepreneurs, graduates, and learners ready to grow their digital confidence.",
      ],
      [
        "Our approach",
        "Learning is practical, supportive, and connected to the realities of work. We pair structured training with guidance, experience, and industry pathways.",
      ],
    ],
  },
  impact: {
    eyebrow: "Our impact",
    title: (
      <>
        Skills create
        <br />
        <em>momentum.</em>
      </>
    ),
    intro:
      "Every programme is designed to move a learner closer to confidence, opportunity, and meaningful participation in the digital economy.",
    sections: [
      [
        "Learning that travels",
        "Our programmes build transferable digital and workplace skills that learners can carry into further study, employment, or entrepreneurship.",
      ],
      [
        "Partnership makes it possible",
        "We work with organisations, funders, and industry partners to widen access and create stronger pathways after training.",
      ],
      [
        "Measuring what matters",
        "Verified figures for learners trained, programmes delivered, placements, and communities reached will be published as our impact reporting grows.",
      ],
    ],
  },
  opportunities: {
    eyebrow: "Opportunities",
    title: (
      <>
        Your next opportunity
        <br />
        <em>could start here.</em>
      </>
    ),
    intro:
      "Explore learnerships, internships, funded programmes, and customised training pathways.",
    sections: [
      [
        "Learnerships",
        "Work-based education and training linked to recognised qualifications, combining structured learning with practical workplace experience.",
      ],
      [
        "Internships",
        "Structured workplace exposure and specialised training for graduates ready to extend their academic qualifications.",
      ],
      [
        "For organisations",
        "Customised skills programmes designed around your team, your technology, and the capability gaps you need to close.",
      ],
    ],
  },
  contact: {
    eyebrow: "Contact TWOPNM",
    title: (
      <>
        Let’s make your
        <br />
        <em>next step clearer.</em>
      </>
    ),
    intro:
      "Whether you are a learner, organisation, or company, we can help you find the right way to connect with TWOPNM.",
    sections: [
      [
        "Learner enquiries",
        "Ask about programmes, eligibility, applications, and current opportunities.",
      ],
      [
        "Organisation enquiries",
        "Talk to us about partnerships, funding, workplace experience, or training for your team.",
      ],
      [
        "Email us",
        <a
          key="contact-email"
          className="text-link"
          href="mailto:info@2pnm.co.za"
        >
          info@2pnm.co.za <span aria-hidden="true">↗</span>
        </a>,
      ],
    ],
  },
};

function ContentPage({ type }) {
  const page = pageContent[type];
  const image = siteImages[type] || siteImages.about;
  return (
    <main className="content-page">
      <section
        className={`page-hero page-hero--with-image page-hero--${type}`}
        style={{ "--page-image": `url(${image.src})` }}
      >
        <div>
          <p className="kicker">
            <span className="kicker-dot" /> {page.eyebrow}
          </p>
          <h1>{page.title}</h1>
          <p className="hero-intro">{page.intro}</p>
        </div>
      </section>
      {type === "opportunities" ? (
        <section className="opportunities-page-board">
          <OpportunitiesBoard />
        </section>
      ) : (
        <section className="content-grid">
          {page.sections.map(([heading, copy], index) => (
            <article key={heading} className="content-block">
              <span>0{index + 1}</span>
              <h2>{heading}</h2>
              <div>{typeof copy === "string" ? <p>{copy}</p> : copy}</div>
            </article>
          ))}
        </section>
      )}
      {type === "opportunities" && <FaqSection />}
      <section className="page-cta">
        <h2>Ready to take the next step?</h2>
        <Link className="button" to="/apply">
          Start your application <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}

export default ContentPage;

// FAQ accordion: keeps common learner questions available without repeating full page content.
import { useState } from "react";
import { faqs } from "../data/faqs";

function FaqSection({ compact = false }) {
  const [openIndex, setOpenIndex] = useState(null);
  const visibleFaqs = compact ? faqs.slice(0, 3) : faqs;

  return (
    <section
      className={`faq-section ${compact ? "faq-section--compact" : ""}`}
      aria-labelledby="faq-title"
    >
      <div className="faq-heading">
        <p className="eyebrow">Need to know</p>
        <h2 id="faq-title">
          Questions,
          <br />
          <em>answered.</em>
        </h2>
        {compact && <p>Clear answers before you choose your next step.</p>}
      </div>
      <div className="faq-list">
        {visibleFaqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "is-open" : ""}`}
            key={faq.question}
          >
            <button
              type="button"
              aria-expanded={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              <strong aria-hidden="true">
                {openIndex === index ? "−" : "+"}
              </strong>
            </button>
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;

// Application page: a real first-step form for learners, ready to connect to a backend later.
import { useState } from 'react'

function ApplyPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', programme: '', message: '' })
  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const submitApplication = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const response = await fetch('/api/applications', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Submission failed')
      setSubmitted(true)
    } catch (submissionError) {
      setError(submissionError.message)
    } finally {
      setSubmitting(false)
    }
  }

  return <main className="content-page"><section className="page-hero page-hero--compact"><p className="kicker"><span className="kicker-dot" /> Start your journey</p><h1>Your next chapter<br /><em>starts here.</em></h1><p className="hero-intro">Complete this first step and the TWOPNM team can help you find the right programme and application requirements.</p></section><section className="application-layout"><div className="application-note"><p className="eyebrow">Before you begin</p><h2>Tell us where<br /><em>you want to go.</em></h2><p>Applications may require supporting documents and eligibility checks. We will follow up with the next steps after reviewing your enquiry.</p></div>{submitted ? <div className="success-panel"><span className="success-mark">✓</span><h2>Thanks, {form.name || 'there'}.</h2><p>Your application enquiry has been received. The TWOPNM team will be in touch using the details you provided.</p><button className="button" type="button" onClick={() => setSubmitted(false)}>Submit another enquiry</button></div> : <form className="application-form" onSubmit={submitApplication}><label>Full name<input name="name" value={form.name} onChange={updateField} required /></label><label>Email address<input type="email" name="email" value={form.email} onChange={updateField} required /></label><label>Phone number<input type="tel" name="phone" value={form.phone} onChange={updateField} required /></label><label>Programme of interest<select name="programme" value={form.programme} onChange={updateField} required><option value="">Select a pathway</option><option>Artificial Intelligence</option><option>Cybersecurity</option><option>Digital Skills</option><option>Entrepreneurship</option><option>Not sure yet</option></select></label><label>Tell us a little more<textarea name="message" value={form.message} onChange={updateField} rows="4" placeholder="What would you like to learn?" /></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="button" type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Send application enquiry'} <span aria-hidden="true">↗</span></button></form>}</section></main>
}

export default ApplyPage

// Programmes page: full catalogue with the same shared programme source as the homepage.
import { useState } from 'react'
import ProgrammeCard from '../components/ProgrammeCard'
import { programmeCategories, programmes } from '../data/programmes'
import { siteImages } from '../data/images'

function ProgrammesPage() {
  const [activeCategory, setActiveCategory] = useState('All programmes')
  const visibleProgrammes = activeCategory === 'All programmes' ? programmes : programmes.filter((programme) => programme.category === activeCategory)
  return <main className="content-page"><section className="page-hero page-hero--with-image" style={{ '--page-image': `url(${siteImages.programmes.src})` }}><div><p className="kicker"><span className="kicker-dot" /> Find your pathway</p><h1>Learn something<br /><em>that moves you.</em></h1><p className="hero-intro">Choose a practical pathway built around the skills, confidence, and direction you want to grow.</p></div></section><section className="programmes-section programmes-page-section"><div className="category-tabs" role="tablist" aria-label="Programme categories">{programmeCategories.map((category) => <button key={category} type="button" className={activeCategory === category ? 'is-active' : ''} onClick={() => setActiveCategory(category)} role="tab" aria-selected={activeCategory === category}>{category}</button>)}</div><div className="programme-grid">{visibleProgrammes.map((programme) => <ProgrammeCard key={programme.title} programme={programme} />)}</div></section></main>
}

export default ProgrammesPage

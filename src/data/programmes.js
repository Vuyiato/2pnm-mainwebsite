// Programme catalogue: one source of truth for cards, filters, and future detail pages.
export const programmeCategories = [
  "All programmes",
  "4IR & Emerging Tech",
  "IT & Technical",
  "Digital & Creative",
  "Business & Professional",
];

export const programmes = [
  {
    number: "01",
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    category: "4IR & Emerging Tech",
    description:
      "Build a practical foundation in the tools shaping the next generation of work.",
    duration: "12 months",
    level: "Foundational",
    tag: "Popular pathway",
    accent: "sun",
    eligibility:
      "South African youth with an interest in technology and a willingness to learn. Final requirements depend on the funded intake.",
    delivery:
      "Blended learning with guided sessions, practical projects, and independent study.",
    accreditation:
      "Programme and accreditation details are confirmed for each intake.",
    funding:
      "Funded opportunities may be available. Check the current opportunity notice before applying.",
    learn: [
      "AI concepts and responsible technology",
      "Data, patterns, and machine learning foundations",
      "Practical problem-solving with AI tools",
      "Presenting a technology project with confidence",
    ],
    careers: [
      "AI support or junior data roles",
      "Digital operations",
      "Further study in technology",
      "Technology entrepreneurship",
    ],
  },
  {
    number: "02",
    slug: "cybersecurity",
    title: "Cybersecurity",
    category: "IT & Technical",
    description:
      "Learn how to protect people, systems, and information in a connected world.",
    duration: "12 months",
    level: "Career starter",
    tag: "Industry aligned",
    accent: "blue",
    eligibility:
      "Learners who are curious about computers, networks, privacy, and protecting information.",
    delivery:
      "Practical, scenario-based learning supported by demonstrations, exercises, and mentor guidance.",
    accreditation:
      "Accreditation and certification pathways are confirmed for each intake.",
    funding:
      "Some cybersecurity opportunities may be funded through partner programmes.",
    learn: [
      "Cybersecurity principles and digital safety",
      "Networks, threats, and vulnerabilities",
      "Identity, access, and secure behaviour",
      "Incident awareness and workplace readiness",
    ],
    careers: [
      "IT support",
      "Junior security operations",
      "Help desk and systems roles",
      "Further certification study",
    ],
  },
  {
    number: "03",
    slug: "digital-skills",
    title: "Digital Skills",
    category: "Digital & Creative",
    description:
      "Grow the everyday digital confidence you need to study, work, and create.",
    duration: "6 months",
    level: "Beginner friendly",
    tag: "Start here",
    accent: "mint",
    eligibility:
      "Beginners, job seekers, graduates, and anyone who wants stronger everyday digital confidence.",
    delivery:
      "Accessible guided learning with practical tasks based on study, work, and daily digital life.",
    accreditation:
      "Completion recognition depends on the specific programme intake.",
    funding: "Funded places may be available for qualifying learners.",
    learn: [
      "Digital communication and collaboration",
      "Documents, spreadsheets, and presentations",
      "Online research and information safety",
      "Digital workplace confidence",
    ],
    careers: [
      "Administrative support",
      "Customer service",
      "Office and project support",
      "Progression into technical training",
    ],
  },
  {
    number: "04",
    slug: "entrepreneurship",
    title: "Entrepreneurship",
    category: "Business & Professional",
    description:
      "Turn an idea into a plan with practical business and workplace skills.",
    duration: "6 months",
    level: "All levels",
    tag: "Build your future",
    accent: "coral",
    eligibility:
      "Aspiring entrepreneurs and learners with an idea, a community challenge, or an interest in business.",
    delivery:
      "Workshop-based learning with guided planning, feedback, and a practical business concept project.",
    accreditation:
      "Programme recognition depends on the selected intake and partner requirements.",
    funding: "Funding and enterprise support vary by opportunity and partner.",
    learn: [
      "Finding and understanding a customer need",
      "Business models and value propositions",
      "Basic budgeting, marketing, and pitching",
      "Turning an idea into an actionable plan",
    ],
    careers: [
      "Small business development",
      "Freelance work",
      "Enterprise support",
      "Further business study",
    ],
  },
];

export const opportunities = [
  {
    type: "Learnership",
    title: "MICT SETA skills programmes",
    detail: "Applications open for funded ICT pathways",
    status: "Open now",
    statusKey: "open",
    closingDate: "Rolling intake",
    location: "Johannesburg / blended",
    requirements: "South African youth; intake requirements apply",
  },
  {
    type: "Internship",
    title: "Workplace experience programme",
    detail: "For graduates ready to turn knowledge into experience",
    status: "Closing soon",
    statusKey: "closing",
    closingDate: "Check current intake",
    location: "Johannesburg",
    requirements: "Recent graduates with relevant studies",
  },
  {
    type: "Custom training",
    title: "Training for organisations",
    detail: "Practical digital skills built around your team",
    status: "Enquire now",
    statusKey: "enquire",
    closingDate: "Available year-round",
    location: "On-site / blended",
    requirements: "For organisations and industry partners",
  },
];

export const projectsData = [
  {
    id: "explaino",
    title: "ExplainO",
    tagline: "AI Document Intelligence SaaS Platform",
    category: "AI & RAG Architecture",
    categoryFilter: "ai",
    year: "2024",
    featured: true,
    badge: "Flagship AI Platform",
    summary:
      "Production-ready AI document intelligence platform that parses complex PDFs, builds semantic embeddings, and provides context-grounded citations and Q&A using RAG.",
    fullDescription:
      "ExplainO solves the problem of information overload in complex academic papers, legal documents, and corporate reports. It ingests multi-page documents, executes high-fidelity text and table extraction using PyMuPDF, chunks data into dense semantic representations, and provides instant, hallucination-resistant Q&A powered by Groq-accelerated LLMs.",
    architecture: [
      "Custom document ingestion pipeline utilizing PyMuPDF for layout preservation and table extraction",
      "Retrieval-Augmented Generation (RAG) pipeline with semantic vector chunking for contextual retrieval",
      "Sub-second inference response times orchestrated via high-throughput Groq LLM endpoints",
      "Decoupled React/Vite client communicating with an asynchronous FastAPI microservice backend"
    ],
    keyFeatures: [
      "Multi-format document parsing with automatic table and section segmentation",
      "Context-aware citation referencing showing exact page provenance for AI answers",
      "Real-time streaming response interface with markdown and formula rendering",
      "Session history and conversational query memory"
    ],
    tech: ["React.js", "Vite", "FastAPI", "Python", "PyMuPDF", "Groq LLM", "RAG Pipeline", "Vector Search"],
    liveUrl: "https://explaino-07.vercel.app",
    githubUrl: "https://github.com/Sant7124/ExplainO"
  },
  {
    id: "metricmind",
    title: "MetricMind",
    tagline: "Agentic Semantic BI Platform",
    category: "AI Analytics & BI",
    categoryFilter: "ai",
    year: "2024",
    featured: true,
    badge: "Agentic BI",
    summary:
      "Enterprise-grade semantic BI engine converting natural-language prompts into governed SQL queries, interactive visual dashboards, and actionable business metrics.",
    fullDescription:
      "MetricMind bridges non-technical business leaders and enterprise databases. Instead of waiting for data analysts, stakeholders ask queries in plain conversational language. The agentic system enforces schema guardrails, generates validated SQL queries, executes them against PostgreSQL, and renders dynamic Recharts visualizations in real-time.",
    architecture: [
      "Semantic metric layer enforcing governance and preventing arbitrary SQL injection attacks",
      "Multi-agent reasoning workflow utilizing Gemini & OpenRouter for query translation and error self-correction",
      "SQLAlchemy ORM integration connecting securely to PostgreSQL data warehouses",
      "Dynamic data visualization compiler producing responsive bar, area, and trend metrics on the fly"
    ],
    keyFeatures: [
      "Conversational English to SQL compilation with automatic schema context injection",
      "Live interactive data visualizations powered by Recharts (Time-series, aggregations, KPIs)",
      "Strict data privacy and read-only query sandboxing",
      "Automated executive executive-level summary generation accompanying every chart"
    ],
    tech: ["React.js", "FastAPI", "Python", "SQLAlchemy", "PostgreSQL", "Gemini API", "OpenRouter", "Recharts"],
    liveUrl: "https://metricmind-sant.vercel.app",
    githubUrl: "https://github.com/Sant7124/MetricMind"
  },
  {
    id: "digifootprint",
    title: "DigiFootprint",
    tagline: "OSINT Digital Exposure Scanner",
    category: "Cybersecurity & OSINT",
    categoryFilter: "security",
    year: "2024",
    featured: true,
    badge: "Security Intelligence",
    summary:
      "Full-stack OSINT exposure scanner that audits emails, usernames, and passwords across known breaches, calculating confidence-rated threat vulnerability scores.",
    fullDescription:
      "DigiFootprint empowers individuals and security teams to assess their publicly exposed footprint across the web. By aggregating intelligence from threat intelligence feeds and OSINT breach databases, it computes an overall vulnerability index, catalogs leaked credentials safely via cryptographic hashing, and recommends remediation steps.",
    architecture: [
      "Zero-knowledge query protocol using k-Anonymity SHA-1 prefixing for password leak checks",
      "Asynchronous Node.js & Express API gateway coordinating multi-source breach lookups",
      "Responsive glassmorphism dashboard built with Tailwind CSS and Vite",
      "Confidence-based risk score algorithm combining breach count, age, and exposure severity"
    ],
    keyFeatures: [
      "Multi-vector audit: Email breach exposure, username enumeration, and password leak detection",
      "Interactive Risk Exposure Meter with actionable security checklists",
      "Cryptographically secure zero-knowledge lookups that never store plaintext sensitive inputs",
      "Exportable breach audit report with step-by-step containment instructions"
    ],
    tech: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "OSINT APIs", "Axios", "REST Security"],
    liveUrl: "https://digi-footprint-ebon.vercel.app",
    githubUrl: "https://github.com/Sant7124/DigiFootprint"
  },
  {
    id: "shieldvision",
    title: "ShieldVision AI",
    tagline: "Real-time AI Phishing Detection Platform",
    category: "Cybersecurity & ML",
    categoryFilter: "security",
    year: "2025",
    featured: false,
    badge: "Cyber Threat Intel",
    summary:
      "Multi-modal AI cybersecurity platform providing real-time phishing detection across URLs, email bodies, screenshots, and suspicious file payloads.",
    fullDescription:
      "ShieldVision AI tackles sophisticated social engineering and zero-day phishing attacks. Utilizing computer vision OCR to detect visual brand impersonation alongside NLP classification for deceptive linguistics, the platform computes granular threat ratings and provides security analysts with an intuitive breakdown of malicious indicators.",
    architecture: [
      "Multi-modal detection engine coupling Tesseract/OCR vision with text classification algorithms",
      "FastAPI backend orchestrating Groq-accelerated LLM reasoning for behavioral evasion detection",
      "URL lexical feature extraction assessing entropy, domain age, typosquatting, and redirects",
      "Real-time analyst dashboard with interactive threat breakdown and classification radar"
    ],
    keyFeatures: [
      "Deep URL & domain analysis detecting homograph attacks and brand spoofing",
      "Computer vision screenshot scanning for visual brand clone identification",
      "Actionable risk indicators with threat categorization (Credential Harvesting, Malware, BEC)",
      "RESTful API design suitable for integration into email security gateways"
    ],
    tech: ["React.js", "Vite", "FastAPI", "Python", "Machine Learning", "Groq AI", "OCR", "Cybersecurity APIs"],
    liveUrl: "",
    githubUrl: "https://github.com/Sant7124/ShieldVision"
  },
  {
    id: "internship-rec",
    title: "AI Internship Recommender",
    tagline: "ML Career Recommendation Platform",
    category: "Machine Learning & Web",
    categoryFilter: "fullstack",
    year: "2024",
    featured: false,
    badge: "ML Recommendation",
    summary:
      "Machine learning web platform that maps student technical proficiencies to industry roles using cosine similarity and skill vector clustering.",
    fullDescription:
      "Built to eliminate student guesswork during internship hunting, this platform parses user skills, compares them with thousands of indexed job requirements through vectorized similarity metrics, and recommends high-match roles along with personalized gap analysis to boost employability.",
    architecture: [
      "TF-IDF vectorization and Scikit-learn cosine similarity scoring for profile-to-role matching",
      "Flask/FastAPI micro-backend serving real-time model inference",
      "Dynamic skill gap analyzer highlighting missing high-demand competencies",
      "Clean responsive web interface for seamless role exploration and filtering"
    ],
    keyFeatures: [
      "Instant profile skill-to-role affinity scoring",
      "Gap analysis recommendations highlighting top skills to learn for target roles",
      "Role-based roadmaps with curated resources",
      "Fast sub-200ms recommendation compute time"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Python", "Flask / FastAPI", "Scikit-learn", "Railway"],
    liveUrl: "https://internshiprecommender.up.railway.app",
    githubUrl: "https://github.com/Sant7124/internshiprec"
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & RAG" },
  { id: "security", label: "Cybersecurity & OSINT" },
  { id: "fullstack", label: "Full Stack & ML" }
];


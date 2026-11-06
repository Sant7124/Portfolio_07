# Santosh Yadav — AI & Full-Stack Engineer Portfolio

A premium, cinematic, editorial portfolio website built for **Santosh Yadav** (B.Tech Computer Science Engineering undergraduate specializing in AI integration, RAG architectures, and scalable full-stack web applications).

Inspired by the editorial aesthetics of [touquirakhtar.com](https://touquirakhtar.com/) with Anton condensed typography, Manrope body, Caveat handwritten accents, interactive canvas particle swarm physics, and authentic verified projects & credentials.

---

## 🚀 Key Features

1. **Interactive Swarm Particle Canvas with Top "Motion" Toggle**:
   - Standalone HTML5 canvas simulation with dynamic mouse flocking, gravity attraction, velocity decay, and synapse connection lines.
   - Header "Motion: On / Off" control button that toggles particle motion and persists user preference in `localStorage`.

2. **Cinematic Hero Presentation**:
   - Oversized editorial condensed display typography (`Anton`).
   - High-contrast studio portrait featuring custom red ambient backlight tuned to the studio rim light.
   - Live availability badge (`🟢 Open to High-Impact Roles & Collaborations`).
   - Verified impact metrics strip (Projects, Skills, Academic CGPA, Competitive Profiles).
   - Quick action triggers for "Explore Work", "Get in Touch", and "Download CV".

3. **Engineered Project Showcase**:
   - **ExplainO**: AI Document Intelligence SaaS (RAG, Groq, PyMuPDF, FastAPI, React).
   - **MetricMind**: Agentic Semantic BI Platform (Gemini, OpenRouter, PostgreSQL, Recharts).
   - **DigiFootprint**: OSINT Digital Exposure Scanner (Node.js, Express, breach APIs).
   - **ShieldVision AI**: Real-time AI Phishing Detection Platform.
   - **AI Internship Recommender**: Machine Learning Career Platform (Scikit-learn, TF-IDF).
   - Category filtering (*All*, *AI & RAG*, *Cybersecurity*, *Full Stack*) + live text search.
   - Architectural Deep-Dive Dialog Modal (accessible via keyboard ESC, backdrop click, with system architecture breakdown & direct links).

4. **Technical Arsenal (Skills Matrix)**:
   - Categorized badges with icons across AI/ML, Programming Languages, Frontend Engineering, Backend & Databases, and DevOps/Tools.

5. **Editorial "About Me"**:
   - Highlights Santosh's engineering philosophy, journey, and problem-solving mindset.
   - Features the secondary outdoor portrait with a handwritten Caveat stamp and quick facts grid.

6. **Academic Chronology, Certifications & Coding Profiles**:
   - Timeline covering B.Tech CSE (2023–2027) at Dronacharya Group of Institutions (CGPA 7.2), 12th CBSE (74%), and 10th CBSE (85%).
   - Verified certifications from HackerRank, Meta (Coursera), and GeeksforGeeks.
   - Interactive profile cards for LeetCode, GitHub, HackerRank, and GeeksforGeeks.

7. **Direct Contact Channel & Working Feedback**:
   - One-click copy email (`sant7124@gmail.com`) and telephone (`+91 7275169132`) with toast notifications.
   - Interactive message form with validation, dispatch confirmation modal, and direct `mailto:` fallback.
   - Direct download button for the official one-page resume (`Santosh_Yadav_Resume.pdf`).

---

## 🧱 6 Architecture Chunks & Commit Methodology

This codebase was developed through 6 structured chunks, each featuring atomic, meaningful commits adhering to Conventional Commits:

1. **Chunk 1: Foundation, Design Tokens & Asset Pipeline** (Commits 1–15)
   * Setup of Vite 6 + React 18, Google Fonts (Anton, Manrope, Caveat), dark theme CSS variables, studio portrait, and verified resume document.
2. **Chunk 2: Interactive Swarm Engine & Navigation** (Commits 16–30)
   * 60fps canvas particle swarm with mouse vortex gravity, shockwave click ripples, persistent motion switcher, and glassmorphic header.
3. **Chunk 3: Hero Presentation & Impact Metrics** (Commits 31–45)
   * Asymmetric hero layout, live availability pill, ambient crimson backlight, floating academic badges, and metrics counter strip.
4. **Chunk 4: Flagship Projects & Deep-Dive Dialog** (Commits 46–60)
   * 5 verified projects, interactive dark UI simulation mockups (RAG, BI chart, OSINT meter, phishing alert, ML affinity), category filters, and accessible modal dialog.
5. **Chunk 5: Technical Arsenal & Editorial Narrative** (Commits 61–75)
   * 5 skill categories with icon badges, editorial About Me layout, secondary outdoor portrait with Caveat stamp, and quick facts grid.
6. **Chunk 6: Chronology, Coding Profiles & Final Polish** (Commits 76–90)
   * Academic timeline, verified certifications, LeetCode/GitHub/HackerRank/GFG brand cards, direct contact channels with one-click copy, and production build verification.

---

## 🛠️ Tech Stack

- **Framework**: React 18, Vite 6
- **Typography**: Google Fonts — Anton (Display), Manrope (Body/UI), Caveat (Handwritten accents), Space Grotesk (Mono tags)
- **Styling**: Vanilla CSS Design Tokens (Strict dark theme: `#090909`, `#f2efeb`, `#e32b3c`)
- **Icons**: Lucide React + Custom SVG Brand Monograms
- **Canvas Physics**: Custom vanilla 60fps particle swarm engine with mouse vortex attraction

---

## 💻 Quick Start & Commands

```bash
# Install dependencies
npm install

# Start local development server (opens at http://localhost:3000)
npm run dev

# Build production assets
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
Portfolio_07/
├── dist/                      # Production-ready static output
├── public/
│   └── assets/
│       ├── santosh-studio.jpg   # Studio portrait with rim light
│       ├── santosh-outdoor.jpg  # Outdoor editorial portrait
│       └── Santosh_Yadav_Resume.pdf # Downloadable verified resume
├── src/
│   ├── components/
│   │   ├── About.jsx          # Editorial story & facts
│   │   ├── Contact.jsx        # Contact channels, form & copy actions
│   │   ├── Education.jsx      # Academic chronology, certs & coding cards
│   │   ├── Footer.jsx         # Site footer & back-to-top
│   │   ├── Header.jsx         # Navigation bar & Motion toggle
│   │   ├── Hero.jsx           # Hero section & portrait
│   │   ├── Icons.jsx          # SVG brand icons (LeetCode, GitHub, HR, GFG)
│   │   ├── ProjectDialog.jsx  # Accessible modal dialog
│   │   ├── ProjectGrid.jsx    # Projects grid, search & filter
│   │   └── SwarmCanvas.jsx    # 60fps interactive particle swarm canvas
│   ├── config/
│   │   └── site.js            # Central site configuration & personal details
│   ├── data/
│   │   ├── codingProfiles.js  # LeetCode, GitHub, HackerRank, GFG data
│   │   ├── education.js       # Academic records & certifications
│   │   ├── projects.js        # Detailed records for all 5 projects
│   │   └── skills.js          # Organized technical skills & categories
│   ├── App.jsx                # Main application wrapper
│   ├── main.jsx               # Entry point
│   └── styles.css             # Complete design token stylesheet
├── index.html                 # Main HTML with SEO meta tags & fonts
├── package.json
└── vite.config.js
```

---

## 🚢 Deployment to Vercel

To deploy your new portfolio to Vercel:
```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel
```
Or simply push this folder to your GitHub repository (`github.com/Sant7124/Portfolio_07`) and import it directly into Vercel with default Vite settings!


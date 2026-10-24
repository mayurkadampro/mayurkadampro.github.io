import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Menu,
  X,
  ExternalLink,
  BriefcaseBusiness,
  Code2,
  Smartphone,
  Layers,
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  Send,
  ChevronDown,
} from "lucide-react";

const contact = {
  email: "mayurkadam200@gmail.com",
  phone: "+91 9175551273",
  linkedin: "https://www.linkedin.com/in/mayurkadampro/",
  github: "https://github.com/mayurkadampro",
};
const experience = [
  {
    company: "EPAM Systems",
    role: "Software Engineer",
    specialty: "Frontend Developer · ReactJS & React Native",
    dates: "Jan 2025 — Present",
    location: "Pune, India",
    points: [
      "Integrated local admin functionality and statement features, improving mobile app usability by 20%.",
      "Refined the Quick Payment template for maintainability and component reuse.",
      "Integrated Firebase Analytics for real-time user interaction tracking.",
      "Used Copilot AI Agent to review code changes against Jira requirements.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Systems Engineer",
    specialty: "Frontend Developer · ReactJS & React Native",
    dates: "Mar 2022 — Nov 2024",
    location: "Pune, India",
    points: [
      "Increased user engagement by 30% with offline downloads and live streaming features.",
      "Deployed mobile applications to the App Store and Play Store, expanding reach by 30%.",
      "Built reusable design systems and component libraries.",
    ],
  },
  {
    company: "Qodequay Technologies Pvt. Ltd.",
    role: "Software Developer",
    specialty: "Frontend Developer · ReactJS & React Native",
    dates: "Apr 2021 — Mar 2022",
    location: "Pune, India",
    points: [
      "Developed a live-streaming platform with Wowza Streaming Engine.",
      "Provided production support and deployed projects on AWS EC2.",
    ],
  },
  {
    company: "Rupeeseed Technology Ventures Pvt. Ltd.",
    role: "Software Developer",
    specialty: "Full Stack Developer · Angular / Python",
    dates: "Jun 2019 — Mar 2021",
    location: "Mumbai, India",
    points: [
      "Developed a Flask web application.",
      "Integrated REST APIs and GraphQL endpoints for a single-page application.",
      "Built a stock listing portal for backtesting reports.",
    ],
  },
];
const projects = [
  {
    number: "01",
    title: "CLE Edge",
    type: "Enterprise mobile application",
    desc: "Recreated web-portal features in a mobile experience, adding offline downloads and improving accessibility.",
    tags: ["React Native", "Offline-first", "Mobile UX"],
    tone: "violet",
    visual: "mobile",
  },
  {
    number: "02",
    title: "OneDash",
    type: "Live-streaming mobile application",
    desc: "Developed a React Native streaming application using RTMP for publishing and HLS for client-side playback.",
    tags: ["React Native", "RTMP", "HLS"],
    tone: "blue",
    visual: "stream",
  },
  {
    number: "03",
    title: "StradEasy",
    type: "Capital markets & backtesting",
    desc: "Stock-analysis platform featuring custom trading strategies, deployment alerts and historical backtesting.",
    tags: ["Python", "Backtrader", "Pandas"],
    tone: "teal",
    visual: "chart",
  },
  {
    number: "04",
    title: "KYC Verification",
    type: "Document automation",
    desc: "REST API-driven identity verification using Amazon Textract and Google OCR to improve data extraction accuracy.",
    tags: ["REST APIs", "Amazon Textract", "Google OCR"],
    tone: "orange",
    visual: "kyc",
  },
];
const skillGroups = [
  {
    title: "Frontend & Mobile",
    items: [
      "React.js",
      "React Native",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Angular",
      "Vue.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "State & APIs",
    items: [
      "Redux",
      "Redux Toolkit",
      "Redux Thunk",
      "REST APIs",
      "GraphQL",
      "RTK Query",
    ],
  },
  {
    title: "Testing & Tooling",
    items: [
      "Jest",
      "Mocha",
      "Cypress",
      "Git",
      "Jira",
      "Firebase",
      "AWS SDK & Services",
    ],
  },
  {
    title: "Additional",
    items: [
      "Python",
      "System Design",
      "DSA",
      "Test-driven Development",
      "Mobile App Deployment",
    ],
  },
];
const awards = [
  { name: "Client Hero Badge", org: "EPAM Systems", date: "Aug 2026" },
  {
    name: "Star of the Month",
    org: "Tata Consultancy Services",
    date: "Jul 2024",
  },
  {
    name: "Early Adopter Award",
    org: "Qodequay Technologies",
    date: "Aug 2021",
  },
];
const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Open Source", "#opensource"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Certifications", "#certifications"],
  ["LeetCode", "#leetcode"],
  ["Contact", "#contact"],
];
const certifications = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    category: "Cloud Development",
    url: "https://www.credly.com/badges/b91925e8-4931-4411-821f-e9cec1f8ee16",
  },
  {
    title: "Certified Partner Specialist: Gemini Enterprise Agent Development",
    issuer: "Google Cloud",
    category: "AI & Agents",
    url: "https://www.credly.com/badges/0d7191e7-fc32-4291-895f-8b0086a7ace7",
  },
  {
    title: "Atlassian Certificate of Completion",
    issuer: "LinkedIn Learning",
    category: "Atlassian",
    url: "https://www.linkedin.com/learning/certificates/d61728d6d88a04ddb5068e46e7d24a10b217bfc5d93b788a113fb00815d423fb/?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BWhFbv5GeS6C2PBkEFpSmgA%3D%3D",
  },
  {
    title: "Python",
    issuer: "HackerRank",
    category: "Programming",
    url: "https://www.hackerrank.com/certificates/61eabe2e59a6",
  },
  {
    title: "Problem Solving",
    issuer: "HackerRank",
    category: "Algorithms",
    url: "https://www.hackerrank.com/certificates/db75496881f7",
  },
  {
    title: "React JS",
    issuer: "HackerRank",
    category: "Frontend Development",
    url: "https://www.hackerrank.com/certificates/b6de79fabde2",
  },
];
const featuredFallback = [
  {
    name: "YouTube-SubBot",
    description: "YouTube subscriber automation experiment.",
    language: "Python",
    html_url: "https://github.com/mayurkadampro/YouTube-SubBot",
    stargazers_count: 131,
    fork: false,
  },
  {
    name: "Wordlist-Generator",
    description: "Wordlist generator written in Python.",
    language: "Python",
    html_url: "https://github.com/mayurkadampro/Wordlist-Generator",
    stargazers_count: 8,
    fork: false,
  },
  {
    name: "HTTP-Reverse-Shell",
    description: "Educational Python networking experiment.",
    language: "Python",
    html_url: "https://github.com/mayurkadampro/HTTP-Reverse-Shell",
    stargazers_count: 8,
    fork: false,
  },
];
function OpenSource() {
  const [repos, setRepos] = useState(featuredFallback),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(false),
    [filter, setFilter] = useState("Featured");
  useEffect(() => {
    const controller = new AbortController();
    fetch(
      "https://api.github.com/users/mayurkadampro/repos?per_page=100&sort=updated",
      {
        signal: controller.signal,
        headers: { Accept: "application/vnd.github+json" },
      },
    )
      .then((r) => {
        if (!r.ok) throw new Error("GitHub unavailable");
        return r.json();
      })
      .then((data) => {
        const clean = data
          .filter((r) => !r.fork && !r.archived && r.name !== "mayurkadampro")
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.updated_at) - new Date(a.updated_at),
          );
        if (clean.length) setRepos(clean);
        else setError(true);
      })
      .catch((e) => {
        if (e.name !== "AbortError") setError(true);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);
  const shown = filter === "Featured" ? repos.slice(0, 6) : repos.slice(0, 12);
  return (
    <section id="opensource" className="section section-alt">
      <div className="container">
        <div className="section-head section-head-row">
          <div>
            <span className="eyebrow">04 / OPEN SOURCE</span>
            <h2>Built in the open.</h2>
            <p>Experiments, utilities and community projects from my GitHub.</p>
          </div>
          <a
            className="btn btn-outline"
            href="https://github.com/mayurkadampro?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            All repositories <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="repo-controls">
          <button
            className={filter === "Featured" ? "filter active" : "filter"}
            onClick={() => setFilter("Featured")}
          >
            Featured
          </button>
          <button
            className={filter === "More" ? "filter active" : "filter"}
            onClick={() => setFilter("More")}
          >
            More repositories
          </button>
          <span>
            {loading
              ? "Updating from GitHub…"
              : error
                ? "Showing selected repositories"
                : "Live GitHub data"}
          </span>
        </div>
        <div className="repo-grid">
          {shown.map((repo) => (
            <a
              className="repo-card"
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="repo-card-top">
                <Github size={23} />
                <ArrowUpRight size={18} />
              </div>
              <h3>{repo.name.replace(/-/g, " ")}</h3>
              <p>
                {repo.description ||
                  "Explore the code and documentation on GitHub."}
              </p>
              <div className="repo-meta">
                <span>{repo.language || "Code"}</span>
                <span>★ {repo.stargazers_count || 0}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeetCodeShowcase() {
  const profile = "https://leetcode.com/u/mayurkadampro/";
  const topics = [
    { name: "Arrays", count: 224 },
    { name: "Strings", count: 104 },
    { name: "Hash Tables", count: 87 },
    { name: "Dynamic Programming", count: 48 },
  ];
  return (
    <section id="leetcode" className="section leetcode-section">
      <div className="container">
        <div className="section-head section-head-row">
          <div>
            <span className="eyebrow">07 / PROBLEM SOLVING</span>
            <h2>Practice makes progress.</h2>
            <p>
              Algorithmic problem solving with JavaScript, TypeScript and
              Python.
            </p>
          </div>
          <a
            className="btn btn-outline"
            href={profile}
            target="_blank"
            rel="noopener noreferrer"
          >
            View LeetCode <ExternalLink size={16} />
          </a>
        </div>
        <div className="leetcode-layout">
          <div className="leetcode-feature">
            <div className="leetcode-mark">{"</>"}</div>
            <span className="leetcode-overline">LEETCODE / MAYURKADAMPRO</span>
            <div className="leetcode-big">
              485<span>+</span>
            </div>
            <h3>Language-tagged problems solved</h3>
            <p>
              469 JavaScript · 15 TypeScript · 1 Python3, as shown on the public
              profile when checked on 24 October 2026. This is a snapshot, not a
              live counter.
            </p>
            <div className="leetcode-meta">
              <span>🏅 7 badges</span>
              <span>365 Days Badge</span>
            </div>
          </div>
          <div className="leetcode-details">
            <h3>Problem-solving strengths</h3>
            <p>
              Selected topic counts from the public profile. Topic categories
              overlap.
            </p>
            {topics.map((t) => (
              <div className="leetcode-topic" key={t.name}>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.count} solved</span>
                </div>
                <div className="leetcode-track">
                  <span style={{ width: `${(t.count / 224) * 100}%` }} />
                </div>
              </div>
            ))}
            <a
              className="text-link"
              href={profile}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore my solutions <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <SectionHead
          eyebrow="06 / CERTIFICATIONS"
          title="Always learning."
          description="Credentials and learning milestones — organized separately so new certifications can be added easily."
        />
        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <article className="cert-card" key={cert.title}>
              <div className="cert-icon">
                <Award size={26} />
              </div>
              <span className="cert-number">CERTIFICATE / 0{i + 1}</span>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <div className="cert-bottom">
                <span>{cert.category}</span>
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    View credential <ExternalLink size={15} />
                  </a>
                ) : (
                  <span className="cert-status">
                    Credential link coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function ProjectArt({ visual }) {
  return (
    <div className={"project-art " + visual} aria-hidden="true">
      {visual === "mobile" ? (
        <>
          <div className="phone-mock">
            <div className="phone-notch" />
            <div className="mock-heading" />
            <div className="mock-card" />
            <div className="mock-lines" />
            <div className="mock-lines short" />
          </div>
          <div className="art-orbit" />
        </>
      ) : visual === "stream" ? (
        <>
          <div className="play-icon">▶</div>
          <div className="waveform">
            {Array.from({ length: 19 }, (_, i) => (
              <span key={i} style={{ height: `${18 + ((i * 37) % 65)}%` }} />
            ))}
          </div>
        </>
      ) : visual === "chart" ? (
        <>
          <div className="chart-grid" />
          <svg viewBox="0 0 400 170" preserveAspectRatio="none">
            <polyline
              points="0,139 35,124 67,133 97,92 132,107 168,67 205,85 240,45 278,65 310,25 345,40 400,12"
              fill="none"
              stroke="#52f0c3"
              strokeWidth="4"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </>
      ) : (
        <>
          <div className="id-card">
            <div className="id-avatar">✓</div>
            <div className="id-lines" />
            <div className="id-lines small" />
          </div>
          <div className="verified">✓</div>
        </>
      )}
    </div>
  );
}
function SectionHead({ eyebrow, title, description }) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
function App() {
  const [menu, setMenu] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [status, setStatus] = useState("");
  useEffect(() => {
    document.body.classList.toggle("menu-open", menu);
    return () => document.body.classList.remove("menu-open");
  }, [menu]);
  const send = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim(),
      email = String(data.get("email") || "").trim(),
      message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      setStatus("Please complete all fields.");
      return;
    }
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Portfolio enquiry from " + name)}&body=${encodeURIComponent(message + "\\n\\nFrom: " + name + " (" + email + ")")}`;
    setStatus("Your email app should open with the message ready to send.");
  };
  return (
    <div className="site">
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#home">
            <span className="brand-monogram" aria-hidden="true">
              mk
            </span>
            <span className="brand-wordmark">
              mayur<span className="muted-brand">.dev</span>
            </span>
          </a>
          <nav
            className={menu ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            {links.map(([label, href]) => (
              <a href={href} key={href} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href={`mailto:${contact.email}`}>
            Let's talk <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-btn"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main>
        <section id="home" className="hero">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability">
                <span className="pulse" /> FRONTEND & MOBILE ENGINEER
              </div>
              <h1>
                Building digital
                <br />
                experiences that
                <br />
                <span>make an impact.</span>
              </h1>
              <p className="hero-lead">
                Hey, I'm <strong>Mayur Kadam.</strong> A frontend developer with{" "}
                <strong>7+ years of experience</strong> building scalable web
                and mobile products across capital markets, banking and
                education.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  Explore my work <ArrowRight size={17} />
                </a>
                <a
                  className="btn btn-outline"
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View LinkedIn <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="hero-social">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={19} />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={19} />
                </a>
                <a href={`mailto:${contact.email}`} aria-label="Email">
                  <Mail size={19} />
                </a>
                <span className="social-divider" />
                <span>
                  <MapPin size={15} /> Pune, India
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="orb orb-one" />
              <div className="orb orb-two" />
              <div className="code-window">
                <div className="window-top">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>mayur.config.ts</span>
                  <Code2 size={15} />
                </div>
                <div className="code-content">
                  <div>
                    <em>01</em>
                    <span className="pink">const</span> developer = {"{"}
                  </div>
                  <div>
                    <em>02</em> &nbsp; name:{" "}
                    <span className="green">'Mayur Kadam'</span>,
                  </div>
                  <div>
                    <em>03</em> &nbsp; role:{" "}
                    <span className="green">'Frontend Engineer'</span>,
                  </div>
                  <div>
                    <em>04</em> &nbsp; experience:{" "}
                    <span className="orange">'7+ years'</span>,
                  </div>
                  <div>
                    <em>05</em> &nbsp; focus: [
                  </div>
                  <div>
                    <em>06</em> &nbsp; &nbsp;{" "}
                    <span className="green">'React.js'</span>,
                  </div>
                  <div>
                    <em>07</em> &nbsp; &nbsp;{" "}
                    <span className="green">'React Native'</span>,
                  </div>
                  <div>
                    <em>08</em> &nbsp; &nbsp;{" "}
                    <span className="green">'Great UX'</span>
                  </div>
                  <div>
                    <em>09</em> &nbsp; ]
                  </div>
                  <div>
                    <em>10</em> {"}"}
                  </div>
                </div>
                <div className="window-bottom">
                  <span className="green">●</span> Available for collaboration{" "}
                  <span>TSX</span>
                </div>
              </div>
              <div className="floating-chip">
                <Smartphone size={19} />
                <span>
                  Web + Mobile
                  <br />
                  <strong>Built to scale</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="container stats">
            <div>
              <strong>
                7<span>+</span>
              </strong>
              <span>Years experience</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Companies</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Industry domains</span>
            </div>
            <div>
              <strong>
                27<span>+</span>
              </strong>
              <span>Technical articles</span>
            </div>
          </div>
        </section>
        <section id="about" className="section">
          <div className="container about-grid">
            <div>
              <span className="eyebrow">01 / ABOUT ME</span>
              <h2>
                Engineering with
                <br />
                <span className="gradient-text">purpose & precision.</span>
              </h2>
              <p className="body-copy">
                I'm a frontend developer based in Pune, India, with a background
                spanning capital markets, banking and education. I turn complex
                requirements into intuitive, performant digital products.
              </p>
              <p className="body-copy">
                From mobile banking experiences and real-time streaming to stock
                analysis platforms, I care about clean architecture, accessible
                interfaces, thoughtful interactions and reliable delivery.
              </p>
              <a className="text-link" href="#experience">
                My career journey <ArrowRight size={17} />
              </a>
            </div>
            <div className="about-cards">
              <div className="about-card">
                <Smartphone />
                <h3>Mobile first</h3>
                <p>
                  Native-feeling React Native experiences for iOS and Android.
                </p>
              </div>
              <div className="about-card">
                <Layers />
                <h3>Scalable systems</h3>
                <p>
                  Reusable components and maintainable frontend architecture.
                </p>
              </div>
              <div className="about-card">
                <Code2 />
                <h3>Clean engineering</h3>
                <p>
                  Type-safe, tested, performant code that teams can build on.
                </p>
              </div>
              <div className="about-card">
                <BriefcaseBusiness />
                <h3>Domain expertise</h3>
                <p>
                  Real-world products across finance, banking and education.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="section section-alt">
          <div className="container">
            <SectionHead
              eyebrow="02 / EXPERTISE"
              title="Tools of the trade."
              description="A practical toolkit for shipping robust web and mobile experiences."
            />
            <div className="skills-grid">
              {skillGroups.map((g, i) => (
                <div className="skill-panel" key={g.title}>
                  <div className="skill-title">
                    <span>0{i + 1}</span>
                    <h3>{g.title}</h3>
                  </div>
                  <div className="skill-tags">
                    {g.items.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="section">
          <div className="container">
            <SectionHead
              eyebrow="03 / SELECTED WORK"
              title="Projects that solve problems."
              description="A selection of products and systems I've helped develop."
            />
            <div className="projects-grid">
              {projects.slice(0, showAll ? 4 : 3).map((p) => (
                <article className="project-card" key={p.number}>
                  <ProjectArt visual={p.visual} />
                  <div className="project-info">
                    <div className="project-top">
                      <span>
                        {p.number} / {p.type}
                      </span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="center">
              <button
                className="btn btn-outline"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show fewer projects" : "View all projects"}{" "}
                <ArrowRight size={16} />
              </button>
            </div>
            <p className="project-note">
              Professional project descriptions are based on resume details;
              private client code and screenshots are not published.
            </p>
          </div>
        </section>
        <OpenSource />
        <section id="experience" className="section section-alt">
          <div className="container">
            <SectionHead
              eyebrow="04 / CAREER"
              title="The journey so far."
              description="Building, learning and delivering across teams and industries."
            />
            <div className="timeline">
              {experience.map((job, i) => (
                <article className="timeline-item" key={job.company}>
                  <div className="timeline-date">
                    {job.dates}
                    <span>
                      <MapPin size={13} /> {job.location}
                    </span>
                  </div>
                  <div className="timeline-dot" />
                  <div className="timeline-body">
                    <div className="job-index">0{i + 1} / EXPERIENCE</div>
                    <h3>{job.role}</h3>
                    <h4>{job.company}</h4>
                    <p className="job-specialty">{job.specialty}</p>
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionHead
              eyebrow="05 / RECOGNITION"
              title="Milestones & recognition."
            />
            <div className="award-grid">
              {awards.map((a) => (
                <div className="award-card" key={a.name}>
                  <Award size={25} />
                  <h3>{a.name}</h3>
                  <p>{a.org}</p>
                  <span>{a.date}</span>
                </div>
              ))}
            </div>
            <div className="extras-grid recognition-extras">
              <div className="extra-panel">
                <BookOpen />
                <h3>Publication</h3>
                <p>
                  <strong>PyBot:</strong> A chatbot for Python queries (IEEE
                  paper)
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="education" className="section section-alt">
          <div className="container">
            <SectionHead
              eyebrow="06 / EDUCATION"
              title="Where it all began."
              description="Academic foundation and early hands-on software engineering experience."
            />
            <div className="education-grid">
              <article className="education-card">
                <div className="education-icon">
                  <GraduationCap size={26} />
                </div>
                <div className="education-label">ACADEMIC BACKGROUND</div>
                <h3>Bachelor of Engineering</h3>
                <p className="education-focus">Information Technology</p>
                <p className="education-school">University of Mumbai</p>
                <div className="education-bottom">
                  <span>Apr 2015 — Apr 2019</span>
                  <span>CGPA 7.5</span>
                </div>
              </article>
              <article className="education-card">
                <div className="education-icon">
                  <BriefcaseBusiness size={25} />
                </div>
                <div className="education-label">EARLY EXPERIENCE</div>
                <h3>Systems Engineer Intern</h3>
                <p className="education-focus">Trivia Software Pvt. Ltd.</p>
                <p className="education-school">
                  Developed a CRUD application using Java and Hibernate, gaining
                  practical experience in backend application development.
                </p>
                <div className="education-bottom">
                  <span>Internship</span>
                  <span>Java · Hibernate</span>
                </div>
              </article>
            </div>
          </div>
        </section>
        <Certifications />
        <LeetCodeShowcase />
        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <span className="eyebrow">06 / CONTACT</span>
              <h2>
                Have something
                <br />
                <span className="gradient-text">great in mind?</span>
              </h2>
              <p className="body-copy">
                Whether you're building a product, exploring a collaboration or
                just want to talk technology, I'd love to hear from you.
              </p>
              <div className="contact-methods">
                <a href={`mailto:${contact.email}`}>
                  <Mail size={18} />
                  {contact.email}
                  <ArrowUpRight size={16} />
                </a>
                <a href={`tel:${contact.phone.replace(/\\s/g, "")}`}>
                  <Phone size={18} />
                  {contact.phone}
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
                  LinkedIn / mayurkadampro
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  GitHub / mayurkadampro
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={send}>
              <h3>Send a message</h3>
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" required placeholder="Your name" />
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Tell me about your idea..."
              />
              <button className="btn btn-primary" type="submit">
                Open email draft <Send size={16} />
              </button>
              <p className="form-status" role="status">
                {status}
              </p>
              <small>
                This opens your email application; no message is sent
                automatically.
              </small>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <a href="#home" className="brand">
            <span className="brand-monogram" aria-hidden="true">
              mk
            </span>
            <span className="brand-wordmark">
              mayur<span className="muted-brand">.dev</span>
            </span>
          </a>
          <span>
            Designed & built with React · © {new Date().getFullYear()} Mayur
            Kadam
          </span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
export default App;

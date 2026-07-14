import { useEffect, useMemo, useState } from 'react';

const projects = [
  {
    title: 'Online Doctor Consultation System',
    period: 'Feb 2024',
    description:
      'Developed a secure medical consultation portal serving 10+ test users.',
    demoLink: null,
    repoLink: null,
    stack: ['ASP.NET Core', 'REST APIs', 'JWT'],
    highlights: [
      'Implemented JWT-based authentication supporting 3 distinct user roles.',
      'Built an admin dashboard managing 50+ doctors, 200+ appointments, and 500+ test reports.',
      'Reduced booking time by 60%, improving overall system efficiency.',
    ],
  },
  {
    title: 'Reversible Logic Circuits',
    period: 'Aug 2024',
    description:
      'Designed 3 reversible logic gates (Fredkin, Toffoli, Peres) using CMOS-based VHDL implementation.',
    demoLink: null,
    repoLink: null,
    stack: ['CMOS', 'VHDL', 'Xilinx'],
    highlights: [
      'Achieved 30% reduction in power dissipation using reversible computing principles.',
      'Applied 3 quantum-safe techniques to design secure circuit logic for post-quantum cryptographic systems.',
      'Simulated and validated circuit outputs on Xilinx, achieving 0% functional error.',
    ],
  },
];

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Golang', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { name: 'Kafka', icon: 'https://cdn.simpleicons.org/apachekafka/FFFFFF' },
    ],
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: '🚀',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    ],
  },
  {
    title: 'AI Developer Tools',
    icon: '🤖',
    skills: [
      { name: 'GitHub Copilot', icon: 'https://cdn.simpleicons.org/githubcopilot/FFFFFF' },
      { name: 'Cursor', icon: 'https://cdn.simpleicons.org/cursor/FFFFFF' },
      { name: 'Claude', icon: 'https://cdn.simpleicons.org/claude/FFFFFF' },
      { name: 'Codex', icon: 'https://cdn.simpleicons.org/openai/FFFFFF' },
      { name: 'Windsurf', icon: 'https://cdn.simpleicons.org/codeium/FFFFFF' },
    ],
  },
];

const experience = [
  {
    role: 'Software Engineer',
    company: 'Cisco Systems, Inc.',
    duration: 'Oct 2025 - Present',
    logo: 'https://cdn.simpleicons.org/cisco/FFFFFF',
    summary:
      'Backend Engineer in Cisco Security Cloud Control, contributing to the Security Business Group (SBG) PIAM team by building 3+ secure Go services supporting 10K+ users and 50K+ API requests/day; optimized 4+ microservices to cut latency by 20%, increase throughput by 30%, and sustain 99.9% uptime, while implementing GitHub Actions CI/CD across 20+ repositories and deploying 5+ containerized services on Docker, Kubernetes, and AWS to improve release efficiency by 50%.',
  },
];

const education = [
  {
    institute: 'Institute of Engineering and Management, Kolkata',
    period: 'Sep 2021 – May 2025',
    degree: 'Bachelor of Engineering in Electronics and Communication',
    scoreLabel: 'CGPA',
    score: '9.25',
    location: 'West Bengal, India',
    logo: 'https://i0.wp.com/media.iem.edu.in/uploads/sites/7/2020/10/logo-2.png?ssl=1',
  },
  {
    institute: 'Behala Aryya Vidyamandir, Kolkata',
    period: 'Jun 2019 – Mar 2021',
    degree: 'Higher Secondary Education',
    scoreLabel: 'WBCHSE Score',
    score: '78.2%',
    location: 'West Bengal, India',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2FVeGglgsgxl3yu-RxsHDGItALFQSutC8ImavKeXsHs7Y5YDAR3skLvQ&s=10',
  },
  {
    institute: 'Behala Aryya Vidyamandir, Kolkata',
    period: 'Jan 2018 – Feb 2019',
    degree: 'Secondary Education',
    scoreLabel: 'WBBSE Score',
    score: '87.2%',
    location: 'West Bengal, India',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2FVeGglgsgxl3yu-RxsHDGItALFQSutC8ImavKeXsHs7Y5YDAR3skLvQ&s=10',
  },
];

const profile = {
  name: 'Snehashish Saha',
  title: 'Software Engineer',
  location: 'Bangalore, Karnataka, India',
  email: 'snehashishsaha830@gmail.com',
  bio: 'I am a software engineer who enjoys building scalable products, from intuitive frontend experiences to reliable backend systems, while continuously exploring modern cloud and AI-assisted development workflows.',
  links: {
    github: 'https://github.com/Snehashish05',
    linkedin:
      'https://www.linkedin.com/in/snehashish-saha-570392229?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    resume: '/Resume_Snehashish__Copy_(1).pdf',
  },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pointerGlow, setPointerGlow] = useState({ x: '50%', y: '50%' });
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const x = `${(event.clientX / window.innerWidth) * 100}%`;
      const y = `${(event.clientY / window.innerHeight) * 100}%`;
      setPointerGlow({ x, y });
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const handleTilt = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - py) * 10;
    const rotateY = (px - 0.5) * 12;

    card.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`);
    card.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`);
    card.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
    card.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
  };

  const resetTilt = (event) => {
    const card = event.currentTarget;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '50%');
  };

  const openExternalLink = (event, url) => {
    event.preventDefault();
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened) {
      window.location.href = url;
    }
  };

  return (
    <div className="app-shell" style={{ '--glow-x': pointerGlow.x, '--glow-y': pointerGlow.y }}>
      <div className="bg-3d" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="orb orb-c" />
      </div>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home">
            {profile.name}
          </a>
          <button
            className="menu-btn"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['about', 'projects', 'education', 'skills', 'contact'].map((section) => (
              <a key={section} href={`#${section}`} onClick={() => setMenuOpen(false)}>
                {section[0].toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero container perspective-scene">
          <div
            className="hero-panel tilt-card"
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            onBlur={resetTilt}
          >
            <div className="hero-content">
              <div className="hero-photo-wrap">
                <img
                  className="hero-photo"
                  src="/profile-photo.jpg"
                  alt="Portrait of Snehashish Saha"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <p className="eyebrow">Hi, I’m</p>
                <h1>{profile.name}</h1>
                <p className="subtitle">{profile.title}</p>
                <p>{profile.bio}</p>
                <p className="muted">{profile.location}</p>
                <div className="hero-actions">
                  <a className="btn primary" href="#projects">
                    See Projects
                  </a>
                  <a className="btn ghost" href="#contact">
                    Let’s Talk
                  </a>
                  <a className="btn ghost" href={profile.links.resume} target="_blank" rel="noreferrer">
                    Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-metrics">
              <span>⚡ Fast UI</span>
              <span>🧠 Problem Solver</span>
              <span>🚀 Product Mindset</span>
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <h2>About Me</h2>
          <p>
            I am a Software Engineer with a strong foundation in full-stack development, API
            design, and scalable system architecture. I specialize in building secure,
            high-performance applications using modern technologies across frontend, backend, and
            cloud platforms. With a problem-solving mindset and a focus on clean, maintainable
            code, I aim to deliver reliable digital solutions that create measurable impact.
          </p>
        </section>

        <section id="projects" className="section container">
          <h2>Featured Projects</h2>
          <div className="grid projects-grid">
            {projects.map((project) => (
              <article
                className="card tilt-card interactive-card"
                key={project.title}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                onBlur={resetTilt}
              >
                <h3>{project.title}</h3>
                <p className="project-meta">{project.period}</p>
                <p>{project.description}</p>
                <div className="chip-row">
                  {project.stack.map((tool) => (
                    <span key={tool} className="chip">
                      {tool}
                    </span>
                  ))}
                </div>
                {project.highlights?.length ? (
                  <ul className="project-highlights">
                    {project.highlights.map((point) => (
                      <li key={`${project.title}-${point}`}>{point}</li>
                    ))}
                  </ul>
                ) : null}
                {project.demoLink || project.repoLink ? (
                  <div className="project-links">
                    {project.demoLink ? (
                      <a href={project.demoLink} aria-label={`Open demo for ${project.title}`}>
                        Live Demo ↗
                      </a>
                    ) : null}
                    {project.repoLink ? (
                      <a href={project.repoLink} aria-label={`Open repository for ${project.title}`}>
                        GitHub ↗
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section container">
          <h2>Experience</h2>
          <div className="grid">
            {experience.map((item) => (
              <article
                className="card tilt-card interactive-card"
                key={`${item.role}-${item.company}`}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                onBlur={resetTilt}
              >
                <div className="experience-header">
                  <img
                    className="experience-logo"
                    src={item.logo}
                    alt={`${item.company} logo`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3>{item.role}</h3>
                <p className="muted">
                  {item.company} • {item.duration}
                </p>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section container">
          <h2>Education</h2>
          <div className="grid education-grid">
            {education.map((item) => (
              <article
                className="card tilt-card interactive-card"
                key={`${item.institute}-${item.period}`}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                onBlur={resetTilt}
              >
                <div className="education-header">
                  <img
                    className="education-logo"
                    src={item.logo}
                    alt={`${item.institute} logo`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3>{item.institute}</h3>
                <p className="project-meta">{item.period}</p>
                <p>
                  {item.degree}; {item.scoreLabel}: {item.score}
                </p>
                <p className="muted education-location">{item.location}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section container">
          <h2>Skills</h2>
          <div className="skills-categories">
            {skillCategories.map((category) => (
              <article
                className="card tilt-card interactive-card"
                key={category.title}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                onBlur={resetTilt}
              >
                <h3 className="skill-category-title">
                  <span aria-hidden="true">{category.icon}</span> {category.title}
                </h3>
                <ul className="skills-list">
                  {category.skills.map((skill) => (
                    <li key={`${category.title}-${skill.name}`}>
                      <img
                        className="skill-icon"
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section container">
          <h2>Contact</h2>
          <p>Want to work together? Reach out and let’s build something great.</p>
          <div className="hero-actions">
            <a className="btn primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a
              className="btn ghost"
              href={profile.links.github}
              onClick={(event) => openExternalLink(event, profile.links.github)}
            >
              GitHub
            </a>
            <a
              className="btn ghost"
              href={profile.links.linkedin}
              onClick={(event) => openExternalLink(event, profile.links.linkedin)}
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {year} {profile.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
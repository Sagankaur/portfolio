import Image from "next/image";

const contactLinks = [
  { label: "Email", href: "mailto:sagan.kaur.khangura@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sagan-kaur/" },
  { label: "GitHub", href: "https://github.com/Sagankaur" },
];

const stats = [
  { label: "IIT Madras CGPA", value: "9.04" },
  { label: "Project CGPA", value: "9.5" },
  { label: "IELTS", value: "7.5" },
];

const education = [
  {
    school: "Indian Institute of Technology, Madras",
    detail: "B.S. Data Science and Programming",
    meta: "2023 - 2027 | CGPA: 9.04 | Project CGPA: 9.5",
  },
  {
    school: "CBSE Class 12",
    detail: "Senior secondary education",
    meta: "2022 | 80.2%",
  },
  {
    school: "CBSE Class 10",
    detail: "Secondary education",
    meta: "2020 | 92%",
  },
];

const skillGroups = [
  {
    title: "Programming and CS",
    skills: ["Python", "Java", "SQL", "Data Structures", "OOP", "Problem Solving"],
  },
  {
    title: "Backend and Systems",
    skills: [
      "Flask",
      "FastAPI",
      "REST APIs",
      "Authentication",
      "Async Tasks",
      "Docker",
      "Kubernetes (GKE)",
      "GitHub Actions",
      "OpenTelemetry",
    ],
  },
  {
    title: "Data and ML",
    skills: [
      "Data Cleaning",
      "EDA",
      "Feature Engineering",
      "Regression",
      "Decision Trees",
      "Random Forest",
      "SVM",
      "SHAP",
      "Fairlearn",
    ],
  },
  {
    title: "MLOps and Cloud",
    skills: ["DVC", "MLflow", "MLOps", "LLMOps", "MLSecOps", "Vertex AI", "GCS"],
  },
  {
    title: "Tools and Visualization",
    skills: ["Matplotlib", "Seaborn", "Excel", "Git", "Jira", "SQLite"],
  },
];

const experiences = [
  {
    role: "Web Development Intern",
    org: "NPTEL, IIT Madras",
    period: "Sep 2025 - Jun 2026",
    highlights: [
      "Developed and optimized SQL queries for large learner datasets, improving reporting efficiency.",
      "Built Flask APIs that enabled structured data access for analytics workflows.",
      "Automated data pipelines using PHP and SQL, reducing manual reporting effort.",
      "Supported data workflows with validation checks to improve data quality.",
    ],
  },
  {
    role: "NLP Intern",
    org: "Department of Management Studies, IIT Madras",
    period: "Sep 2025 - Dec 2025",
    highlights: [
      "Analyzed system data patterns and generated insights through visualization.",
      "Implemented topic modeling and interpretability techniques for unstructured data.",
      "Performed preprocessing to structure raw text data for downstream analysis.",
      "Improved usability of model outputs through structured interpretation.",
    ],
  },
  {
    role: "Teaching Assistant",
    org: "IIT Madras",
    period: "May 2024 - Sep 2024 | May 2025 - Sep 2025 | Jan 2026 - May 2026",
    highlights: [
      "Explained Python programming and software engineering concepts to students.",
      "Guided students through assignments, problem solving, and debugging workflows.",
      "Simplified complex topics for better learning outcomes.",
    ],
  },
  {
    role: "Event Deputy Head",
    org: "Research Summit 24 (Paradox), IIT Madras",
    period: "2024",
    highlights: ["Coordinated event operations and managed cross-functional collaboration."],
  },
];

const projects = [
  {
    title: "QC-Leap",
    subtitle: "AI-Powered Manufacturing Quality Control System",
    href: "https://github.com/kushabarodekar/soft-engg-project-sep-2025-se-SEP-20",
    stack: "Next.js, TypeScript, Tailwind CSS",
    highlights: [
      "Developed application workflows for automated defect detection using computer vision.",
      "Focused on integrating ML models into a usable production-style interface.",
    ],
  },
  {
    title: "System Threat Forecaster",
    subtitle: "System vulnerability classification",
    href: "https://github.com/Sagankaur/Machine-Learning-Classification",
    stack: "Python, Scikit-learn, Pandas, Matplotlib",
    highlights: [
      "Built a classification model to predict system vulnerabilities.",
      "Implemented preprocessing, evaluation, and model performance analysis.",
    ],
  },
  {
    title: "Household Services Platform",
    subtitle: "Role-based services marketplace",
    href: "https://github.com/Sagankaur/Household-Services",
    stack: "Vue.js, JWT, Celery, Redis, Mailhog",
    highlights: [
      "Built a full-stack application with admin, customer, and professional roles.",
      "Developed APIs, authentication, async task handling, and workflow automation.",
    ],
  },
  {
    title: "Influencer Marketing App",
    subtitle: "Brand and influencer collaboration backend",
    href: "https://github.com/Sagankaur/Fluense.git",
    stack: "Flask, SQLite, Python",
    highlights: [
      "Designed database schema and REST APIs for campaign and user data handling.",
      "Built backend flows to connect brands with influencers.",
    ],
  },
  {
    title: "Business Data Analysis",
    subtitle: "Local dairy shop sales analysis",
    href: "https://github.com/Sagankaur/BDM",
    stack: "Python, Pandas, Excel, Matplotlib, Seaborn, SQLite, Flask",
    highlights: [
      "Analyzed sales and customer data to identify trends and improve inventory decisions.",
      "Created visualizations to communicate insights clearly.",
    ],
  },
  {
    title: "Multilingual Speech Recognition",
    subtitle: "Speech-to-text pipeline",
    href: "https://github.com/Sagankaur/Multilingual-Speech-Recognition",
    stack: "Whisper, Faster-Whisper, Indic tools",
    highlights: [
      "Built multilingual audio transcription workflows with optimized inference.",
      "Handled environment setup and dependency management for model execution.",
    ],
  },
  {
    title: "Multilingual Sentiment Analysis",
    subtitle: "LLM-based sentiment classification",
    href: "https://github.com/Sagankaur/Multilingual-Sentiment-Analysis",
    stack: "Gemma, Prompt Engineering, Python",
    highlights: [
      "Leveraged Gemma for sentiment classification across multilingual datasets.",
      "Designed prompts and evaluated model outputs for consistency and accuracy.",
    ],
  },
  {
    title: "Denoising and 4x Super-Resolution",
    subtitle: "Low-light image restoration",
    href: "https://github.com/Sagankaur/Denoising-and-Super-Resolution-Images/",
    stack: "Python, U-Net, PixelShuffle, TTA",
    highlights: [
      "Built an end-to-end restoration pipeline for IIT Madras DLP 2026 NPPE3 on RELLISUR.",
      "Reduced competition RMSE from 41.8 to 18.7 using SRUNet, multi-task loss, and calibration.",
      "Used EDA to model non-Gaussian noise and improve validation across lighting conditions.",
    ],
  },
  {
    title: "End-to-End MLOps Pipeline",
    subtitle: "Cloud-native ML deployment and observability",
    href: "https://github.com/Sagankaur/23f2003511_MLOPS_WEEKLY_ASSIGNMENT",
    stack: "DVC, MLflow, FastAPI, Docker, GKE, GitHub Actions, OpenTelemetry",
    highlights: [
      "Orchestrated data versioning, experiment tracking, model registry, and deployment on GCP.",
      "Automated CI/CD for a Dockerized FastAPI service on GKE with HPA and load testing.",
      "Integrated MLSecOps, drift monitoring, fairness assessment, SHAP, and LLM guardrails.",
    ],
  },
  {
    title: "RAG Document QnA",
    subtitle: "Local retrieval-augmented document assistant",
    href: "https://github.com/Sagankaur/rag-document-qa-system",
    stack: "Python, FAISS, Streamlit, Gemini",
    highlights: [
      "Engineered a local RAG system for grounded answers from proprietary documents.",
      "Optimized CPU-bound semantic search with FAISS flat L2 indexing.",
      "Built a Streamlit dashboard with PDF ingestion, session state, and constrained prompts.",
    ],
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-sm font-semibold uppercase text-teal-700">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-semibold text-zinc-950 sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-base leading-7 text-zinc-600">{description}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="relative isolate min-h-[78vh] overflow-hidden border-b border-zinc-200 bg-white"
      >
        <Image
          src="/portfolio-hero.png"
          alt="Data dashboards, code, and cloud pipeline visual"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-white/72" />
        <div className="mx-auto flex min-h-[78vh] w-full max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-teal-700">
              Data Science | MLOps | Backend Systems
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-tight text-zinc-950 sm:text-6xl lg:text-7xl">
              Sagandeep Kaur
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700">
              IIT Madras data science student building data products, ML systems, and
              production-oriented applications with clean APIs, reliable pipelines, and
              measurable model behavior.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
              >
                View Projects
              </a>
              <a
                href="mailto:sagan.kaur.khangura@gmail.com"
                className="rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:border-teal-600 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-zinc-700">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="hover:text-teal-800"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-zinc-200 bg-zinc-50 px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Profile"
              title="Data science foundation with production engineering habits"
              description="I work across data analysis, backend systems, ML workflows, and deployment pipelines. My projects combine modeling with practical engineering: APIs, validation, automation, observability, and interfaces that make model outputs usable."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <p className="text-3xl font-semibold text-zinc-950">{item.value}</p>
                <p className="mt-1 text-sm text-zinc-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-b border-zinc-200 bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Experience"
            title="Applied engineering and teaching work"
            description="Recent roles across web development, NLP, student support, and event operations."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {experiences.map((experience) => (
              <article
                key={`${experience.role}-${experience.org}`}
                className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-950">{experience.role}</h3>
                    <p className="mt-1 text-sm font-medium text-teal-800">{experience.org}</p>
                  </div>
                  <p className="text-sm text-zinc-600 sm:text-right">{experience.period}</p>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-700">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="border-b border-zinc-200 bg-zinc-50 px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Technical Skills"
            title="Tools used across data, ML, and deployment"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-zinc-950">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-zinc-200 bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Projects"
            title="Selected systems and applied ML work"
            description="A mix of application engineering, model development, data analysis, MLOps, LLMOps, and computer vision projects."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.href}
                className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-950">{project.title}</h3>
                    <p className="mt-1 text-sm font-medium text-teal-800">{project.subtitle}</p>
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-zinc-300 px-3 py-2 text-sm font-semibold text-zinc-800 transition hover:border-teal-600 hover:text-teal-800"
                  >
                    GitHub
                  </a>
                </div>
                <p className="mt-4 text-sm font-medium text-zinc-600">{project.stack}</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="border-b border-zinc-200 bg-zinc-50 px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Education" title="Academic background" />
          <div className="grid gap-5 md:grid-cols-3">
            {education.map((item) => (
              <article
                key={item.school}
                className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-zinc-950">{item.school}</h3>
                <p className="mt-2 text-sm text-zinc-700">{item.detail}</p>
                <p className="mt-4 text-sm font-medium text-teal-800">{item.meta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-zinc-950 px-5 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-amber-300">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Open to data science, backend, and ML engineering opportunities.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              Reach out for internships, collaborations, or projects involving analytics,
              applied ML, backend systems, and deployment workflows.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-lg border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

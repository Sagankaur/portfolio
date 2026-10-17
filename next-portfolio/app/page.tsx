import Image from "next/image";

const contactLinks = [
  { label: "Email", href: "mailto:sagan.kaur.k@gmail.com" },
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
    role: "Software Engineering Intern",
    org: "NPTEL, IIT Madras",
    period: "Sep 2025 - Jul 2026",
    highlights: [
      "Built and extended Django workflows for Local Chapter applications, corrections, and reviewer/admin actions.",
      "Improved AISHE mapping, duplicate detection, and institutional validation using exact and fuzzy matching.",
      "Implemented backend and frontend workflow changes across Django, Wagtail, JavaScript/TypeScript, and PostgreSQL.",
      "Added regression coverage for authorization, validation, workflow transitions, and edge-case behavior.",
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
    stack: "Next.js, React, TypeScript, FastAPI, PostgreSQL, Redis, Celery, PyTorch, OpenCV, Docker",
    highlights: [
      "Built a full-stack quality-control dashboard for defect detection model management, training, inference, and reporting.",
      "Implemented ML workflows with segmentation masks, Copy-Paste augmentation, class balancing, and MobileNetV3-Small classification.",
      "Developed FastAPI services with JWT auth, PostgreSQL models, Redis/Celery jobs, and real-time training progress updates.",
    ],
  },
  {
    title: "SiteSage AI",
    subtitle: "Construction procurement intelligence copilot",
    href: "https://github.com/Sagankaur/Construction-Procurement-Intelligence-Agent",
    stack: "Python, Streamlit, FAISS, SQLite, Scikit-learn, Plotly, Ollama (optional), Docker",
    highlights: [
      "Built a multi-page procurement dashboard for document upload, cited AI question answering, delay prediction, vendor risk, and alerts.",
      "Implemented local RAG with document chunking, HashingVectorizer embeddings, FAISS retrieval, SQLite persistence, and grounded-answer fallbacks.",
      "Developed Random Forest delay-risk scoring, vendor reliability ranking, schedule-impact alerts, synthetic demo data, tests, and a reproducible Docker image.",
    ],
  },
  {
    title: "Local Chapter Activity Dashboard",
    subtitle: "Synthetic-data LC activity and follow-up prototype",
    href: "https://github.com/Sagankaur/Local-Chapter-NPTEL",
    stack: "Python, Flask, SQLAlchemy, SQLite, Jinja, Bootstrap, Chart.js, Docker",
    highlights: [
      "Built a standalone dashboard for latest-year LC activity, historical trends, and chapter-level timelines.",
      "Added validated CSV ingestion with upserts, JSON analytics endpoints, and inactive-chapter export.",
      "Published synthetic sample data and clearly separated this showcase from NPTEL's production Local Chapter systems.",
    ],
  },
  {
    title: "Satellite Image Cloud Removal",
    subtitle: "Generative AI reconstruction for remote sensing imagery",
    href: "https://github.com/Sagankaur/Bharatiya-Antariksh-Hackathon",
    stack: "Python, PyTorch, ResUNet, GAN, OpenCV, NumPy, Pandas, Matplotlib, Kaggle GPU",
    highlights: [
      "Built a cloud-removal pipeline mapping cloudy optical imagery and masks to reconstructed cloud-free satellite outputs.",
      "Prepared RICE1/RICE2 manifests, trained a mask-guided ResUNet with cloud-aware L1 and SSIM loss, and exported visual predictions.",
      "Reached about 22.74 dB PSNR and 0.796 SSIM on RICE2 testing, then explored GAN refinement and Bhoonidhi LISS-IV data automation.",
    ],
  },
  {
    title: "Multilingual Speech Recognition",
    subtitle: "Routed ASR pipeline under compute constraints",
    href: "https://github.com/Sagankaur/Multilingual-Speech-Recognition",
    stack: "Python, PyTorch, Hugging Face, Whisper, Faster-Whisper, Indic Conformer, Librosa, Torchaudio, Kaggle",
    highlights: [
      "Built an English, Hindi, and Tamil transcription pipeline for a Kaggle speech recognition challenge.",
      "Added language identification and dynamic model routing across Whisper large-v3-turbo and Indic Conformer models.",
      "Implemented transcript normalization, WER evaluation, beam-search inference, FP16 GPU execution, caching, and Kaggle submission generation.",
    ],
  },
  {
    title: "Multilingual Sentiment Analysis",
    subtitle: "LLM fine-tuning for Indian-language sentiment classification",
    href: "https://github.com/Sagankaur/Multilingual-Sentiment-Analysis",
    stack: "Python, Hugging Face Transformers, Gemma, LoRA, PEFT, bitsandbytes",
    highlights: [
      "Fine-tuned google/gemma-3-1b-it with LoRA/PEFT for binary sentiment classification across 13 Indian languages.",
      "Built preprocessing, label encoding, tokenization, training, validation, diagnostics, and Kaggle submission workflows.",
      "Used memory-efficient training with bitsandbytes and Hugging Face Trainer, reaching 0.9778 local validation Macro F1.",
    ],
  },
  {
    title: "Low-Light Image Restoration",
    subtitle: "Denoising, illumination correction, and 4x super-resolution",
    href: "https://github.com/Sagankaur/Denoising-and-Super-Resolution-Images/",
    stack: "Python, PyTorch, NumPy, Pandas, PIL, Matplotlib, Seaborn, U-Net, PixelShuffle, CUDA",
    highlights: [
      "Built a PyTorch restoration pipeline for the RELLISUR/Kaggle dataset with denoising, illumination correction, and 4x super-resolution.",
      "Designed a custom SR U-Net with encoder-decoder blocks, skip connections, PixelShuffle upscaling, and refinement layers.",
      "Reduced private RMSE from a 41.8 baseline to about 18.7 using EDA-driven modeling, loss tuning, mixed precision, TTA, and calibration.",
    ],
  },
  {
    title: "End-to-End MLOps Pipeline",
    subtitle: "Cloud-native ML deployment and observability",
    href: "https://github.com/Sagankaur/23f2003511_MLOPS_WEEKLY_ASSIGNMENT",
    stack: "Python, Scikit-learn, MLflow, DVC, GCS, Feast, BigQuery, FastAPI, Docker, GKE, OpenTelemetry",
    highlights: [
      "Built an Iris classification pipeline with cloud artifact storage, data versioning, feature store setup, and experiment tracking.",
      "Automated CI/CD with GitHub Actions, pytest, CML reports, Dockerized FastAPI serving, Kubernetes deployment, HPA, and load testing.",
      "Added model explainability, fairness checks, drift monitoring, guardrails, and LLMOps/MLSecOps experiments.",
    ],
  },
  {
    title: "RAG Document QnA",
    subtitle: "Local retrieval-augmented document assistant",
    href: "https://github.com/Sagankaur/rag-document-qa-system",
    stack: "Python, FAISS, Streamlit, Gemini, NLP chunking, semantic embeddings",
    highlights: [
      "Built a local RAG system that synthesizes grounded answers from proprietary documents with refusal behavior for unsupported queries.",
      "Optimized CPU-bound vector similarity search with FAISS flat L2 indexing and overlapping text chunking.",
      "Created a Streamlit dashboard for PDF ingestion, session-state memory, constrained Gemini prompting, and citation-aware responses.",
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
                href="mailto:sagan.kaur.k@gmail.com"
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

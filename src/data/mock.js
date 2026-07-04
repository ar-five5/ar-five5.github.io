export const MOCK_DATA = {
  profile: {
    name: "Amogh Raj Godavarthy",
    role: "Computer Science Student",
    tagline: "Applied ML · Cloud Data Engineering",
    about:
      "I'm a third-year B.Tech Computer Science student at Mahindra University, Hyderabad, currently interning with PwC India's Advisory practice (Cloud, Engineering & Data Analytics) in Hyderabad. My work sits at the intersection of applied machine learning and real-world data systems — I've built end-to-end ML pipelines for energy forecasting, healthcare classification, and HR analytics, and I'm now getting hands-on with cloud data pipelines. Outside coursework I completed a 6-month AI/ML training program at i-Hub, IIIT Hyderabad, and a product management program with BITSoM × Masai focused on generative and agentic AI.",
    researchInterests: [
      "Time-Series Forecasting",
      "Applied ML in Energy Systems",
      "Healthcare ML",
      "Cloud Data Pipelines",
      "AI Safety & Interpretability",
      "Agentic AI",
    ],
    impactStats: [
      { value: 50, suffix: "k+", label: "Records Modeled" },
      { value: 82, suffix: "%", label: "Top Model F1 Score" },
      { value: 6, suffix: "", label: "Shipped Projects" },
      { value: 36, suffix: "h", label: "Longest Build Sprint" },
    ],
    contact: {
      email: "amoghraj55@gmail.com",
      collegeEmail: "se23ucse022@mahindrauniversity.edu.in",
      phone: null,
      location: "Hyderabad, India",
      github: "https://github.com/ar-five5",
      linkedin: "https://linkedin.com/in/amogh-raj",
      twitter: null,
    },
  },
  resume: {
    education: [
      {
        id: 1,
        degree: "B.Tech in Computer Science & Engineering",
        institution: "Mahindra University, Hyderabad",
        period: "2023 — 2027",
        description:
          "Ecole Centrale School of Engineering. Coursework spanning algorithms, systems, and applied machine learning.",
      },
      {
        id: 2,
        degree: "Student Training Program in AI/ML",
        institution: "i-Hub at IIIT Hyderabad",
        period: "Sep 2024 — Mar 2025",
        description:
          "6-month intensive program covering supervised/unsupervised learning, deep learning architectures, and end-to-end ML project development.",
      },
      {
        id: 3,
        degree: "Product Management with Generative & Agentic AI",
        institution: "BITS School of Management × Masai School",
        period: "Sep 2025 — Mar 2026",
        description:
          "PM program focused on building and shipping AI-native products using generative and agentic AI technologies.",
      },
    ],
    experience: [
      {
        id: 0,
        role: "Advisory Intern — Cloud, Engineering & Data Analytics",
        company: "PwC India",
        period: "June 2026 — Present",
        description:
          "Interning with the CEDA practice in Hyderabad, working on SQL-driven data analytics workflows. Building hands-on exposure to Google Cloud Platform tooling — BigQuery, GCS, Cloud Composer — through structured, self-directed technical training.",
      },
      {
        id: 1,
        role: "Independent ML Research",
        company: "Personal Projects",
        period: "2024 — Present",
        description:
          "Built end-to-end ML pipeline for day-ahead electricity load forecasting across 3 European countries using 50k+ hourly OPSD observations. Developed healthcare classification models (diabetes, heart disease, COVID) on real clinical datasets during i-Hub IIIT-H program. Built HR analytics system predicting both employee attrition (82% F1) and future salary for ~$2M financial exposure estimate. Delivered product-focused AI capstone through BITSoM × Masai PM program.",
      },
    ],
    skills: {
      Languages: ["Python", "C", "SQL (MySQL, PostgreSQL)", "JavaScript", "HTML", "CSS"],
      Frameworks: ["React", "Streamlit", "TensorFlow / Keras", "PyTorch (basics)", "scikit-learn"],
      Tools: ["Git & GitHub", "Jupyter", "VS Code", "Linux / WSL"],
      "ML & Data": ["Data Analytics", "Pandas", "NumPy", "Seaborn", "Matplotlib", "spaCy", "SARIMA / LSTM / GRU"],
    },
    certifications: [
      {
        id: 1,
        name: "AI/ML Training",
        issuer: "i-Hub, IIIT Hyderabad",
        year: "2025",
      },
      {
        id: 2,
        name: "Product Management with Generative & Agentic AI",
        issuer: "BITSoM × Masai",
        year: "2026",
      },
    ],
  },
  projects: [
    {
      id: 1,
      title: "OPSD-PowerDesk — Day-Ahead Electricity Load Forecasting",
      period: "Jan 2025 – Apr 2025",
      tech: ["Python", "TensorFlow", "SARIMA", "LSTM", "GRU", "Streamlit", "CUDA"],
      description:
        "End-to-end ML pipeline for day-ahead electricity load forecasting across Austria, Belgium, and Bulgaria using 50,000+ hourly OPSD observations.",
      highlights: [
        "Benchmarked 4 models (SARIMA, LSTM, GRU, Vanilla RNN) on MASE, sMAPE, RMSE.",
        "CUDA-accelerated training with 80/10/10 time-based data splits.",
        "Dual anomaly detection (Z-score/IQR/MAD ensemble + Isolation Forest / Random Forest) achieving 85%+ precision.",
        "Interactive Streamlit dashboard for forecast exploration and anomaly review.",
      ],
      stats: [
        { value: 50, suffix: "k+", label: "Hourly Observations" },
        { value: 4, suffix: "", label: "Models Benchmarked" },
        { value: 85, suffix: "%+", label: "Anomaly Precision" },
      ],
      github: "https://github.com/ar-five5/OPSD-PowerDesk",
    },
    {
      id: 2,
      title: "Employee Attrition & Salary Prediction",
      period: "Oct 2024",
      tech: ["Pandas", "Seaborn", "Logistic Regression", "Ridge Regression"],
      description:
        "Multi-step classification and regression pipeline on the IBM HR dataset predicting attrition risk and future salary in one unified view.",
      highlights: [
        "82% F1-score on attrition classification.",
        "Salary regression with RMSE under 5% of mean salary.",
        "Combined attrition probability and salary predictions to estimate ~$2M annual financial exposure.",
        "Seaborn dashboards visualizing high-risk workforce segments.",
      ],
      stats: [
        { value: 82, suffix: "%", label: "Attrition F1 Score" },
        { value: 2, prefix: "$", suffix: "M", label: "Est. Financial Exposure" },
      ],
      github: "https://github.com/ar-five5/Employee-Attrition-and-Salary-Prediction",
    },
    {
      id: 3,
      title: "Healthcare ML Models",
      period: "Sep 2024 – Mar 2025",
      tech: ["Python", "scikit-learn", "Pandas", "Jupyter"],
      description:
        "Collection of ML projects built during the 6-month AI/ML training program at i-Hub, IIIT Hyderabad. Classification and regression on real clinical datasets.",
      highlights: [
        "Diabetes risk classification using patient clinical data.",
        "Heart disease prediction with feature engineering and model comparison.",
        "COVID-19 regression analysis on public health data.",
      ],
      stats: [{ value: 3, suffix: "", label: "Clinical ML Models" }],
      github: "https://github.com/ar-five5/Healthcare-ML-Models",
    },
    {
      id: 4,
      title: "MOSP — AI-Powered Mess Optimization System",
      period: "Mar 2026",
      tech: ["Product Design", "AI Workflow Design", "Agentic AI"],
      description:
        "Capstone project for the BITSoM × Masai Product Management with Gen & Agentic AI program. An opt-in based system that uses AI to predict mess attendance, reduce food waste, and create transparent feedback loops between students, owners, and admins.",
      highlights: [
        "13 functional screens designed across 3 user roles (students, owners, admins).",
        "Weighted attendance prediction algorithm: 50% current opt-ins, 40% historical average, 10% special-day adjustment.",
        "Real-time meal feedback with sentiment-tagged reviews.",
        "Admin-side AI alert system for waste patterns and procurement planning.",
      ],
      stats: [
        { value: 13, suffix: "", label: "Screens Designed" },
        { value: 3, suffix: "", label: "User Roles" },
      ],
      github: "https://github.com/ar-five5/schedule_os",
    },
    {
      id: 5,
      title: "Satellite Mosaic Scheduling — takeme2space Hackathon",
      period: "Apr 2026",
      tech: ["Python", "Greedy Algorithms", "Geospatial Scheduling"],
      description:
        "Built during a 36-hour satellite tasking hackathon. Extended a baseline stop-and-stare scheduler with off-nadir pre-filtering and a greedy mosaic coverage strategy to plan multi-image satellite captures.",
      highlights: [
        "Extended stop_and_stare.py with off-nadir angle pre-filtering to cut infeasible tasking windows.",
        "Greedy mosaic coverage algorithm to sequence multi-image captures over a target area.",
        "Delivered a 2-minute pitch as the primary hackathon deliverable under a hard 36-hour build window.",
      ],
      stats: [{ value: 36, suffix: "h", label: "Build Sprint" }],
      github: "https://github.com/ar-five5",
    },
    {
      id: 6,
      title: "This Portfolio — ar-five5.github.io",
      period: "2026",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      description:
        "A monochrome, motion-driven personal site built to be as considered as the work it presents — hand-tuned page transitions, scroll choreography, and a data-driven aesthetic in place of stock templates.",
      highlights: [
        "Single-page React app with client-side routing, hash-based for static GitHub Pages hosting.",
        "Custom canvas particle field with spatial-grid optimization instead of a heavier WebGL dependency.",
        "Fully self-authored design system: type scale, motion timing, and a consistent numbered-section language.",
      ],
      github: "https://github.com/ar-five5/ar-five5.github.io",
    },
  ],
};

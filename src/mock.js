export const MOCK_DATA = {
  profile: {
    name: "Amogh Raj Godavarthy",
    role: "Computer Science Student",
    tagline: "Applied ML · Time-Series Forecasting",
    about:
      "I'm a third-year B.Tech Computer Science student at Mahindra University, Hyderabad. My work sits at the intersection of applied machine learning and real-world systems. I've built end-to-end ML pipelines for energy forecasting, healthcare classification, and HR analytics. Outside coursework I completed a 6-month AI/ML training program at i-Hub, IIIT Hyderabad, and I'm currently part of a product management program with BITSoM × Masai focused on generative and agentic AI.",
    researchInterests: [
      "Time-Series Forecasting",
      "Applied ML in Energy Systems",
      "Healthcare ML",
      "AI Safety & Interpretability",
      "Agentic AI",
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
      "ML & Data": ["Pandas", "NumPy", "Seaborn", "Matplotlib", "spaCy", "SARIMA / LSTM / GRU"],
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
      github: "https://github.com/ar-five5/schedule_os",
    },
  ],
};

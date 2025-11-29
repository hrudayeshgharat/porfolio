import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Hrudayesh Gharat",
  role: "Data Analyst",
  bio: "Results-oriented Data Analyst with expertise in Python, SQL, and Business Intelligence. Proven track record of designing end-to-end ETL pipelines, performing statistical analysis, and creating interactive dashboards to drive business growth.",
  email: "hrud.gharat@gmail.com",
  socials: {
    linkedin: "https://linkedin.com/in/hrudayeshgharat",
    github: "https://github.com/hrudayeshgharat",
    twitter: "#"
  }
};

export const SKILLS = [
  { category: "Data Analysis & BI", items: ["Python", "SQL", "Power BI", "Tableau", "Excel", "EDA", "A/B Testing"] },
  { category: "Machine Learning", items: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Keras", "Data Mining"] },
  { category: "Engineering & Tools", items: ["ETL Pipelines", "MongoDB", "Git", "Automated Systems"] }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    school: "Sandip University, Nashik",
    year: "2022 - 2025",
    grade: "CGPA: 7.17"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "SDSM College, Palghar",
    year: "2021 - 2022",
    grade: "Percentage: 56.17%"
  }
];

export const CERTIFICATIONS = [
  "Google Data Analysis with Python (Coursera)"
];

export const EXPERIENCES = [
  {
    company: "Personal Project",
    role: "Python Developer & Data Analyst",
    period: "Nov 2025",
    description: "Engineered a modular automation tool using Python to streamline data collection, reducing manual data entry time by 30%. Architected scalable MongoDB database schemas improving query performance by 20%."
  },
  {
    company: "Personal Project",
    role: "Data Analyst (Retail Sales)",
    period: "Apr 2025 - Jul 2025",
    description: "Executed comprehensive EDA on 50,000+ records using SQL and pandas with 99% accuracy. Designed an interactive Power BI dashboard identifying opportunities worth 500,000 INR."
  },
  {
    company: "Personal Project",
    role: "Data Scientist (Telecom)",
    period: "Dec 2024 - Feb 2025",
    description: "Analyzed telecom subscriber behavior to identify churn drivers. Built a Logistic Regression model achieving 88% accuracy and formulated retention strategies projected to reduce attrition by 15%."
  }
];

export const PROJECTS = [
  {
    title: "Automated Community System",
    description: "Modular automation tool using Python and NLP-based interaction models to automate user engagement, ensuring 24/7 moderation coverage.",
    tags: ["Python", "MongoDB", "TensorFlow", "NLP"],
    link: "#",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Retail Sales Dashboard",
    description: "Interactive Microsoft Power BI dashboard tracking revenue trends and sales performance to enable data-driven stock management strategies.",
    tags: ["Power BI", "SQL", "Pandas", "EDA"],
    link: "https://github.com/hrudayeshgharat/Retail-Sales-Dashboard",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Telecom Churn Prediction",
    description: "Machine learning classification model identifying churn drivers. Strategic retention recommendations based on advanced statistical modeling.",
    tags: ["Scikit-learn", "Logistic Regression", "Statistics"],
    link: "https://github.com/hrudayeshgharat/telcom_customer_churn_prediction",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Handwritten Digit Recognition",
    description: "Convolutional Neural Network (CNN) for digit recognition. Preprocessed 70,000-image MNIST dataset to optimize deep learning input quality.",
    tags: ["Deep Learning", "CNN", "Keras", "TensorFlow"],
    link: "https://github.com/hrudayeshgharat/Handwritten-Digit-Recognition-using-CNN",
    color: "from-emerald-500 to-teal-500"
  }
];
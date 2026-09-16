import React from 'react';
import { Link } from 'react-router-dom';

const Archive = () => {
    const projects = [
        {
            year: '2026',
            title: 'Portfolio v2 — AI-Powered Portfolio',
            description:
                'Full-stack portfolio with an integrated RAG assistant using retrieval, vector search, and local LLM inference.',
            builtWith: [
                'React',
                'Vite',
                'FastAPI',
                'Python',
                'LangChain',
                'ChromaDB',
                'PostgreSQL',
                'Docker',
                'Ollama'
            ],
            github: 'https://github.com/JyothsnaVellanki22/portfolio-v2',
        },
        {
            year: '2026',
            title: 'WHT — What’s Happening in Tech',
            description:
                'Tech career platform designed to help students and early-career professionals understand job-market trends and navigate the technology industry.',
            builtWith: [
                'React',
                'JavaScript',
                'Python',
                'FastAPI',
                'SQLAlchemy'
            ],
            github: 'https://github.com/JyothsnaVellanki22/WHT',
        },
        {
            year: '2026',
            title: 'ChapterV2 — AI Reading Platform',
            description:
                'AI-powered reading engagement platform designed around student and professor workflows, secure access, and structured learning experiences.',
            builtWith: [
                'HTML',
                'React',
                'TypeScript',
                'PostgreSQL',
                'Supabase'
            ],
            github: 'https://github.com/JyothsnaVellanki22/ChapterV2',
        },
        {
            year: '2026',
            title: 'Chapter Website',
            description:
                'Web experience for the Chapter Reading platform, presenting its reading-focused product and user experience.',
            builtWith: [
                'HTML'
            ],
            github: 'https://github.com/JyothsnaVellanki22/ChapterWebsite',
        },
        {
            year: '2026',
            title: 'MyMind — AI Thought Journal',
            description:
                'AI-powered personal thought journal and digital brain for organizing reflections, tasks, goals, and personal knowledge.',
            builtWith: [
                'JavaScript',
                'AI',
                'Full Stack'
            ],
            github: 'https://github.com/JyothsnaVellanki22/MyMind',
        },
        {
            year: '2026',
            title: 'Movie Expert',
            description:
                'Python-based AI application designed to provide movie-related information and intelligent recommendations.',
            builtWith: [
                'Python',
                'AI'
            ],
            github: 'https://github.com/JyothsnaVellanki22/Movie_Expert',
        },
        {
            year: '2026',
            title: 'Scam Mail Detector',
            description:
                'AI for Security project focused on identifying potentially fraudulent or scam emails using machine-learning-based analysis.',
            builtWith: [
                'Python',
                'Machine Learning',
                'AI for Security'
            ],
            github: 'https://github.com/JyothsnaVellanki22/ScamMailDetector',
        },
        {
            year: '2026',
            title: 'AgentAI',
            description:
                'Python-based AI agent project exploring autonomous AI workflows, reasoning, and task-oriented intelligent systems.',
            builtWith: [
                'Python',
                'AI Agents'
            ],
            github: 'https://github.com/JyothsnaVellanki22/AgentAI',
        },
        {
            year: '2025',
            title: 'Fake-Detector — AI-Powered Job Filter',
            description:
                'AI-powered filtering system designed to analyze job-related information and identify potentially suspicious or misleading content.',
            builtWith: [
                'Python',
                'Flask',
                'FastAPI',
                'Angular',
                'PostgreSQL',
                'Docker',
                'PyTorch'
            ],
            github: null,
        },
        {
            year: '2025',
            title: 'Coca-Cola Enterprise AI Application',
            description:
                'Enterprise application work combining modern frontend development, backend APIs, data services, and AI-enabled workflows.',
            builtWith: [
                'Angular',
                'Python',
                'FastAPI',
                'PostgreSQL',
                'Docker'
            ],
            github: null,
        },
        {
            year: '2025',
            title: 'GenAI Chatbot — RAG System',
            description:
                'Generative AI chatbot using retrieval-augmented generation to ground LLM responses in application-specific knowledge.',
            builtWith: [
                'React',
                'Python',
                'LangChain',
                'RAG',
                'LLMs'
            ],
            github: null,
        },
        {
            year: '2025',
            title: 'Portfolio v1',
            description:
                'Responsive personal portfolio built to showcase my software engineering experience, technical skills, and projects.',
            builtWith: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            github: 'https://github.com/JyothsnaVellanki22/Portfolio',
        },
        {
            year: '2025',
            title: 'Cam Scanner — Intelligent Document Processing',
            description:
                'Computer-vision project for processing scanned documents and extracting useful information from images.',
            builtWith: [
                'Python',
                'TensorFlow',
                'Tesseract.js',
                'Pandas',
                'NumPy'
            ],
            github: 'https://github.com/JyothsnaVellanki22/CamScanner',
        },
        {
            year: '2023',
            title: 'Detection of Possible Illicit Messages',
            description:
                'AI for Security research exploring NLP and machine-learning techniques for identifying potentially suspicious online communications.',
            builtWith: [
                'AI for Security',
                'Python',
                'NLP',
                'Computer Vision',
                'SVM',
                'Naive Bayes',
                'CNN'
            ],
            github: null,
        },
        {
            year: '2023',
            title: 'Security Dashboard',
            description:
                'Security-focused dashboard for presenting and analyzing security information through an interactive interface.',
            builtWith: [
                'Security Analytics',
                'React',
                'Node.js',
                'Power BI'
            ],
            github: null,
        },
        {
            year: '2022',
            title: 'Cipher Code Security Analysis',
            description:
                'Cryptographic security project focused on identifying insecure key handling, weak hashing, and implementation-level vulnerabilities.',
            builtWith: [
                'Cryptography',
                'Vulnerability Analysis',
                'Security Testing',
                'Python'
            ],
            github: null,
        },
        {
            year: '2022',
            title: 'Banking System',
            description:
                'Full-stack banking application implementing core account and transaction workflows through a web-based interface.',
            builtWith: [
                'PHP',
                'HTML',
                'MySQL',
                'JavaScript'
            ],
            github: null,
        },
    ];

    return (
        <div className="archive-page">
            <header className="archive-header">
                <Link to="/" className="back-link">
                    ← Jyothsna
                </Link>

                <h1 className="big-heading">All Projects</h1>

                <p className="subtitle">
                    AI systems, AI for Security, security engineering, and
                    software projects I’ve worked on.
                </p>
            </header>

            <div className="archive-content">
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Project</th>
                            <th className="hide-on-mobile">Description</th>
                            <th className="hide-on-mobile">Built with</th>
                            <th>Link</th>
                        </tr>
                    </thead>

                    <tbody>
                        {projects.map((project, i) => (
                            <tr key={i}>
                                <td className="year">
                                    {project.year}
                                </td>

                                <td className="title">
                                    {project.title}
                                </td>

                                <td className="description hide-on-mobile">
                                    {project.description}
                                </td>

                                <td className="tech hide-on-mobile">
                                    {project.builtWith.map((item, index) => (
                                        <span
                                            key={index}
                                            className="tech-tag"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </td>

                                <td className="project-link">
                                    {project.github ? (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View ${project.title} on GitHub`}
                                        >
                                            GitHub ↗
                                        </a>
                                    ) : (
                                        <span>—</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Archive;

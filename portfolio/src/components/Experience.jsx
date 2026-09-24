import React from 'react';
import ScrollReveal from './ScrollReveal';

const Experience = () => {
    const experiences = [
        {
            company: 'Chapter Reading LLC',
            role: 'Software Engineer',
            range: 'May 2026 – Aug 2026',
            description: (
                <>
                    Built and delivered an{' '}
                    <strong>
                        AI-powered reading engagement platform
                    </strong>{' '}
                    using React, TypeScript, PostgreSQL, and Supabase.
                    Developed secure application workflows, RBAC, REST APIs,
                    data models, and AI-ready data pipelines supporting
                    student and professor experiences.
                </>
            ),
        },
        {
            company: 'Coke One North America (CONA Services)',
            role: 'Software Engineer',
            range: 'May 2025 – Apr 2026',
            description: (
                <>
                    Engineered enterprise applications and an{' '}
                    <strong>
                        AI-powered RAG agent platform
                    </strong>{' '}
                    using Angular, Python, FastAPI, PostgreSQL, LangChain,
                    and LangGraph. Built secure APIs and scalable AI workflows
                    with OAuth2/JWT, retrieval pipelines, Docker, CI/CD,
                    testing, and production observability.
                </>
            ),
        },
        {
            company: 'Mindtree',
            role: 'Junior Software Engineer',
            range: 'Jan 2021 – Jul 2023',
            description: (
                <>
                    Developed full-stack e-commerce services using React,
                    Python, Node.js, REST APIs, and PostgreSQL, supporting
                    high-traffic customer workflows. Implemented JWT
                    authentication, HTTPS, input validation, RBAC, and secure
                    API practices alongside NLP/ML capabilities for search and
                    content analysis.
                </>
            ),
        },
        {
            company: 'Securium Fox',
            role: 'Security Intern',
            range: '2022 – 2023',
            description: (
                <>
                    Performed{' '}
                    <strong>
                        cryptographic security and vulnerability assessment
                    </strong>,
                    analyzing cipher implementations for insecure key handling,
                    weak hashing, and security weaknesses. Applied static and
                    dynamic code analysis, security testing, and Python-based
                    automation to identify vulnerabilities and document
                    remediation recommendations.
                </>
            ),
        },
    ];

    return (
        <section
            id="experience"
            className="section experience-section"
        >
            <ScrollReveal>
                <h2 className="section-title">
                    Experience
                </h2>
            </ScrollReveal>

            <div className="experience-list">
                {experiences.map((experience, index) => (
                    <ScrollReveal
                        key={`${experience.company}-${experience.range}`}
                        delay={index * 80}
                    >
                        <article className="job">

                            <div className="job-top">
                                <div>
                                    <p className="job-role">
                                        {experience.role}
                                    </p>

                                    <h3>
                                        {experience.company}
                                    </h3>
                                </div>

                                <p className="range">
                                    {experience.range}
                                </p>
                            </div>

                            <ul>
                                <li>
                                    {experience.description}
                                </li>
                            </ul>

                            <span
                                className="job-signal"
                                aria-hidden="true"
                            />
                        </article>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default Experience;

import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <h2 className="section-title">Experience</h2>

            <div className="experience-list">

                {/* Chapter Reading LLC */}
                <div className="job">
                    <h3>Software Engineer @ Chapter Reading LLC</h3>
                    <p className="range">May 2026 – Aug 2026</p>

                    <ul>
                        <li>
                            Built and delivered an <strong>AI-powered reading engagement platform</strong> using
                            React, TypeScript, PostgreSQL, and Supabase. Developed secure application workflows,
                            RBAC, REST APIs, data models, and AI-ready data pipelines supporting student and
                            professor experiences.
                        </li>
                    </ul>
                </div>

                {/* CONA Services */}
                <div className="job">
                    <h3>Software Engineer @ Coke One North America (CONA Services)</h3>
                    <p className="range">May 2025 – Jan 2026</p>

                    <ul>
                        <li>
                            Engineered enterprise applications and an <strong>AI-powered RAG agent platform</strong> using
                            Angular, Python, FastAPI, PostgreSQL, LangChain, and LangGraph. Built secure APIs and
                            scalable AI workflows with OAuth2/JWT, retrieval pipelines, Docker, CI/CD, testing,
                            and production observability.
                        </li>
                    </ul>
                </div>

                {/* Mindtree */}
                <div className="job">
                    <h3>Junior Software Engineer @ Mindtree</h3>
                    <p className="range">Jan 2021 – Jul 2023</p>

                    <ul>
                        <li>
                            Developed full-stack e-commerce services using React, Python, Node.js, REST APIs,
                            and PostgreSQL, supporting high-traffic customer workflows. Implemented JWT
                            authentication, HTTPS, input validation, RBAC, and secure API practices alongside
                            NLP/ML capabilities for search and content analysis.
                        </li>
                    </ul>
                </div>

                {/* Securium Fox */}
                <div className="job">
                    <h3>Security Intern @ Securium Fox</h3>
                    <p className="range">2022 – 2023</p>

                    <ul>
                        <li>
                            Performed <strong>cryptographic security and vulnerability assessment</strong>,
                            analyzing cipher implementations for insecure key handling, weak hashing, and
                            security weaknesses. Applied static and dynamic code analysis, security testing,
                            and Python-based automation to identify vulnerabilities and document remediation
                            recommendations.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Experience;

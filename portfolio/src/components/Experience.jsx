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
                Built a reading engagement platform supporting student and
                professor experiences through annotation, course content
                management, reading progress tracking, and engagement insights.
                Developed secure access controls and data workflows to support
                AI-driven capabilities.
            </>
        ),
    },
    {
        company: 'Coke One North America (CONA Services)',
        role: 'Software Engineer',
        range: 'May 2025 – Apr 2026',
        description: (
            <>
                Developed enterprise applications and an AI-powered knowledge
                assistant that helped users retrieve relevant information from
                organizational documents. Built secure application workflows,
                improved information retrieval, and supported reliable releases
                and production operations.
            </>
        ),
    },
    {
        company: 'Mindtree',
        role: 'Junior Software Engineer',
        range: 'Jan 2021 – Jul 2023',
        description: (
            <>
                Developed an e-commerce platform supporting product browsing,
                search, checkout, and order management for high-traffic customer
                workflows. Improved application performance and strengthened
                security through access controls, input validation, and secure
                handling of customer information.
            </>
        ),
    },
    {
        company: 'Securium Fox',
        role: 'Security Intern',
        range: '2022 – 2023',
        description: (
            <>
                Assessed application security and cryptographic implementations
                to identify weaknesses in key handling, password hashing, and
                sensitive data protection. Conducted security testing,
                documented findings, and recommended remediation measures.
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

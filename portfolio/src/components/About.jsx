import React from 'react';
import ScrollReveal from './ScrollReveal';

const About = () => {
    return (
        <section id="about" className="section about-section">

            <ScrollReveal>
                <h2 className="section-title">
                    About
                </h2>
            </ScrollReveal>

            <div className="content">

                <ScrollReveal delay={80}>
                    <p>
                        I work on{' '}
                        <strong>
                            AI-powered software systems and AI for Security
                        </strong>{' '}
                        — combining software engineering, machine learning,
                        and security to build intelligent, reliable, and
                        production-ready applications.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={140}>
                    <p>
                        My work spans{' '}
                        <strong>
                            RAG and agentic AI systems, full-stack applications,
                            backend APIs, application security, and
                            security-focused automation
                        </strong>
                        . I’ve worked on enterprise AI applications at Coke One
                        North America, built and delivered an AI-powered
                        education platform at Chapter Reading, and worked on
                        cryptographic security and vulnerability analysis at
                        Securium Fox.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <p>
                        My current focus is{' '}
                        <strong>AI for Security</strong> — exploring how
                        machine learning, NLP, LLMs, and agentic systems can
                        support{' '}
                        <strong>
                            threat detection, vulnerability analysis,
                            malicious-content detection, and security
                            automation
                        </strong>
                        .
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={260}>
                    <p>
                        I’m particularly interested in connecting{' '}
                        <strong>
                            AI research with practical cybersecurity engineering
                        </strong>{' '}
                        — taking ideas from experimentation to real-world
                        systems that can be evaluated, secured, deployed, and
                        operated reliably in production.
                    </p>
                </ScrollReveal>

            </div>

        </section>
    );
};

export default About;

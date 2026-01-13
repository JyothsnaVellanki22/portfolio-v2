import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="experience-list">
                <div className="job">
                    <h3>Software Engineer @ CONA</h3>
                    <p className="range">2025 - Present</p>
                    <ul>
                        <li>Built scalable Angular apps and micro-frontends powering enterprise Coca-Cola bottler operations. Developed secure backend microservices with FastAPI/Flask, optimized databases with PostgreSQL/SQLAlchemy, and automated deployments with GitHub Actions & Azure DevOps. Delivered E2E testing frameworks, Dockerized services, and collaborated across teams to ship reliable, user-centric solutions. Designed a full Generative AI chatbot (UI + RAG backend) and supported Databricks/Fabric data workflows.</li>
                    </ul>
                </div>
                <div className="job">
                    <h3>Full-Stack Engineer @ SecruriumFox</h3>
                    <p className="range">2022 - 2023</p>
                    <ul>
                        <li>Developed a responsive, customer-facing e-commerce application that enables seamless product browsing, selection, real-time inventory visibility, and secure checkout across devices and browsers. Designed reusable UI components and interactive forms to enhance usability, customer engagement, and data protection. Ensured high code quality through automated testing, version control, and active participation in agile ceremonies, code reviews, and cross-functional collaboration.</li>
                    </ul>
                </div>
                <div className="job">
                    <h3>Software Engineer @ SecruriumFox</h3>
                    <p className="range">2021</p>
                    <ul>
                        <li>Developed a full-stack inventory tracking application to improve operational visibility across product, order, and customer data. Integrated user interfaces with backend services and databases to enable real-time stock updates and reliable data synchronization. Enhanced system stability and team efficiency through automated testing, clear documentation, and close collaboration on requirement clarification.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;

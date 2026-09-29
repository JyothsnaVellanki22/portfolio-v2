import React from 'react';

import {
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';

import {
    SiVercel
} from 'react-icons/si';

const Sidebar = () => {
    return (
        <header className="sidebar">
            <div className="sidebar-content">

                <div className="identity">
                    <h1>
                        Jyothsna
                    </h1>

                    <span
                        className="identity-signal"
                        aria-hidden="true"
                    />

                    <h2>
                        Software Engineer
                    </h2>

                    <p className="identity-focus">
                        AI Systems
                        <span>•</span>
                        AI for Security
                        <span>•</span>
                        Full Stack
                    </p>
                </div>

                <nav
                    className="nav"
                    aria-label="Portfolio navigation"
                >
                    <ul>
                        <li>
                            <a
                                href="#about"
                                className="nav-link"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#experience"
                                className="nav-link"
                            >
                                Experience
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projects"
                                className="nav-link"
                            >
                                Projects
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="socials">

                    <a
                        href="https://github.com/JyothsnaVellanki22"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="Jyothsna's GitHub"
                        title="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jyothsna-vellanki/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="Jyothsna's LinkedIn"
                        title="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://vercel.com/jyothsna-s-projects-71692b4a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="Jyothsna's Vercel"
                        title="Vercel"
                    >
                        <SiVercel />
                    </a>

                </div>

            </div>
        </header>
    );
};

export default Sidebar;

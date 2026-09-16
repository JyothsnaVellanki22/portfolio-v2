import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';

const Sidebar = () => {
    return (
        <header className="sidebar">
            <div className="sidebar-content">

                <h1>Jyothsna</h1>

                <h2>Software Engineer</h2>

                <p>
                    AI Systems • AI for Security • Full Stack
                </p>

                <nav className="nav">
                    <ul>
                        <li>
                            <a href="#about" className="nav-link">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#experience" className="nav-link">
                                Experience
                            </a>
                        </li>

                        <li>
                            <a href="#projects" className="nav-link">
                                Projects
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="socials">

                    {/* GitHub */}
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

                    {/* LinkedIn */}
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

                    {/* Vercel */}
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

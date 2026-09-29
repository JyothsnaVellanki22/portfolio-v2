import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Archive from './components/Archive';
import CursorGlow from './components/CursorGlow';
import ChatWidget from './components/ChatWidget';

import './App.css';

function App() {
  return (
    <div className="app">

      {/* Global Mouse-Reactive Background Glow */}
      <CursorGlow />

      <Routes>

        {/* Main Portfolio Page */}
        <Route
          path="/"
          element={
            <div className="layout">

              {/* Left Sidebar */}
              <Sidebar />

              {/* Main Portfolio Content */}
              <main className="main-content">

                <About />

                <Experience />

                <Projects />

                {/* Footer */}
                <footer className="footer">
                  <p>
                    Designed &amp; built with{' '}
                    <a
                      href="https://react.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React
                    </a>
                    . Coded in{' '}
                    <a
                      href="https://code.visualstudio.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visual Studio Code
                    </a>
                    . Powered by{' '}
                    <a
                      href="https://vite.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vite
                    </a>
                    {' '}and{' '}
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vanilla CSS
                    </a>
                    , deployed with{' '}
                    <a
                      href="https://vercel.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vercel
                    </a>
                    .
                  </p>
                </footer>

              </main>
            </div>
          }
        />

        {/* Full Project Archive */}
        <Route
          path="/archive"
          element={<Archive />}
        />

      </Routes>

      {/* AI Portfolio Assistant */}
      <ChatWidget />

    </div>
  );
}

export default App;

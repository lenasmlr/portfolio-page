import { useEffect } from 'react';
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Routes,
  Route,
  useLocation,
} from 'react-router';

import logo from './assets/icon@600x.png';
import './App.css';

import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Skills from './pages/skills';
import Contact from './pages/contact';
import Project1 from './pages/project1';

// Move to the top when the visitor opens a different page.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Shared navigation. A mobile layout is planned for Phase 2.
function Header() {
  return (
    <header className="header">
      <nav className="navbar" aria-label="Main navigation">
        {/* Clicking the logo returns to Home. */}
        <NavLink
          to="/"
          className="logo-container"
          aria-label="Lena Semmler — Home"
        >
          <img src={logo} alt="" className="logo" />
        </NavLink>

        {/* NavLink highlights the current page. */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/experience">Experience</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Navigation is shared by every page. */}
      <Header />

      {/* Render the page that matches the current URL. */}
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/project-1" element={<Project1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Skills />} />

          {/* Keep the old Skills address working. */}
          <Route
            path="/skills"
            element={<Navigate to="/experience" replace />}
          />

          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>

      {/* Small copyright footer shared by every page. */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Lena Semmler.
          {' '}All rights reserved.
        </p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
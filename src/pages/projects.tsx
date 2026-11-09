import { Link } from 'react-router';

// Displays four projects with temporary image placeholders.
function Projects() {
  return (
    <section className="projects-page">
      <h1>PROJECTS</h1>

      <div className="projects-grid">

        {/* Project 1 */}
        <article className="portfolio-project">
          <div
            className="project-image-placeholder image-tall"
            aria-hidden="true"
          />

          <h2>PROJECT 1</h2>

          <p>
            This project will be developed during the semester.
            A short introduction will appear here.
          </p>

          <Link to="/projects/project-1" className="project-link">
            See more →
          </Link>
        </article>

        {/* Project 2 */}
        <article className="portfolio-project">
          <div
            className="project-image-placeholder image-short"
            aria-hidden="true"
          />

          <h2>PROJECT 2</h2>

          <p>
            This project will be developed during the semester.
            A short introduction will appear here.
          </p>

          <details className="project-more">
            <summary>See more →</summary>
          </details>
        </article>

        {/* Project 3 */}
        <article className="portfolio-project">
          <div
            className="project-image-placeholder image-tall"
            aria-hidden="true"
          />

          <h2>PROJECT 3</h2>

          <p>
            This project will be developed during the semester.
            A short introduction will appear here.
          </p>

          <details className="project-more">
            <summary>See more →</summary>
          </details>
        </article>

        {/* Project 4 */}
        <article className="portfolio-project">
          <div
            className="project-image-placeholder image-short"
            aria-hidden="true"
          />

          <h2>PROJECT 4</h2>

          <p>
            This project will be developed during the semester.
            A short introduction will appear here.
          </p>

          <details className="project-more">
            <summary>See more →</summary>
          </details>
        </article>

      </div>
    </section>
  );
}

export default Projects;
import { Link } from 'react-router';

function Project1() {
  return (
    <section className="project-detail">
      <Link to="/projects">← Back to projects</Link>

      <h1>Project 1</h1>

      <p>
        This project will be developed during the semester.
        My design process and final outcome will appear here.
      </p>
    </section>
  );
}

export default Project1;
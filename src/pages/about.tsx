import aboutPhoto from '../assets/about.jpg';

function About() {
  return (
    <section id="about" className="about-page">
      <h1>About</h1>

      <div className="about-layout">
        {/* Introduction on the left */}
        <div className="about-text">
          <p>
            Hi, I’m Lena! I’m a designer from Germany specialising
            in UX and Interaction design.
          </p>

          <p>
            I enjoy creating thoughtful digital experiences that
            are easy to use and visually engaging.
          </p>

          <p>
            This portfolio will document the projects I develop
            throughout my course, including my ideas, design
            process and final outcomes.
          </p>
        </div>

        {/* Image */}
        <img
        src={aboutPhoto}
        /* Image alt for people using screen readers */
        alt="Portrait of Lena Semmler"
        className="about-image"
/>      </div>
    </section>
  );
}

export default About;
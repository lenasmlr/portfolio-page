function Skills() {
  return (
    <section id="skills" className="skills-page">
      <div className="skills-content">
        <h1>EXPERIENCE</h1> 

        <p className="skills-introduction">
          A short introduction about my experiences and the tools
          I use will appear here.
        </p>

        {/* Skill names and descriptions */}
        <dl className="skills-list">
          <div className="skill-row">
            <dt>MSc Interaction and Experience Design 2027</dt>
            <dd>University of Limerick, Ireland</dd>
          </div>

          <div className="skill-row">
            <dt>Bachelor of Arts 2024</dt>
            <dd>University of Applied Sciences Hof, Germany</dd>
          </div>

          <div className="skill-row">
            <dt>Internship</dt>
            <dd>Agentur Reingold, Nuremberg</dd>
          </div>

          <div className="skill-row">
            <dt>Experience 4</dt>
            <dd>A short description of this skill.</dd>
          </div>

        </dl>
      </div>

      {/* The right column is intentionally left empty */}
    </section>
  );
}

export default Skills;

function Contact() {

  return (
    <section id="contact" className="contact-page">
      <h1>Get in touch</h1>

      {/*Email Link*/}
      <div>
          <a
        href="mailto:lena.semmler.par@gmail.com"
        className="contact-email"
      >
        lena.semmler.par@gmail.com
      </a>

      </div>

      {/* Links at the bottom left */}
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/lena-semmler-96261623a"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://www.behance.net/lenasemmler"
          target="_blank"
          rel="noopener noreferrer"
        >
          Behance
        </a>
      </div>
    </section>
  );
}

export default Contact;
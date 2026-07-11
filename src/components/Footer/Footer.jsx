import "./Footer.css";

import Container from "../../components/Container/Container";

function Footer() {
  return (
    <footer className="footer">

      <Container>

        <div className="footer-top">

          <div className="footer-brand">

            <h2>Ahlul Fadhly</h2>

            <p>
              Frontend Developer passionate about creating
              modern, responsive, and accessible web experiences.
            </p>

          </div>

          <nav className="footer-nav">

            <a href="#home">Home</a>

            <a href="#projects">Projects</a>

            <a href="#skills">Skills</a>

            <a href="#contact">Contact</a>

          </nav>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Ahlul Fadhly. All rights reserved.
          </p>

          <span>

            Built with React • Vite

          </span>

        </div>

      </Container>

    </footer>
  );
}

export default Footer;
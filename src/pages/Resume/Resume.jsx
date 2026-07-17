import "./Resume.css";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <main className="resume">

      <div className="resume-header">
        <h1>Resume</h1>

        <p>
          Frontend Developer · React · Spring Boot · UI/UX Enthusiast
        </p>

        <a
          href="/resume.pdf"
          download
          className="download-btn"
        >
          Download PDF
        </a>

      </div>

      <div className="resume-preview">

        <img
          src="/resume-preview.jpg"
          alt="Resume Preview"
        />

      </div>

    </main>
  );
}

export default Resume;
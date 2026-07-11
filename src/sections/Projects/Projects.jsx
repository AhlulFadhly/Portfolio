import "./Projects.css";

import Container from "../../components/Container/Container";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { projects } from "../../data/projects";


function Projects() {
  return (
    <section className="projects" id="projects">
      <Container>
        <SectionHeader
          align="center"
          tag="Selected Work"
          title={
            <>
              Interfaces engineered
              <br />
              with product-level detail.
            </>
          }
          description="A focused set of frontend projects covering accessible flows, real-time dashboards, AI-assisted interaction, and polished responsive systems."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              {/* preview */}

              <div className="project-preview">
                <div className="preview-header">
                  <div className="browser-dots">
                    <span className="red"></span>
                    <span className="yellow"></span>
                    <span className="green"></span>
                  </div>

                  <span>Preview</span>
                </div>

                <div className="preview-body">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>

              {/* content */}

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank">GitHub</a>

                  <a href={project.demo} target="_blank">Live Demo</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;

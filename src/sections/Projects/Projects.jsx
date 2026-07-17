import "./Projects.css";

import Container from "../../components/Container/Container";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { projects } from "../../data/projects";
import { useNavigate } from "react-router-dom"; 

function Projects() {
  const navigate = useNavigate();
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
            <article
              key={project.id}
              className="project-card"
              onClick={() => navigate(`/detail/${project.id}`)} // Arahkan ke rute dengan ID
              style={{ cursor: "pointer" }}
            >
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
                  <img src={project.image[0]} alt={project.title} />
                </div>
              </div>

              {/* content */}

              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-desc">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
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

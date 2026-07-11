import "./Skills.css";

import Container from "../../components/Container/Container";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { skills } from "../../data/skills";
import useReveal from "../../hook/useReveal";

function Skills() {
   const revealRef = useReveal();
  return (
    <section className="skills reveal" id="skills" ref={revealRef}>
      <Container>
        <SectionHeader
          align="center"
          tag="Technical Stack"
          title={
            <>
              Modern tools,
              <br />
              organized by product impact.
            </>
          }
          description="Instead of progress bars, the stack is grouped like a real product system: interface, services, data, cloud, and collaboration tools."
        />

        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />

              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;

import "./Contact.css";

import Container from "../../components/Container/Container";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { socials } from "../../data/socials";

function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>

        <SectionHeader
          align="center"
          tag="Contact"
          title={<>Let's Connect</>}
          description="Available for freelance, full-time opportunities, or simply to discuss great ideas."
        />

        <div className="contact-grid">

          {socials.map((item) => (

            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >

              <img
                src={item.icon}
                alt={item.title}
                className="contact-icon"
              />

              <div className="contact-info">

                <span>{item.title}</span>

                <p>{item.value}</p>

              </div>

            </a>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Contact;
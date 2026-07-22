import "./Hero.css";
import { useEffect, useState } from "react";

import { FaArrowRight } from "react-icons/fa6";

import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import hero from "../../assets/images/hero.png";

function Hero() {
  const words = [
  "Frontend",
  "Backend",
  "AI",
  "Software",
  "Products",
];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));

          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));

          if (text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 60 : 120,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);
  return (
    <section className="hero" id="home">
      <Container>
        <div className="hero__wrapper">
          {/* LEFT */}

          <div className="hero__content">
            <Badge>Available for opportunities</Badge>

            <h1>
              Crafting 
              <br />
              Modern
              <br />
              <span className="hero__typing">{text}</span>
              <br />
              Experiences.
            </h1>

            <p>
              Software Engineer passionate about developing scalable systems,
              AI-powered solutions, and modern applications that deliver
              meaningful user experiences.
            </p>

            <div className="hero__buttons">
              <a href="#projects">
                <Button>View Projects</Button>
              </a>

              <a href="#contact">
                <Button variant="secondary">Contact Me</Button>
              </a>
            </div>

            <div className="hero__features">
              <span>Accessible UI</span>

              <span>Responsive Systems</span>

              <span>Clean Architecture</span>
            </div>
          </div>

          {/* RIGHT */}

          <div className="hero-img">
            <img src={hero} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;

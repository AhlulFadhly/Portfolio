import "./Hero.css";

import {
  FaArrowRight,
} from "react-icons/fa6";

import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";

function Hero() {
  return (
    <section className="hero" id="home">
      <Container>

        <div className="hero__wrapper">

          {/* LEFT */}

          <div className="hero__content">

            <Badge>
              Available for frontend opportunities
            </Badge>

            <h1>
              Crafting Modern
              <br />
              Frontend
              <br />
              Experiences.
            </h1>

            <p>
              Frontend Developer passionate about creating fast,
              responsive, accessible, and beautiful web
              applications with clean architecture and
              delightful user experiences.
            </p>

            <div className="hero__buttons">

              <a href="#projects">
              <Button>
                View Projects
              </Button>
              </a>

              <a href="#contact">
              <Button variant="secondary">
                Contact Me
              </Button>
              </a>


            </div>

            <div className="hero__features">

              <span>Accessible UI</span>

              <span>Responsive Systems</span>

              <span>Clean Architecture</span>

            </div>

          </div>

          {/* RIGHT */}

          <div className="hero-ui">

            <div className="hero-ui__header">

              <div className="browser">

                <span className="red"></span>

                <span className="yellow"></span>

                <span className="green"></span>

              </div>

              <small>ahlul.dev/ui-system</small>

            </div>

            <div className="preview">

              <div className="preview-row">

                <div className="card lg"></div>

                <div className="card lg active-green"></div>

              </div>

              <div className="preview-row">

                <div className="card sm"></div>

                <div className="card xl active-blue"></div>

                <div className="card sm"></div>

              </div>

              <div className="card footer"></div>

            </div>

            <div className="code">

              <p>
                const craft = build({"{"})
              </p>

              <span className="cyan">
                accessible: true,
              </span>

              <span className="kuning">
                responsive: true,
              </span>

              <p>{"});"}</p>

            </div>

            <div className="stack">

              <span>
                <img src="src/assets/icons/react.svg" alt="" className="icon"/>
                React
              </span>

              <span>
                <img src="src/assets/icons/angular.svg" alt="" className="icon"/>
                Angular
              </span>

              <span>
                <img src="src/assets/icons/ts.svg" alt="" className="icon"/>
                TypeScript
              </span>

              <span>
                <img src="src/assets/icons/Figma.svg" alt="" className="icon"/>
                Figma
              </span>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Hero;
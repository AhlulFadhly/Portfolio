import "./Intro.css";

function Intro({ hide }) {
  return (
    <div className={`intro ${hide ? "intro--hide" : ""}`}>

      <div className="intro-glow"></div>

      <div className="intro-content">

        <div className="intro-message">

          <span>Building experiences,</span>

          <span>not just interfaces.</span>

        </div>

        <div className="intro-name">

          <h1>AHLUL FADHLY</h1>

          <p>I am Developer</p>

        </div>

      </div>

    </div>
  );
}

export default Intro;
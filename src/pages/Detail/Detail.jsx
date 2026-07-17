import { useParams, useNavigate } from "react-router-dom";
// Tambahkan useState
import { useEffect, useState } from "react";
import "./Detail.css";
import { projects } from "../../data/projects";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);

  const project = projects.find((p) => p.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!project || project.image.length <= 1) return;

    const timer = setTimeout(() => {
      setCurrentImage((prev) =>
        prev === project.image.length - 1 ? 0 : prev + 1,
      );
    }, 2500);

    return () => clearTimeout(timer);
  }, [currentImage, project]);

  if (!project) return <div>Project Not Found</div>;

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.image.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.image.length - 1 : prev - 1,
    );
  };

  return (
    <section className="detail-page reveal show">
      <div className="container">
        <div className="detail-window">
          <div className="detail-topbar">
            <div className="browser-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
          </div>

          <div className="detail-body">
            <div className="detail-header">
              <h1 className="detail-title">{project.title}</h1>
              <div className="detail-tech">
                {project.tech.map((item) => (
                  <span key={item} className="tech-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <hr className="detail-divider" />

            <div className="detail-overview-grid">
              <div className="overview-text">
                <span className="overview-label">PROJECT OVERVIEW</span>
                <p>{project.description}</p>
              </div>

              <div className="overview-actions">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="action-btn btn-primary"
                >
                  <span>LAUNCH PROJECT</span>
                  {/* Icon Panah */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="action-btn btn-secondary"
                >
                  <span>VIEW SOURCE CODE</span>
                  {/* Icon Github/Code */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </a>
              </div>
            </div>

            {/* SLIDER GAMBAR */}
            <div className="detail-slider">
              {/* Tempat Gambar Bergeser */}
              <div
                className="slider-track"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                {project.image.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${project.title} slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Tombol Navigasi Kiri Kanan (Hanya muncul jika gambar > 1) */}
              {project.image.length > 1 && (
                <>
                  <button className="slider-btn prev-btn" onClick={prevImage}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button className="slider-btn next-btn" onClick={nextImage}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>

                  {/* Titik Indikator di Bawah */}
                  <div className="slider-dots-container">
                    {project.image.map((_, index) => (
                      <button
                        key={index}
                        className={`slider-dot ${currentImage === index ? "active" : ""}`}
                        onClick={() => setCurrentImage(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;

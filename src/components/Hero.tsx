
export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #5b76f7 0%, #6a5bdc 40%, #7b52c5 70%, #8a49b1 100%)",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            m<span className="highlight">@vile.cx</span>
          </h1>
          <h2 className="hero-subtitle">
           i am making websites
          </h2>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              view my work
            </a>
            <a href="#contact" className="btn btn-secondary">
              get in touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <img 
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt="vile.png" 
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

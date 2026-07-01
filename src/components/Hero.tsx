
export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="highlight">Welcome</span>
          </h1>
          <h2 className="hero-subtitle">
           i am making websites
          </h2>
          <h2 className="hero-subtitle">
           co-founder @ pleiades.org.uk
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
              src={`${import.meta.env.BASE_URL}kitty2.png`}
              alt="vile.png" 
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

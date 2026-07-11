import { Link } from 'react-router-dom';
import { SITE } from '../data/site';
import { PRIMARY_FEATURED_SLUG } from '../data/projects';
import { assetUrl, projectRoute } from '../utils/helpers';
import CvDownloadButton from './CvDownloadButton';

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Welcome</p>
          <h1 id="hero-heading" className="hero-title">
            I'm building <span className="highlight">full-stack products</span>, machine-learning
            systems and silly internet tools.
          </h1>
          <p className="hero-description">
            React, TypeScript, Python, PostgreSQL, Docker and applied machine learning - from
            dissertation ML platforms to local AI tools and marketplaces.
          </p>
          <div className="hero-buttons">
            <Link to={projectRoute(PRIMARY_FEATURED_SLUG)} className="btn btn-primary">
              View featured project
            </Link>
            <a
              href={SITE.github}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
            <CvDownloadButton variant="secondary" />
          </div>
          <p className="hero-aside">
            co-founder @{' '}
            <a href={SITE.pleiades} target="_blank" rel="noopener noreferrer">
              pleiades.org.uk
            </a>
            {' · '}
            <Link to={projectRoute(PRIMARY_FEATURED_SLUG)}>dissertation project →</Link>
          </p>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <img
              src={assetUrl('kitty2.png')}
              alt="Matt Stripe — profile"
              className="profile-image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

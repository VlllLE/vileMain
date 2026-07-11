import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="container">
        <p className="error-code">404</p>
        <h1>page not found</h1>
        <p>
          This page doesn&apos;t exist. Maybe it never did. Maybe it moved. Maybe I forgot
          to deploy it. (onions)
        </p>
        <div className="error-actions">
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link to="/" state={{ scrollTo: 'projects' }} className="btn btn-secondary">
            View projects
          </Link>
        </div>
      </div>
    </div>
  );
}

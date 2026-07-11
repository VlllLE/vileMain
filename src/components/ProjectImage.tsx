import { useState } from 'react';
import { assetUrl } from '../utils/helpers';

interface ProjectImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ProjectImage({
  src,
  alt,
  width = 640,
  height = 360,
  className = '',
}: ProjectImageProps) {
  const [failed, setFailed] = useState(false);
  const fullSrc = assetUrl(src.replace(/^\//, ''));

  if (failed) {
    return (
      <div
        className={`project-image-placeholder ${className}`}
        role="img"
        aria-label={alt}
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <span className="placeholder-icon" aria-hidden="true">
          📷
        </span>
        <span className="placeholder-text">Screenshot coming soon</span>
      </div>
    );
  }

  return (
    <img
      src={fullSrc}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={`project-preview-image ${className}`}
      onError={() => setFailed(true)}
    />
  );
}

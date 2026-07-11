import { useCvAvailability } from '../hooks/useCvAvailability';

interface CvDownloadButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function CvDownloadButton({
  className = '',
  variant = 'secondary',
}: CvDownloadButtonProps) {
  const { exists, loading, url } = useCvAvailability();

  if (loading) {
    return (
      <span className={`btn btn-${variant} btn-disabled ${className}`} aria-busy="true">
        Checking CV…
      </span>
    );
  }

  if (!exists) {
    return (
      <span
        className={`btn btn-${variant} btn-disabled ${className}`}
        title="CV not uploaded yet — add matt-stripe-cv.pdf to public/cv/"
        aria-disabled="true"
      >
        CV coming soon
      </span>
    );
  }

  return (
    <a
      href={url}
      className={`btn btn-${variant} ${className}`}
      download="matt-stripe-cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download CV
    </a>
  );
}

import { useEffect, useState } from 'react';
import { assetUrl } from '../utils/helpers';
import { SITE } from '../data/site';

interface CvStatus {
  exists: boolean;
  loading: boolean;
  url: string;
}

export function useCvAvailability(): CvStatus {
  const [exists, setExists] = useState(false);
  const [loading, setLoading] = useState(true);
  const url = assetUrl(SITE.cvPath.replace(/^\//, ''));

  useEffect(() => {
    let cancelled = false;

    fetch(url, { method: 'HEAD' })
      .then((res) => {
        if (!cancelled) {
          setExists(res.ok);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setExists(false);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { exists, loading, url };
}

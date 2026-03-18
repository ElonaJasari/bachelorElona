'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoadingOverlay() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Redirect to landing page after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      router.push('/landing'); // Change '/landing' to your actual landing page route
    }, 3000); // 3 seconds - adjust as needed

    return () => clearTimeout(timer);
  }, [router]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="ods-video" role="presentation">
        <video
          className="ods-video__video"
          poster="https://ukeweb-public.s3.dualstack.eu-central-1.amazonaws.com/video/animation_poster.png"
          preload="auto"
          loop
          autoPlay
          muted
          crossOrigin="anonymous"
        >
          <source
            src="https://ukeweb-public.s3.dualstack.eu-central-1.amazonaws.com/video/animation.mp4"
            type="video/mp4"
          />
          <p className="ods-paragraph">
            To view this video please upgrade to a web browser that supports HTML5 video
          </p>
        </video>
      </div>
    </div>
  );
}
'use client';

import { useEffect, useState } from 'react';

type AsciiImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const RAMPS = [' .:-=+*#%@', '  .:-=++*##%@', ' .::-=+*#%@'];

const fallback = String.raw`
        __
   ____/ /_  ____  ____
  / __  / / / / / / / /
 / /_/ / /_/ / /_/ / /
 \__,_/\__,_/\__,_/_/
  signal / systems / craft
`;

export default function AsciiImage({ src, alt, className = '' }: AsciiImageProps) {
  const [frame, setFrame] = useState(fallback);

  useEffect(() => {
    let disposed = false;
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
    const imagePath = src.startsWith('/') ? `${basePath}${src}` : `${basePath}/${src}`;

    const render = (img: HTMLImageElement) => {
      if (disposed) return;

      const viewport = window.innerWidth;
      const width = viewport < 760 ? 168 : viewport < 1100 ? 252 : 378;
      const ratio = img.height / img.width;
      const height = Math.max(74, Math.min(210, Math.round(width * ratio * 0.48)));
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d', { willReadFrequently: true });

      if (!context) return;

      canvas.width = width;
      canvas.height = height;
      context.drawImage(img, 0, 0, width, height);
      const data = context.getImageData(0, 0, width, height).data;

      const lines: string[] = [];

      for (let y = 0; y < height; y += 1) {
        let line = '';

        for (let x = 0; x < width; x += 1) {
          const offset = (y * width + x) * 4;
          const luminance = data[offset] * 0.2126 + data[offset + 1] * 0.7152 + data[offset + 2] * 0.0722;
          const contrast = (luminance - 128) * 1.45 + 128;
          const value = Math.max(0, Math.min(255, contrast));
          const charIndex = Math.floor((value / 255) * (RAMPS[0].length - 1));
          line += RAMPS[0][charIndex];
        }

        lines.push(line);
      }

      setFrame(lines.join('\n'));
    };

    const img = new Image();
    img.src = imagePath;

    img.onload = () => {
      render(img);
    };

    img.onerror = () => setFrame(fallback);
    const handleResize = () => {
      if (img.complete && img.naturalWidth > 0) render(img);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      disposed = true;
      window.removeEventListener('resize', handleResize);
    };
  }, [src]);

  return (
    <figure className={`ascii-image ${className}`}>
      <pre aria-label={alt}>{frame}</pre>
    </figure>
  );
}

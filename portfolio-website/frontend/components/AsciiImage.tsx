'use client';

type AsciiImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function AsciiImage({ src, alt, className = '' }: AsciiImageProps) {
  return (
    <figure className={`ascii-image ${className}`}>
      <img src={src} alt={alt} className="ascii-image-img" />
    </figure>
  );
}

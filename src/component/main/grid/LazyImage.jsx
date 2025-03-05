import { useEffect, useState, useRef } from 'react';

export default function LazyImage({ className, src, alt }) {
  const imgRef = useRef();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsImageLoaded(entry.isIntersecting);
      },
      { rootMargin: '400px 0px 400px 0px' }
    );
    imgRef.current && observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return isImageLoaded ? (
    <img className={className} ref={imgRef} alt={alt} src={src} />
  ) : (
    <img className={className} ref={imgRef} alt={alt} />
  );
}

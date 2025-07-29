import { useMemo } from 'react';

const STAR_COUNT = 300;
const MAX_SIZE = 2;

const generateStars = (count) => {
  return Array.from({ length: count }).map((_, index) => {
    const size = Math.random() * MAX_SIZE;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 2 + Math.random() * 3;
    const opacity = 0.2 + Math.random() * 0.8;
    const delay = Math.random() * 5;

    return {
      id: index,
      style: {
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}%`,
        top: `${y}%`,
        opacity,
        animationDelay: `${delay}s`,
        '--duration': `${duration}s`,
      },
    };
  });
};

export default function Starfield() {
  const stars = useMemo(() => generateStars(STAR_COUNT), []);

  return (
    <div id="stars" aria-hidden="true">
      {stars.map((star) => (
        <div key={star.id} className="star" style={star.style}></div>
      ))}
    </div>
  );
};
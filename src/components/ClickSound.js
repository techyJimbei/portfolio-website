import { useEffect, useRef } from 'react';

const ClickSound = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/select.mp3`} preload="auto" />;
};

export default ClickSound;

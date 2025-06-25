import React, { useEffect, useRef, useState } from 'react';
import './BackgroundMusic.css';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.loop = true;
      audio.play().catch(() => {});
    }
  }, []);

 const toggleMute = () => {
  const audio = audioRef.current;
  if (audio) {
    if (isMuted) {
      audio.play();
    } else {
      audio.pause();
    }
    setIsMuted(!isMuted);
  }
};


  return (
    <div className="bg-music-container">
      <audio ref={audioRef} src="/sounds/bg-music.mp3" />
      <button onClick={toggleMute} className="bg-music-btn">
        <img
          src={isMuted ? '/icons/mute.svg' : '/icons/audio-on.svg'}
          alt={isMuted ? 'Muted' : 'Unmuted'}
          className="bg-music-icon"
        />
      </button>
    </div>
  );
};

export default BackgroundMusic;

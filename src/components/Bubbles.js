import React from 'react';
import './DinoScene.css';

const Bubbles = () => {
  const playSound = () => {
    const bubbleSound = new Audio('/bubble-pop.mp3');
    bubbleSound.volume = 0.4;
    bubbleSound.play().catch((err) => console.warn("Sound play failed:", err));
  };

  const handleInteraction = () => {
    playSound();
  };

  return (
    <div className="bubbles-container">
      <div className="bubble bubble-0">
        <a
          href="https://www.linkedin.com/in/shruti-malviya"
          target="_blank"
          rel="noopener noreferrer"
          className="bubble-text"
          onMouseEnter={handleInteraction}
          onClick={handleInteraction}
        >
          LinkedIn
        </a>
      </div>

      <div className="bubble bubble-1">
        <a
          href="https://github.com/techyJimbei"
          target="_blank"
          rel="noopener noreferrer"
          className="bubble-text"
          onMouseEnter={handleInteraction}
          onClick={handleInteraction}
        >
          GitHub
        </a>
      </div>

      <div className="bubble bubble-2">
        <a
          href="https://leetcode.com/u/shrutymalviya/"
          target="_blank"
          rel="noopener noreferrer"
          className="bubble-text"
          onMouseEnter={handleInteraction}
          onClick={handleInteraction}
        >
          LeetCode
        </a>
      </div>
    </div>
  );
};

export default Bubbles;

import React, { useState } from 'react';
import './TopBar.css';
import BackgroundMusic from './BackgroundMusic'; // Import the music toggle

const buttons = [
  { label: 'RESUME/CV', type: 'resume' },
  { label: 'WORK', type: 'work' },
  { label: 'ABOUT', type: 'about' },
  { label: 'CONTACT', type: 'contact' },
];

const TopBar = ({ onOpenDialog }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (type) => {
    setSelected(type);
    onOpenDialog(type);
  };

  return (
    <div className="topbar-appbar">
      <div className="topbar-toolbar">
        {buttons.map(btn => (
          <button
            key={btn.type}
            className={`topbar-btn ${selected === btn.type ? 'selected' : ''}`}
            onClick={() => handleClick(btn.type)}
          >
            {btn.label}
          </button>
        ))}

        {/* Background Music Toggle Icon Button */}
        <BackgroundMusic />
      </div>
    </div>
  );
};

export default TopBar;

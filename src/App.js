import React, { useState } from 'react';
import TopBar from './components/TopBar';
import DinoScene from './components/DinoScene';
import Bubbles from './components/Bubbles';
import NameBackdrop from './components/NameBackdrop';
import Description from './components/Description';
import ResumeDialog from './components/ResumeDialog';
import WorkDialog from './components/WorkDialog';
import AboutDialog from './components/AboutDialog';
import ContactDialog from './components/ContactDialog';
import BackgroundMusic from './components/BackgroundMusic';
import ClickSound from './components/ClickSound';
import './App.css';

function App() {
  const [dialog, setDialog] = useState(null);

  const handleOpenDialog = (type) => setDialog(type);
  const handleCloseDialog = () => setDialog(null);

  return (
    <div className="App">
        <ClickSound />
      <NameBackdrop />
      <TopBar onOpenDialog={handleOpenDialog} selectedDialog={dialog} />
      <BackgroundMusic />
      <div className="main-content">
        <DinoScene />
        <Bubbles />
      </div>
      <Description />

      {dialog === 'resume' && (
        <ResumeDialog isOpen={true} onClose={handleCloseDialog} />
      )}

      {dialog === 'work' && (
        <WorkDialog isOpen={true} onClose={handleCloseDialog} />
      )}

      {dialog === 'about' && (
        <AboutDialog
          isOpen={true}
          onClose={handleCloseDialog}
          modelPath="/about_lamb.glb" // ✅ public path (no /public prefix)
          paragraph="I'm a creative full-stack developer with a passion for blending beautiful UI with practical backend logic. I enjoy turning abstract ideas into intuitive, interactive experiences. Currently exploring 3D web tech using Three.js and Blender."
        />
      )}

{dialog === 'contact' && (
  <ContactDialog
    isOpen={true}
    onClose={handleCloseDialog}
    modelPath="/contact_duck.glb" 
  />
)}
    </div>
  );
}

export default App;

import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import './ResumeDialog.css';

const DinoModel = () => {
  const { scene } = useGLTF('/resume_dino.glb');
  const dinoRef = useRef();

  return (
    <primitive
      object={scene}
      ref={dinoRef}
      scale={5}
      position={[0, -1.5, 0]} // Move left (x), down (y)
    />
  );
};

const ResumeDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        {/* Dino poking out of border */}
        <div className="dino-container">
          <Canvas camera={{ position: [0, 0.8, 5.0], fov: 50 }} gl={{ toneMappingExposure: 0.9 }}>
            {/* Warm-toned lights */}
            <ambientLight intensity={0.3} />
            <directionalLight position={[0, 3, 3]} intensity={0.6} color="#ffe0b2" />
            <pointLight position={[0, 1.5, 2]} intensity={1.5} color="#ffcc80" />
            
            <DinoModel />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {/* PDF Viewer */}
        <div className="resume-pdf-container">
          <embed
            src="/Resume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeDialog;

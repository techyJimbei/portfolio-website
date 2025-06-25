import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import './WorkDialog.css';

const DinoModel = ({ modelPath, onClick, title }) => {
  const { scene } = useGLTF(modelPath);
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(clock.getElapsedTime() + ref.current.uuid.length) * 0.2;
    }
  });

  return (
    <group ref={ref} onClick={onClick} className="floating-dino">
      <primitive object={scene} scale={3.5} position={[0, -2.5, 0]} />
    </group>
  );
};

const FloatingDino = ({ modelPath, title, onClick }) => {
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
    if (onClick) onClick();
  };

  return (
    <div className="floating-dino-wrapper" onClick={handleClick}>
      <audio ref={audioRef} src={`/select.mp3`} preload="auto" />

      <div className="dino-canvas-container">
        <Canvas camera={{ position: [0, 0.5, 4.5] }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 3, 5]} intensity={1.4} />
          <DinoModel modelPath={modelPath} onClick={handleClick} title={title} />
        </Canvas>
      </div>
      <div className="project-title-overlay">{title}</div>
    </div>
  );
};

export default FloatingDino;

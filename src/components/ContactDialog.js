import React from 'react';
import './ContactDialog.css';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

const Model = ({ path }) => {
  const { scene } = useGLTF(path);

  // Adjust model transform
  scene.scale.set(10, 10, 10);            // Slightly larger scale
  scene.position.set(-1.2, -2, 0);           // Keep it centered on left
  scene.rotation.y = -5.5;  
   scene.rotation.x = 0.3;                // Rotate slightly to the right

  return <primitive object={scene} />;
};

const ContactDialog = ({ isOpen, onClose, modelPath }) => {
  if (!isOpen) return null;

  return (
    <div className="contact-overlay" onClick={onClose}>
      <div className="contact-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="contact-model">
          <Canvas camera={{ position: [0, 0, 6] }}>
            {/* Use only ambient light to preserve Blender colors */}
            <ambientLight intensity={1.2} />
            <Model path={modelPath} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        <div className="contact-content">
          <h2>📫 Let's Connect</h2>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:yourname@gmail.com" target="_blank" rel="noopener noreferrer">
                ishrut.malviya29@gmail.com
              </a>
            </li>
            <li>
              <strong>Instagram:</strong>{' '}
              <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
                @shrutymalviya
              </a>
            </li>
            <li>
              <strong>Discord:</strong> shrutymalviya
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactDialog;

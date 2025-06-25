import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import './DinoScene.css';
import NameBackdrop from './NameBackdrop';
import Bubbles from './Bubbles'; // ✅ Add correctly

function Dino({ mouse }) {
  const { scene } = useGLTF(`/portfolio_dino_final.glb`);
  const dinoRef = useRef();
  const headRef = useRef();

  useEffect(() => {
    const head = scene.getObjectByName('Head');
    if (head) {
      headRef.current = head;
    }
  }, [scene]);

  useFrame(() => {
    if (headRef.current && mouse.current) {
      const [x, y] = mouse.current;
      headRef.current.rotation.y = x * 0.3;
      headRef.current.rotation.x = -y * 0.3;
    }
  });

  return (
    <primitive
      ref={dinoRef}
      object={scene}
      position={[0, -1.8, 0]}
      scale={[2.8, 2.8, 2.8]}
      rotation={[0, 0, 0]}
    />
  );
}

const FallbackLoader = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="orange" />
  </mesh>
);

const DinoScene = () => {
  const mouse = useRef([0, 0]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current = [
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
      ];
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="dino-canvas-wrapper">
      <NameBackdrop />
      <Bubbles /> {/* ✅ Bubbles restored safely */}

      <Canvas camera={{ position: [0, 0.8, 5.0], fov: 50 }} gl={{ toneMappingExposure: 0.7 }}>

  <ambientLight intensity={0.2} />
  <directionalLight position={[0, 3, 3]} intensity={0.5} />
  
  {/* 🔵 Blue front light */}
  <pointLight
    position={[0, 1, 3]}
    intensity={1.5}
    color="#70c1ff"
    distance={10}
    decay={2}
  />

  {/* 🔙 Optional rim light */}
  <directionalLight
    position={[0, 2, -3]}
    intensity={0.4}
    color="#a3d5ff"
  />

  <Suspense fallback={<FallbackLoader />}>
    <Dino mouse={mouse} />
    <Environment
      background={false}
      files={`/citrus_orchard_road_puresky_4k.hdr`}
      path="/"
      ground={{ height: 5, radius: 30, scale: 100 }}
      intensity={0.4}
    />
  </Suspense>

  <OrbitControls enableZoom={false} enablePan={false} />
</Canvas>

    </div>
  );
};

export default DinoScene;

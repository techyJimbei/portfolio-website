import React from 'react';
import './AboutDialog.css';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

const Model = ({ path }) => {
    const { scene } = useGLTF(path);
  
    // Scale & position
    scene.scale.set(6, 6, 6);
    scene.position.set(1, -2, 0);
  
    // Enhance material colors (fallback override)
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.color.set('#ffc0cb'); // soft pink fallback
        child.material.emissive.set('#ff69b4'); // adds some glow
        child.material.emissiveIntensity = 0.05;
      }
    });
  
    return <primitive object={scene} />;
  };
  
  

const AboutDialog = ({ isOpen, onClose, modelPath }) => {
  if (!isOpen) return null;

  return (
    <div className="about-overlay" onClick={onClose}>
      <div className="about-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="about-text">
          <h2>👩🏻‍💻 About Me</h2>
          <p>
            Hey there! I’m a developer who’s a little obsessed with building apps that are fun, original, and have that one special thing that makes people go:<br />
            <strong>“Wait… I’ve never seen that before.” 😌</strong>
          </p>

          <p>
            I thrive on enhancing user experience — my apps are what I like to call <strong>Pinterest-coded</strong>, meaning they're crafted with design delight, functionality, and ✨vibes✨ in mind.
          </p>

          <p>
            🔧 <strong>Frontend at heart, backend by flow</strong><br />
            While frontend is where my creativity blooms 🌸, there's something almost meditative about backend work. That flow state? Chef’s kiss. 👩🏻‍🍳💻
          </p>

          <p>
            ☕ <strong>Java Enthusiast, Always</strong><br />
            Java is my comfort zone — not just a language, but a space where I feel in control. Whether I’m building an app or solving a complex problem, Java is usually my first pick.
          </p>

          <p>
            🎢 <strong>Outside the Code...</strong><br />
            When I’m not coding, I’m probably in one of three modes:
            <br />🌀 Scrolling reels at lightning speed
            <br />✍️ Sketching characters and scenes
            <br />📚 Reading fiction filled with power moves and CEOs
          </p>

          <p>
            Also — I write. Not like “I keep a journal” write. I <strong>really</strong> write. It makes me view the world with curiosity, emotion, and narrative layers. 📖
          </p>

          <p>
            🍥 <strong>Anime Core Unlocked</strong><br />
            From Attack on Titan’s rage-fueled arcs to Kamisama Hajimemashita’s sparkle — I’ve binged it all.<br />
            One Piece streak? 🏴‍☠️ Loyalty goals.
          </p>

          <p>
            👑 <strong>Between Barbie and Thrones...</strong><br />
            Still figuring out how I went from Barbie and Hogwarts to dragons roasting kingdoms... but hey, that’s adulting. 🐉
          </p>

          <p>
            ✏️ <strong>Silly Dream?</strong><br />
            To sketch and create an entire comic from scratch — characters, storylines, chaos and all. A little dream tucked away… for now.
          </p>

          <p>
            🧠 <strong>Personality Snapshot:</strong><br />
            Creative. Hyper-Energetic. Napper Pro Max.<br />
            ADHD? That’s like 70% of my OS — chaos and magic included.
          </p>
        </div>

        <div className="about-model">
        <Canvas camera={{ position: [0, 0, 6] }}>
  {/* Soft pink ambient light */}
  <ambientLight intensity={0.5} color="#ffcce7" />

  {/* Stronger directional light with warm color */}
  <directionalLight position={[2, 3, 5]} intensity={3} color="#ffaad4" />

  {/* Optional subtle backlight */}
  <directionalLight position={[-2, -1, -5]} intensity={1} color="#ffccf9" />

            <ambientLight intensity={0.8} />
            <directionalLight position={[2, 3, 5]} intensity={1.5} />
            <Model path={modelPath} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default AboutDialog;

import React, { useState } from 'react';
import './WorkDialog.css';
import FloatingDino from './FloatDino';
import ProjectDetailDialog from './ProjectDetailDialog';

const projects = [
  {
    id: 1,
    title: 'Momentum: Social Productivity App',
    model: `${process.env.PUBLIC_URL}/proj1_dino.glb`,
    images: [
      `${process.env.PUBLIC_URL}/projimg1.jpg`,
      `${process.env.PUBLIC_URL}/projimg2.jpg`,
      `${process.env.PUBLIC_URL}/projimg3.jpg`,
      `${process.env.PUBLIC_URL}/projimg4.jpg`,
      `${process.env.PUBLIC_URL}/projimg5.jpg`,
    ],
    description:
      'Momentum is a productivity-driven Android app that combines social networking with task tracking to build consistency, accountability, and motivation through community. It’s designed to encourage users to complete daily goals and share their achievements in a gamified ecosystem.',
    techStack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Spring Boot', 'PostgreSQL'],
    features: [
      'Create, edit, and track daily tasks',
      'Earn credits and unlock rewards for consistency',
      'Share achievements as stories/posts with friends',
      'Join niche communities for accountability',
      'JWT authentication and backend integration',
    ],
    link: 'https://github.com/techyJimbei/momentum' 
  },
  {
    id: 2,
    title: 'Question Paper Prediction App',
    model: `${process.env.PUBLIC_URL}/proj2_dino.glb`,
    description:
      'An interactive paper prediction platform where users bet login-earned coins on questions like "Will AI be asked in UPSC 2026?" Communities raise predictions, and users gain or lose coins based on actual outcomes. Top predictors are rewarded daily. The app features trending questions, a leaderboard, and coin-based participation.',
    techStack: [
      'Spring Boot (Java/Kotlin)',
      'PostgreSQL or Firebase Realtime DB',
      'JWT Auth / Firebase Auth',
      'Firebase Cloud Messaging (optional)',
      'React + Node.js / Firebase Console (Admin Panel)',
    ],
    features: [
      'Users earn login coins to bet on questions',
      'Communities post predictions and resolve results',
      'Trending section and daily leaderboard',
      'Top 5 confident predictors declared each day',
      'Secure token handling with Firebase/Auth/JWT',
    ],
    link: ''
  },
  {
    id: 3,
    title: 'Blockchain Donation Website',
    model: `${process.env.PUBLIC_URL}/proj3_dino.glb`,
    description:
      'A blockchain-powered donation platform on Ethereum, ensuring secure and transparent charitable giving. Users donate through MetaMask wallets to verified causes. Smart contracts handle fund distribution, with full donation tracking available on-chain for accountability.',
    techStack: ['Solidity', 'Ethereum', 'MetaMask', 'JavaScript', 'HTML/CSS'],
    features: [
      'Donate directly via MetaMask wallet',
      'Track donations in real-time on the blockchain',
      'Smart contracts ensure secure transactions',
      'Transparent and verifiable donation system',
      'Frontend built for accessibility and simplicity',
    ],
    link: 'https://github.com/techyJimbei/Blockchain-donation-website'
  },
];


const WorkDialog = ({ isOpen, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  if (!isOpen) return null;

  return (
    <>
      <div className="dialog-overlay" onClick={onClose}></div>
      <div className="work-dialog" onClick={(e) => e.stopPropagation()}>
        {projects.map((proj, index) => (
          <FloatingDino
            key={proj.id}
            modelPath={proj.model}
            title={proj.title}
            onClick={() => setSelectedProject(proj)}
            delay={index * 1.2}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default WorkDialog;

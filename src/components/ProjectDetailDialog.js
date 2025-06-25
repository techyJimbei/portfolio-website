import React, { useState, useEffect } from 'react';
import './WorkDialog.css';

const ProjectDetailDialog = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images?.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images?.length - 1 : prev - 1
    );
  };

  // Keyboard navigation (optional, adds polish)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  return (
    <div className="project-dialog-overlay" onClick={onClose}>
      <div
        className="project-dialog-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{project.title}</h2>

        {/* Image Carousel */}
        {project.images && project.images.length > 0 && (
          <div className="carousel-container">
            <button className="carousel-btn prev" onClick={handlePrev}>‹</button>

            <img
              src={project.images[currentImageIndex]}
              alt={`Screenshot ${currentImageIndex + 1} of ${project.title}`}
              className="carousel-image"
              loading="lazy"
            />

            <button className="carousel-btn next" onClick={handleNext}>›</button>

            {/* Optional: Image counter */}
            <div style={{ 
              position: 'absolute', 
              bottom: '8px', 
              right: '16px', 
              background: 'rgba(0,0,0,0.5)', 
              color: '#fff', 
              padding: '4px 8px', 
              borderRadius: '8px', 
              fontSize: '0.9rem' 
            }}>
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>
        )}

        {/* Scrollable Description */}
        <div className="scrollable-description">
          <p>{project.description}</p>

          {project.techStack?.length > 0 && (
            <>
              <h4>Tech Stack:</h4>
              <ul>
                {project.techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </>
          )}

          {project.features?.length > 0 && (
            <>
              <h4>Features:</h4>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}

          {project.link && (
            <p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#0a2540',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                }}
              >
                View Project
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailDialog;

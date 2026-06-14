import React from 'react';
import Card from 'react-bootstrap/Card';

export const ProjectCard = ({ title, description, images = [], imgSrc, imgAlt, link, size = 'medium', children }) => {
  // Handle both single image (backward compatibility) and multiple images
  const imageList = images.length > 0 ? images : (imgSrc ? [{ src: imgSrc, alt: imgAlt || title }] : []);
  
  // Define size presets
  const sizePresets = {
    small: { maxWidth: '300px', maxHeight: '200px' },
    medium: { maxWidth: '500px', maxHeight: '350px' },
    large: { maxWidth: '700px', maxHeight: '500px' },
    full: { maxWidth: '100%', maxHeight: '600px' }
  };

  const imageSize = sizePresets[size] || sizePresets.medium;

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>
          {link ? (
            <a href={link} target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'none' }}>
              {title}
            </a>
          ) : (
            title
          )}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        
        {imageList.length > 0 && (
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px',
            marginTop: '15px',
            marginBottom: '15px'
          }}>
            {imageList.map((image, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                justifyContent: 'center',
                width: '100%'
              }}>
                <img
                  src={image.src}
                  alt={image.alt || `${title} - Image ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  style={{ 
                    maxWidth: imageSize.maxWidth,
                    maxHeight: imageSize.maxHeight,
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            ))}
          </div>
        )}
        
        {children}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;

